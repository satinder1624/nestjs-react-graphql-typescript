import { CretaeProductInput, FindProductInput, Product, UpdateProductInput } from './product.schema';
import { ProductService } from './product.service';
import { Resolver,Query,ResolveField,Parent, Mutation, Args } from '@nestjs/graphql';

@Resolver(() => Product)
export class ProductResolver {
    constructor(private productService: ProductService){}

    @Query(()=>[Product])
    async products(){
        return this.productService.findAll();
    }

    @Query(()=>Product)
    async productByID(@Args('input') {_id}: FindProductInput){
        return this.productService.findByID(_id);
    }


    @Mutation(()=>Product)
    async createProduct(@Args('input') product:CretaeProductInput){
        return this.productService.createProduct(product)
    }

    @Mutation(()=>Product)
    async updateProductByID(@Args('inputID') {_id}: FindProductInput, @Args('input')product: CretaeProductInput){
        return this.productService.updateProduct(_id,product)
    }
    
    @Mutation(()=>Product)
    async updateProductByID2(@Args('input')product: UpdateProductInput){
        return this.productService.updateProduct2(product)
    }

    @Mutation(()=>String)
    async deleteProductByID(@Args('input') {_id}: FindProductInput){
        const result = this.productService.deleteProductByID(_id);
        if(result){
            return "Deleted";
        }
        return "Problem";
    }

}
