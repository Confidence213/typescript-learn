import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

import { Request, Response } from 'express';

import routes from './src/routes/crmRoutes';
import Messenger from './src/controllers/createMessage';
import { Settings } from './src/utils/settings';
import { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from './src/utils/secrets';

const app = express();

// Instance of our class
const messenger = new Messenger(Settings.ENV, Settings.PORT);

const getConnectUrl = (
  user: string,
  password: string,
  host: string,
  port: number,
  name: string
): string => {
  return `mongodb+srv://${user}:${password}@${host}:${port}/${name}?retryWrites=true&w=majority`;
};

const dbConnectionUrl: string = getConnectUrl(DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME);

const connectDatabase = (connectionUrl: string): void => {
  try {
    mongoose.connect(connectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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

// interface Name {
//     firstName: string;
// }

// Generics
function createName<T>(name: T): T {
  return name;
}

// // Function with interface
// const createName = (name: Name): string => {
//     return `Hello, ${name.firstName}`;
// };

// let myName = {firstName: 'Stiven'};
const myName = createName<string>('Stiven');

// Declaration merging
interface Warriors {
  weapon: string;
  skills: number;
}

interface Warriors {
  name: string;
}

const ninja: Warriors = {
  weapon: 'Shuriken',
  skills: 5,
  name: 'Stiven',
};

// serving static files
app.use(express.static('public'));

app.get('/', (req: Request, res: Response): void => {
  res.send(ninja);
});

app.listen(Settings.PORT, (): void => {
  console.log(createName(myName));
  console.log(messenger.printMessage());
});
