import { BaseEntity } from "typeorm";
export declare class NotificationEntity extends BaseEntity {
    id: string;
    title: string;
    description: string;
    type: Boolean;
    created_at: Date;
    updated_at: Date;
}
