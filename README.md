# nodejs_basic_authentication
A microservice for user authentication using express.


<p align="center">
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-license">License</a>
</p>


<div align="center" style="margin: 20px; text-align: center">

  [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](https://github.com/BinaryLeo/nodejs_basic_authentication/blob/main/LICENSE)
  ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryLeo/nodejs_basic_authentication?style=flat-square)
  ![GitHub top language](https://img.shields.io/github/languages/top/BinaryLeo/nodejs_basic_authentication?style=flat-square)

</div>



## 🧪 technologies

This project was built using the following technologies and features:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- A local [PostgreSQL](https://www.postgresql.org/) database
- [Express](http://expressjs.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [PostMan](https://www.postman.com/)
- [JWT json web token](https://jwt.io/)


## 💡 how to use
- Clone the repository.
- Open the project from VS Code.
- Run <code> npm install</code> to install the dependencies
- Rename the file from <code>Help.env</code> to <code>.env</code> and type your Database Credentials ![image](https://user-images.githubusercontent.com/72607039/156196030-88a386b8-e05e-479b-937b-2e478694ba3e.png)


- Create your Database and table following the script below - the script can be found in the init.sql file ![image](https://user-images.githubusercontent.com/72607039/156194093-bf09b803-0431-4bb2-9be4-2a8e3e6e7149.png)



```sql
CREATE EXTENSION "uuid-ossp"; -- IF NOT EXISTS
CREATE EXTENSION "pgcrypto"; -- IF NOT EXISTS
create TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(), -- --generates a hash non sequential
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)
insert into application_user(
username,password) values('admin', crypt('admin','my_salt'))
 -- type here valid credentials | credentials that you want
```

- Run <code> npm run dev</code>  application available on port 3000


## 💡 endpoints

Authentication Routes

- Create a JWT Token  using a basic authentication (POST) /<code>token</code>
- Validate  JWT Token (Bearer token) (POST) <code>/token/validate</code>
- Refresh token from JWT Token (POST) <code>/token/refresh</code>

User Routes

- GET /users
- GET /users/:uuid
- POST /users
- PUT /users/:uuid
- DELETE /users/:uuid


Status Route

- Check server status  (GET) /status


## 📄 License

This project was built under MIT. See the file [LICENSE](LICENSE) for more details.

---

