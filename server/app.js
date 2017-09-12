import express from 'express';
import bodyParser from 'body-parser';
import { serverPort } from '../etc/config.json';

import * as db from '../server/utils/DataBaseUtils.js'

db.setUpConnection();

const app = express();

app.use(bodyParser.json());

// RESTful api handlers
app.get('/marker', (req, res) => {
    db.markerList().then(data => res.send(data));
});

app.post('/marker', (req, res) => {
    db.createMarker(req.body).then(data => res.send(data));
});

app.delete('/marker/:id', (req, res) => {
    db.deleteMarker(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
