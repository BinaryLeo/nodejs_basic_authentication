import User from '../models/user.model'
import db from '../routes/db'
class UserRepository {
  async findAllUsers(): Promise<User[]> {
    const query = `SELECT uuid, username  FROM application_user`
   
    const result = await db.query<User>(query)
    const rows = result.rows
    return rows || []; //return rows or empty array
  }
}
export default new UserRepository()
