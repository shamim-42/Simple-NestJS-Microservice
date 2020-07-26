import { Repository } from "typeorm";
import { NotificationEntity } from "./notification.entity";
export declare class NotificationService {
    private readonly notification;
    constructor(notification: Repository<NotificationEntity>);
    sendUserSMS(data: any): any;
}
