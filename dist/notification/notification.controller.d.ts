import { NotificationService } from "./notification.service";
export declare class NotificationController {
    private readonly notification;
    constructor(notification: NotificationService);
    sendUserSMS(data: any): Promise<any>;
}
