const { gql } = require('apollo-server-express');

const typeDefs = gql `

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

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        invoices: [Invoice]
        admin: Boolean
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

    type Auth {
        token: ID
        user: User
    }

    type Query {
        blogs(title: String): [Blog]
        invoice(_id: ID!): Invoice
        notes: [Note]
        products(name: String): [Product]
        product(_id: ID!): Product
        user: User
        users: [User]
        vibeImage(_id: ID): VibeImage
        vibeText(_id:ID): VibeText
    }

    type Mutation {
        addBlog(title: String!, text: String!, image: String!): Blog
        addInvoice(items: [ID]!): Invoice
        addNote(email: String!, text: String!, read: Boolean!): Note
        addProduct(sku: String!, name: String!, description: String!, usdPrice: Float!, image: String!, imageAlt: String!, quantity: String!): Product
        updateProduct(_id: ID!, quantity: Int!): Product
        addUser(firstName: String!, lastName: String!, email: String!, password: String!, admin: Boolean!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String, admin: Boolean): User
        addVibeImage(pageId: String!, link: String!, image: String!, imageAlt: String!): VibeImage
        addVibeText(pageId: String!, text: String!): VibeText
        login(email: String!, password: String!): Auth
    }

`

module.exports = typeDefs;