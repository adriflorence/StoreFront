import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.post('/users/create', function (req, res) {
    res.send("Successful post request by " + req.body.firstName)
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
