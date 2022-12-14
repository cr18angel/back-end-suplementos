"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const defaul_routes_1 = __importDefault(require("./routes/defaul.routes"));
const personajes_routes_1 = __importDefault(require("./routes/personajes.routes"));
// mi importacion 
// miio 
const cors = require('cors');
const server = new server_1.default();
// mio
server.app.use(cors());
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', defaul_routes_1.default);
//cambie nomber
server.app.use('/suplementos', personajes_routes_1.default);
mongoose_1.default.connect('mongodb+srv://usr_suplementos:suplementos2022@cluster0.ygbiyzd.mongodb.net/superProteinDb', (error) => {
    if (error) {
        throw error;
    }
    console.log('Base de datos online');
});
server.Start(() => {
    console.log(`funcionando en puerto ${server.port}`);
});
