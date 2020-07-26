export interface ProductDTO {
    title: string;
    image: string;
    description: string;
    price: number;
}
export declare type UpdateProductDTO = Partial<ProductDTO>;
