import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
{
    products {
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

export const QUERY_PRODUCTS = gql`
  query getProducts($name: String) {
    products(name: $name) {
      _id
      name
      description
      price
      quantity
      img
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProduct($_id: ID!) {
    product(_id: $_id) {
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

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      email
      invoices {
        _id
        purchaseDate
        products {
          _id
          name
          description
          usdPrice
          quantity
          img
        }
      }
    }
  }
`;

export const QUERY_ALL_NOTES = gql`
  query notes {
    notes{
      _id
      name
      email
      message
      createdAt
      read
    }
  }
`;

