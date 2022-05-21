const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type Admin {
        _id: ID
        username: String
        email: String
    }

    type Blog {
        text: String
        image: String
        date: String
    }

    type Invoice {
        _id: ID
        items: [Product]
        purchaseDate: String 
        total: Int
    }

    type Note {
        _id: ID
        writerName: String
        email: String
        createdAt: String
        read: String
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

    type VibeImage {
        _id: ID
        pageId: String
        link: String
        images: String
        alt: String
    }

    type VibeText {
        _id: ID
        pageId: String
        text: String
    }

`

module.exports = typeDefs;