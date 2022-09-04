import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import { ENV, PORT, DB_HOST, DB_USER, DB_PASSWORD } from './src/utils/secrets';

const app = express();

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`, {
    useMongoClient: true
});

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
