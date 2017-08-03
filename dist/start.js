"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
class HttpStart extends module_1.Module {
    get moduleName() { return 'http'; }
    get defaultConfig() { return __dirname; }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const log = this.log;
            this.insert(this.app.http.listen(this.config.port, function () {
                log.info('Http  listening at port', this.address().port);
            }), 'httpServer');
        });
    }
}
exports.default = HttpStart;
//# sourceMappingURL=start.js.map