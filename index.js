const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('server en express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('otra ruta');
})

routerApi(app)

app.listen(port, () => {
  console.log('puerto: ' + port)
});
