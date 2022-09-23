import gql from 'graphql-tag';

export const GET_PRODUCTS = gql`
{
    products{
        productName
        price
        owner
    }
}
`