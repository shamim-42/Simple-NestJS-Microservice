import { ProductService } from "./product.service";
import { ProductEntity } from "./product.entity";
export declare class ProductController {
    private readonly products;
    constructor(products: ProductService);
    index(data?: any): Promise<ProductEntity[]>;
    store(data: any): Promise<ProductEntity>;
    update({ id, title, image, price, quantity, description }: any): Promise<ProductEntity>;
    show(id: string): Promise<ProductEntity>;
    fetchProductsByIds(ids: Array<string>): Promise<ProductEntity[]>;
    handleOrderDeleted(products: Array<{
        id: string;
        quantity: number;
    }>): Promise<void>;
    handleOrderCreated(products: Array<{
        id: string;
        quantity: number;
    }>): Promise<void>;
    destroy({ id }: {
        id: string;
    }): Promise<ProductEntity>;
}
