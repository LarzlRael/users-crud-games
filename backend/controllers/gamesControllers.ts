import { Request, Response } from "express";
import pool from "../database/database";
class UserController {

    public async addGame(req: Request, res: Response) {
        //insert into game(id,id_user,titulo,description,url) values (null,2,"tekken","este es un wen juego","www.mishuevos.com");
        //console.log("datos recibidos : ", req.body);
        const insert = await pool.query('INSERT into game set ? ', [req.body]);
        res.json({ text: 'add successfull' });
    }
    public async listGAmes(req: Request, res: Response) {
        const listGames = await pool.query('SELECT * FROM game');
        res.json(listGames);
    }

    public async Delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            pool.query('call deleteGame(?)', [id]);
        } catch (error) {
            console.log(error);
        }
        res.json({ text: 'delete successfull' });
    }

    public async Update(req: Request, res: Response) {
        const { id } = req.params;
        try {
            pool.query('UPDATE  game set ? WHERE id = ?', [req.body, id]);
        } catch (error) {
            console.log(error);
        }
        res.json({ text: 'edit successfull' });
    }
    //para ver solo publicaciones  de usuarios habilitados
    public async ablePost(req: Request, res: Response) {
        const ablePost = await pool.query('call view_games_clientes()');
        res.json(ablePost)
    };

    //metodos de busqueda 
    public async findGame(req: Request, res: Response) {
        const { nombre } = req.params;
        console.log('elemento recibido  : ' + nombre);
        const result = await pool.query('select * from game where titulo like ?', '%' + nombre + '%');
        //connection.query('SELECT * from django_session where session_key like ?', '%' + value + '%', ...)
        res.json(result);
        
    }

}
const userController = new UserController();

export default userController;