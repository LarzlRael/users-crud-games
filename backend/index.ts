import express from "express";
import morgan from 'morgan';
//importando las rutas
import userRoutes from './routes/userRoutes';
import gamesRoutes from './routes/gamesRoutes';
import './database/database';
import cors from 'cors'
class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.middelwares();
        this.routes();

    }

    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors())

    }
    middelwares() {
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(express.json());
    }
    routes() {
        this.app.use('/users',userRoutes);
        this.app.use('/games',gamesRoutes);
        console.log('esto esta funcionando')
    }
    async start() {
        this.app.listen(this.app.get('port'));
        await console.log('server on port :' + this.app.get('port'));
    }
}

const serve = new Server();
serve.start();