"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HtmlReport = /** @class */ (function () {
    function HtmlReport() {
    }
    HtmlReport.prototype.print = function (report) {
        var html = "\n    <div>\n      <h1>Analysis Output</h1>\n      <div>" + report + "</div>\n      <p>\u30D5\u30A1\u30A4\u30EB\u3064\u304F\u3063\u305F\uFF01</p>\n    </div>\n    ";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HtmlReport;
}());
exports.HtmlReport = HtmlReport;
