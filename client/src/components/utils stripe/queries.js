import { gql } from "@apollo/src";

export const QUERY_PRODUCTS = gql`
  query getProducts($product: ID) {
    products(inventory: $inventory) {
      _id
      name
      description
      price
      quantity
      image
      inventory {
        _id
      }
    }
  }
`;

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
    name
    description
    price
    quantity
    }

}
}
`;

export const QUERY_INVENTORIES = gql`
  {
    inventories {
      _id
      quantity
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
