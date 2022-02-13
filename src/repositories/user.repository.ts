import User from '../models/user.model'
import db from '../routes/db'
class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `SELECT uuid, username  FROM application_user`
   
    const {rows} = await db.query<User>(query)
    return rows || []; //return rows or empty array
  }

  async findById(uuid:string): Promise<User>{
      const query =`SELECT uuid, username  FROM application_user where uuid = $1`   ;
      const values =[uuid];
      const {rows} = await db.query<User>(query,values) ;
      const [user] = rows; // user = rows[0]
      return user;
  }
}
export default new UserRepository()
