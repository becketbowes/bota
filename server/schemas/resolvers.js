const { AuthenticationError } = require('apollo-server-express');;
const { Product, User } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        invoice: async (parent, { _id }, context) => {
            if(context.user) {
                const user = await User.findById(context.user._id)
                .populate({
                    path: 'invoices.items'
                })

                return user.invoices.id(_id);
            }
            throw new AuthenticationError('Not logged in')
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
                        path: 'invoices.items'
                    });
                
                user.invoices.sort((a, b) => b.purchaseDate - a.purchaseDate)

                return user;
            }
            throw new AuthenticationError('Not logged in')
        }
    }
};

module.exports = resolvers;