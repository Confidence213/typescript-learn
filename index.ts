import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import { ENV, PORT, DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } from './src/utils/secrets';

const app = express();
const DB_CONNECTION_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`;

// mongoose connection
try {
    mongoose.connect(DB_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB database successfully');
} catch (error) {
    console.error('Error to connect to MongoDB database');
}

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Server is running on port ${PORT} in ${ENV} mode`)
);
