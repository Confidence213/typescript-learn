import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import { Messenger } from './src/controllers/createMessage';
import { Settings } from './settings';
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from './src/utils/secrets';

const app = express();

// Instance of our class
let messenger = new Messenger(Settings.ENV, Settings.PORT);

const getConnectUrl = (user: string, password: string, host: string, port: number, name: string): string => {
    return `mongodb+srv://${user}:${password}@${host}:${port}/${name}?retryWrites=true&w=majority`;
};

let dbConnectionUrl: string = getConnectUrl(DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME);

const connectDatabase = (connectionUrl: string): any => {
    try {
        mongoose.connect(connectionUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB database successfully');
    } catch (error) {
        console.error('Error to connect to MongoDB database');
    }
};

// mongoose connection
connectDatabase(dbConnectionUrl);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(messenger.printMessage())
);

app.listen(Settings.PORT, () =>
    console.log(messenger.printMessage())
);
