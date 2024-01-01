import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import routes from './routes/index.js';
import logger from 'morgan';


const hostname='127.0.0.1'
const port=3001
const app=express();
const server=http.createServer(app);
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
routes(app);
app.get('*',(req, res)=>res.status(200).send({
    message: "to do app"
}))
server.listen(port, hostname, ()=>{
    console.log('server is running on http://${hostname}:${port}/')
})
