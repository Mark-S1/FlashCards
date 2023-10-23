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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyElement = void 0;
const lit_1 = require("lit");
const decorators_js_1 = require("lit/decorators.js");
let MyElement = class MyElement extends lit_1.LitElement {
    constructor() {
        super(...arguments);
        this.id = 'STARTING';
    }
    render() {
        return (0, lit_1.html) `
		<p>This a test: ${this.id}</p>
		`;
    }
};
exports.MyElement = MyElement;
__decorate([
    (0, decorators_js_1.property)(),
    __metadata("design:type", Object)
], MyElement.prototype, "id", void 0);
exports.MyElement = MyElement = __decorate([
    (0, decorators_js_1.customElement)('test-elem')
], MyElement);
