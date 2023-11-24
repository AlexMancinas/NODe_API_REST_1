require('dotenv').config();
const express = require('express');
const cors = require('cors');
const openApiConfigration = require('./docs/swagger');
const swaggerUI = require('swagger-ui-express');   
const morganBody = require('morgan-body');
const loggerStream = require('./utils/handleLogger');
const dbConnectNoSql = require('./config/mongo');
const {dbConnectMySQL} = require('./config/mysql');
const app = express();
const ENGINE_DB = process.env.ENGINE_DB;


app.use(cors());
app.use(express.json());
app.use(express.static("storage"));



morganBody(app,{
    noColors: true,
    stream: loggerStream,
    skip: function (req, res) {
        return res.statusCode < 400 // Solo capturamos los errores
    }
});
const port = process.env.PORT || 3000;

app.get('/documentation', swaggerUI.serve, swaggerUI.setup(openApiConfigration));


// Aqui invocamos a las rutas 

app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
(ENGINE_DB === 'nosql') ? dbConnectNoSql() :  dbConnectMySQL();