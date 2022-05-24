const { AuthenticationError } = require('apollo-server-express');;
const { Product, User, Note, Blog, Invoice, VibeText, VibeImage } = require('../models');
const { signToken } = require('../utils/auth');
const { kind } = require('./typeDefs');
//second parentheses is the test key. Once a real Stripe account is created, replace this with an environment variable, i.e. process.env.STRIPE_KEY
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')

const resolvers = {
    Query: {
        blogs: async (parent, { title }) => {
            const params = {};

            if(title) {
                params.title = title
            }

            return await Blog.find(params)
        },
        invoice: async (parent, { _id }, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id)
                .populate({
                    path: 'invoices.products'
                })

                return user.invoices.id(_id);
            }
            throw new AuthenticationError('Not logged in')
        },
        //can we change this to two requests - read and unread and add user.admin read only?
        notes: async () => {
            return await Note.find();
        },
        products: async (parent, { name }) => {
            const params = {};

            if (name) {
                params.name = name;
            }

            return await Product.find(params)
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id)
        },
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id)
                    .populate ({
                        path: 'invoices.products'
                    });
                
                user.invoices.sort((a, b) => b.purchaseDate - a.purchaseDate)

                return user;
            }
            throw new AuthenticationError('Not logged in')
        },
        users: async() => {
            return await User.find()
        },
        vibeImage: async (parent, { _id }) => {
            const params = {};

            if (_id) {
                params._id = _id;
            }

            return await VibeImage.findById(_id)
        },
        vibeText: async (parent, { _id }) => {
            const params = {};

            if (_id) {
                params._id = _id;
            }

            return await VibeText.findById(_id)
        },
        checkout: async(parent, args, context) => {
            const invoice = new Invoice({ products: args.products })
            
            const { products } = await invoice.populate('products');
            const line_items = [];

            for (let i = 0; i < products.length; i++) {
                // generate product id
                const product = await stripe.products.create({
                    name: products[i].name,
                    description: products[i].description
                });
              
                // generate price id using the product id
                const price = await stripe.prices.create({
                    product: product.id,
                    //multiple by 100 because Stripe stores prices in cents, not dollars
                    unit_amount: products[i].usdPrice * 100,
                    currency: 'usd',
                });
              
                // add price id to the line items array
                line_items.push({
                    price: price.id,
                    quantity: 1
                });
            }

            //this will use the line_items array to generate a Stripe checkout session. The checkout session ID is the only data the resolver needs, so it's returned.
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items,
                mode: 'payment',
                success_url: 'https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
                cancel_url: 'https://example.com/cancel'
              });
              
              return { session: session.id };
        },
    },
    Mutation: {
        addBlog: async (parent, args) => {
            const blog = await Blog.create(args);
            
            return blog;
        },
        addInvoice: async (parent, { products }, context) => {
            console.log(context);

            if (context.user) {
                const invoice = new Invoice({ products }); 

                await User.findByIdAndUpdate(context.user._id, { $push: { invoices: invoice }})

                return invoice
            }
            throw new AuthenticationError('Not logged in')
        },
        addNote: async (parent, args) => {
            const note = await Note.create(args);
            
            return note;
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            
            return {token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
        },
        addProduct: async (parent, args) => {
            const product = await Product.create(args)

            return product;
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
        addVibeImage: async (parent, args) => {
            const vibeImage = await VibeImage.create(args);
            
            return vibeImage;
        },
        addVibeText: async (parent, args) => {
            const vibeText = await VibeText.create(args);
            
            return vibeText;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        }
    }
};

module.exports = resolvers;