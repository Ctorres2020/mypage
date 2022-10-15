const moongose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3977;

const { API_VERSION, IP_SERVER, portDB } = require('./config');


moongose.connect(`mongodb://${IP_SERVER}:${portDB}/webdb`,
    {useNewUrlParser: true},(err, res) => {
        if(err){
            throw err;
        } else {
            console.log('Conexion a la DB es correcta');
            app.listen(port, () => {
                console.log("##########################");
                console.log("########## API REST ###########");
                console.log("##########################");
                console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
            })
        }
    });