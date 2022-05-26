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

export const ADD_NOTE = gql`
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
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $admin: Boolean){
  addUser (firstName: $firstName, lastName: $lastName, email: $email, password: $password, admin: $admin) {
    token
    user {
      _id
      firstName
      lastName
      email
      admin
    }
  }
}
`;

export const ADD_PRODUCT = gql`
    mutation addProduct (
      $sku: String!, 
      $name: String!, 
      $description: String!, 
      $usdPrice: String!, 
      $img: String!, 
      $imageAlt: String!, 
      $quantity: String!
      )
      {
      addProduct (
          sku: $sku, 
          name: $name, 
          description: $description, 
          usdPrice: $usdPrice, 
          img: $img, 
          imageAlt: $imageAlt, 
          quantity: $quantity
      ) 
      {
      sku
      name
      description
      usdPrice
      img
      imageAlt
      quantity
    }
}
`;

export const EDIT_PRODUCT = gql`
    mutation editProduct (
      $_id: ID!, 
      $sku: String!, 
      $name: String!, 
      $description: String!, 
      $usdPrice: String!, 
      $img: String!, 
      $imageAlt: String!, 
      $quantity: String!
      ) {
        editProduct(
          _id: $_id, 
          sku: $sku, 
          name: $name, 
          description: $description, 
          usdPrice: $usdPrice, 
          img: $img, 
          imageAlt: $imageAlt, 
          quantity: $quantity)
      {
      _id
      sku
      name
      description
      usdPrice
      img
      imageAlt
      quantity
      }
}
`;

export const REMOVE_PRODUCT = gql`
    mutation removeProduct ($_id: ID!) {
      removeProduct (_id: $_id)
    }
`;