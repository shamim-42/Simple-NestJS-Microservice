"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
const notification_entity_1 = require("./notification.entity");
const notification_controller_1 = require("./notification.controller");
let Notification = class Notification {
};
Notification = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([notification_entity_1.NotificationEntity])],
        providers: [notification_service_1.NotificationService],
        controllers: [notification_controller_1.NotificationController]
    })
], Notification);
exports.Notification = Notification;
//# sourceMappingURL=notification.module.js.map