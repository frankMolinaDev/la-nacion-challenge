import 'dotenv/config';
import path from 'path';
import express from 'express';

const app = express();

console.log('__dirname', __dirname)
const publicPath = express.static(path.join(__dirname, '../'));
const indexPath = path.join(__dirname, '../index.html');
console.log('indexPath', indexPath)

app.use(publicPath);

app.get('/', (req, res) => {
    res.sendFile(indexPath)
});

const port = process.env.PORT  || 8080;

app.listen(port);

console.log(`SSR app corriendo en ${port}`)
