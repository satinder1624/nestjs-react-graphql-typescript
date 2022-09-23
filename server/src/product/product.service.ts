import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CretaeProductInput, Product, ProductDocument, UpdateProductInput } from './product.schema';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private ProductModel: Model<ProductDocument>){

    }

    async findAll(){
        return this.ProductModel.find().lean();
    }

    async findByID(ID){
        return this.ProductModel.findById(ID).lean();
    }

    async createProduct(newProduct: CretaeProductInput){
        return this.ProductModel.create(newProduct)
    }

    async updateProduct(ID, updateProduct: CretaeProductInput){
        return this.ProductModel.findByIdAndUpdate(
            ID,
            {
                $set:updateProduct
            },
            { new: true }
        )
    }

    async updateProduct2(updateProduct: UpdateProductInput){
        return this.ProductModel.findByIdAndUpdate(
            updateProduct._id,
            {
                $set:updateProduct
            },
            { new: true }
        )
    }

    async deleteProductByID(ID){
        return this.ProductModel.findByIdAndDelete(ID);
    }

}
