import { useQuery } from '@apollo/client';
import React from 'react'
import { GET_PRODUCTS } from './graphql';



interface showProductProps {

}

interface IProduct{
    productName: string
    owner: string
    price: string
}

export const ShowProduct: React.FC<showProductProps> = ({}) => {

    const {loading, error, data} = useQuery<IProduct>(GET_PRODUCTS);

    if(loading){
        return <p>loading....</p>
    }

    if(error){
        return <p>Something Went Wrong</p>
    }

        return (
            <div>
                Show products
            </div>
        );
}