import { gql } from '@apollo/client';

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query products{
    products {
      _id
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

export const QUERY_PRODUCT = gql`
  query getProduct($_id: ID) {
    product(_id: $_id) {
      products {
        _id
        sku
        name
        description
        usdPrice
        image
        imagAlt
        quantity
      }
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
          image
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

