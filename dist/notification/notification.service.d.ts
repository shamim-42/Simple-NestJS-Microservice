import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";
export declare class ProductService {
    private readonly product;
    constructor(product: Repository<ProductEntity>);
    storeProduct(data: any): any;
}
