"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const microservices_2 = require("@nestjs/microservices");
const product_service_1 = require("./product.service");
let ProductController = class ProductController {
    constructor(products) {
        this.products = products;
    }
    index(data = undefined) {
        return this.products.get(data);
    }
    store(data) {
        return this.products.store(data);
    }
    update({ id, title, image, price, quantity, description }) {
        return this.products.update(id, { title, image, price, quantity, description });
    }
    show(id) {
        return this.products.show(id);
    }
    fetchProductsByIds(ids) {
        return this.products.fetchProductsByIds(ids);
    }
    handleOrderDeleted(products) {
        return __awaiter(this, void 0, void 0, function* () {
            this.products.incrementProductsStock(products);
        });
    }
    handleOrderCreated(products) {
        return __awaiter(this, void 0, void 0, function* () {
            this.products.decrementProductsStock(products);
        });
    }
    destroy({ id }) {
        return this.products.destroy(id);
    }
};
__decorate([
    microservices_2.MessagePattern("products"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "index", null);
__decorate([
    microservices_2.MessagePattern("create-product"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "store", null);
__decorate([
    microservices_2.MessagePattern("update-product"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    microservices_2.MessagePattern("show-product"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "show", null);
__decorate([
    microservices_2.MessagePattern("fetch-products-by-ids"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "fetchProductsByIds", null);
__decorate([
    microservices_1.EventPattern("order_deleted"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleOrderDeleted", null);
__decorate([
    microservices_1.EventPattern("order_created"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleOrderCreated", null);
__decorate([
    microservices_2.MessagePattern("delete-product"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "destroy", null);
ProductController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map