import mysql from 'promise-mysql';
import keys from './keys'

const pool = mysql.createPool(keys.database)
pool.getConnection()
    .then(connect=>{
        pool.releaseConnection(connect);
        console.log('DB is connects');
    })
export default pool;





