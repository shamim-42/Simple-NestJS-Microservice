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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("typeorm");
const microservices_1 = require("@nestjs/microservices");
const product_entity_1 = require("./product.entity");
let ProductService = class ProductService {
    constructor(products) {
        this.products = products;
    }
    get(data = undefined) {
        return this.products.find(data);
    }
    fetchProductsByIds(ids) {
        return this.products
            .createQueryBuilder("products")
            .where(`products.id IN (:...ids)`, { ids })
            .getMany();
    }
    store(data) {
        return this.products.save(data);
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.products.update({ id }, data);
            return this.products.findOneOrFail({ id });
            throw new microservices_1.RpcException(new common_1.NotFoundException("You cannot update what you don't own..."));
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.products.findOneOrFail({ id });
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.products.findOneOrFail({ id });
            yield this.products.delete({ id });
            return product;
            throw new microservices_1.RpcException(new common_1.NotFoundException("You cannot update what you don't own..."));
        });
    }
    decrementProductsStock(products) {
        return __awaiter(this, void 0, void 0, function* () {
            products.forEach(product => {
                this.products.decrement({ id: product.id }, "quantity", product.quantity);
            });
        });
    }
    incrementProductsStock(products) {
        return __awaiter(this, void 0, void 0, function* () {
            products.forEach(product => {
                this.products.increment({ id: product.id }, "quantity", product.quantity);
            });
        });
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.ProductEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map