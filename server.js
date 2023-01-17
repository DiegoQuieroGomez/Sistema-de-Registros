import express from 'express';
import { engine } from 'express-handlebars';

const app = express();
const PORT = 8080;

app.engine('handlebars', engine());
app.set('view engine','handlebars');
app.set('views','./views');

app.get('/', (req,res) =>{

    res.render('formIngreso.handlebars')
})

const server = app.listen(PORT, ()=> console.log(`Conectado al puerto ${server.address().port}`))



