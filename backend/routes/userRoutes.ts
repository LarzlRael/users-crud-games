import { Router } from 'express';
// importando el controlador
import userController from '../controllers/usersControllers';
class IndexRoutes {
    route: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        //get routes
        this.route.get('/', userController.habilitados);
        this.route.get('/all-users', userController.allUsers);

        this.route.get('/deshabilitados', userController.deshabilitados);
        //post routes
        this.route.get('/able/:id', userController.habilitar);
        this.route.get('/disable/:id', userController.deshabilitar);
        this.route.post('/', userController.newUser);

        //put routes
        this.route.put('/update/:id', userController.Update);
        //delete routes
        this.route.delete('/delete/:id', userController.eliminarUser);

    }

}
const indexRoutes = new IndexRoutes();
export default indexRoutes.route;