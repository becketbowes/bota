const { AuthenticationError } = require('apollo-server-express');;
const { Product, User, Note, Blog, Invoice, VibeText, VibeImage } = require('../models');
const { signToken } = require('../utils/auth');

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
        }
    },
    //checkout needed
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