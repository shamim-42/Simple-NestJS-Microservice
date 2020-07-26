import { Repository } from "typeorm";
import { ProductEntity } from "./product.entity";
export declare class ProductService {
    private readonly products;
    constructor(products: Repository<ProductEntity>);
    get(data?: any): Promise<ProductEntity[]>;
    fetchProductsByIds(ids: Array<string>): Promise<ProductEntity[]>;
    store(data: any): Promise<ProductEntity>;
    update(id: string, data: any): Promise<ProductEntity>;
    show(id: string): Promise<ProductEntity>;
    destroy(id: string): Promise<ProductEntity>;
    decrementProductsStock(products: any): Promise<void>;
    incrementProductsStock(products: any): Promise<void>;
}
