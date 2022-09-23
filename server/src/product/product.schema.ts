import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {ObjectType,Field,ID,Int,InputType } from '@nestjs/graphql'
import mongoose from 'mongoose';

export type ProductDocument = Product & mongoose.Document;

@Schema()
@ObjectType()
export class Product{
    @Field(()=> ID)
    _id: number;

    @Prop({required:true})
    @Field() // for string we dont need to write return
    productName: string;

    @Prop({required:true})
    @Field(()=> Number)
    price: number;

    @Prop({required:true})
    @Field()
    owner: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product)

@InputType()
export class CretaeProductInput{
    @Field()
    productName: string;

    @Field()
    price: string;

    @Field()
    owner: string;
}

@InputType()
export class UpdateProductInput{
    
    // Required
    @Field(()=> ID,{nullable:false})
    _id: number;

    // Optional
    @Field(()=>String,{nullable:true})
    productName: string;
    
    // Optional
    @Field(()=>String,{nullable:true})
    price: string;

    // Optional
    @Field(()=>String,{nullable:true})
    owner: string;
}

@InputType()
export class FindProductInput{
    @Field()
    _id: string
}