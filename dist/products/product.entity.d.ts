import { BaseEntity } from "typeorm";
export declare class ProductEntity extends BaseEntity {
    id: string;
    title: string;
    description: string;
    price: number;
    type: string;
    created_at: Date;
    updated_at: Date;
}
