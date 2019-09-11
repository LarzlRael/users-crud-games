import { Router, Request, Response } from 'express';
// importando el controlador
import gamesController from '../controllers/gamesControllers';
class IndexRoutes {
    route: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //get routes
        this.route.get('/', gamesController.listGAmes);
        this.route.get('/ablePost',gamesController.ablePost);
        //metodos de busqueda//
        this.route.get('/find/:nombre',gamesController.findGame);

        //post routes
        this.route.post('/', gamesController.addGame);
        
        //put routes
        this.route.put('/:id',gamesController.Update);
        //metodos delete

        this.route.delete('/:id',gamesController.Delete);
        

        
    }
    
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.route;