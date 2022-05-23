import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_NOTE = gql `
    mutation addNote (
        $name: String! 
        $email: String! 
        $message: String! 
        $read: Boolean
    ) {
        addNote (
            name: $name
            email: $email
            message: $message
            read: $read
        ) {
            name
            email
            message
            read
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $admin: Boolean
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      admin: $admin
    ) {
        firstName
        lastName
        email
    }
  }
`;

export const ADD_PRODUCT = gql`
    mutation addProduct(
        $sku: String!
        $name: String!
        $description: String!
        $usdPrice: Float!
        $image: String!
        $imageAlt: String!
        $quantity: String!
    ) {
        addProduct(
            sku: $sku 
            name: $name 
            description: $description 
            usdPrice: $usdPrice 
            image: $image, imageAlt: $imageAlt 
            quantity: $quantity
        ) {
            sku
            name
            description
            usdPrice
            image
            imageAlt
            quantity
        }
    }
`;