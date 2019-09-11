import { Request, Response } from "express";
import pool from "../database/database";
class UserController {

    //agregando un nuevo usuario


    public async newUser(req:Request,res:Response){
        console.log('mostando lo que se envio',req.body);
        const newuser = await pool.query('INSERT INTO user set  ?  ',[req.body]);
        res.json({text : 'insertado correctamente'});
    }
    public async habilitados(req: Request, res: Response) {
        const allusers = await pool.query('SELECT * FROM user WHERE habilitado = "1" ');
        res.json(allusers);
    }
    public async deshabilitados(req: Request, res: Response) {
        const allusers = await pool.query('SELECT * FROM user WHERE habilitado = "0" ');
        res.json(allusers);
    }
    public async eliminarUser(req: Request, res: Response) {
        const { id } = req.params;
        const eliminar = await pool.query('UPDATE user set habilitado = "0"  where id_user = ?', [id]);
        res.json({ text: 'Eliminado Correctamente' });
    }

    public async habilitar(req: Request, res: Response) {
        const { id } = req.params;
        const habilitar = await pool.query('UPDATE user set habilitado = 1  where id_user = ?', [id]);
        res.json({ text: 'usuario habilitado Correctamente' });
    }

    public async deshabilitar(req: Request, res: Response) {
        const { id } = req.params;
        const deshabilitado = await pool.query('UPDATE user set habilitado = 0  where id_user = ?', [id]);
        res.json({ text: 'usuario deshablitado Correctamente' });
    }

    public async Update(req: Request, res: Response) {
        const { id } = req.params;
        await pool.query('UPDATE user set ?  where id_user = ?', [req.body, id]);
        res.json({ text: 'usuario habilitado Correctamente' });
    }
    public async allUsers (req:Request,res:Response){
        // const allUsers = await pool.query('call allUsers()');
        const allUsers = await pool.query('select * from user');
        res.json(allUsers);
    }

}
const userController = new UserController();

export default userController;