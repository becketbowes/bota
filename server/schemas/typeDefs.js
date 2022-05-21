const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Admin {
        _id: ID
        username: String
        email: String
    }

    type Blog {
        title: String
        text: String
        image: String
        date: String
    }

    type Invoice {
        _id: ID
        items: [Product]
        purchaseDate: String 
    }

    type Note {
        _id: ID
        email: String
        text: String
        createdAt: String
        read: Boolean
    }

    type Product {
        _id: ID
        sku: String
        name: String
        description: String
        usdPrice: Float
        image: String
        imageAlt: String
        quantity: Int
    }

    type Auth {
        token: ID
        user: User
    }

    type VibeImage {
        _id: ID
        pageId: String
        link: String
        image: String
        imageAlt: String
    }

    type VibeText {
        _id: ID
        pageId: String
        text: String
    }

    type Query {
        admin: Admin
        blogs(title: String): [Blog]
        invoice(_id: ID!): Invoice
        notes(read: false): [Note]
        products(name: String): [Product]
        product(_id: ID): Product
        user: User
        vibeImage(_id: ID): VibeImage
        vibeText(_id:ID): VibeText
    }

    type Mutation {
        addAdmin(username: String!, email: String!, password: String!): Auth
        updateAdmin(username: String, email: String, password: String): Admin
        addBlog(title: String!, text: String!, image: String!, date: String!): Blog
        addInvoice(product: [ID]!): Invoice
        addNote(email: String!, text: String!, read: Boolean!): Note
        addProduct(sku: String!, name: String!, description: String!, usdPrice: Float!, image: String!, imageAlt: String!, quantity: String!): Product
        updateProduct(_id: ID!, quantity: Int!): Product
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        addVibeImage(pageId: String!, link: String!, image: String!, imageAlt: String!): VibeImage
        addVibeText(pageId: String!, text: String!): VibeText
    }

`

module.exports = typeDefs;