import { NotificationService } from "./notification.service";
export declare class NotificationController {
    private readonly products;
    constructor(products: NotificationService);
    send_user_sms(data: any): Promise<any>;
}
