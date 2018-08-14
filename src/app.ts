import * as express from 'express';
import * as bodyParser from 'body-parser';
import { RouteHandler } from './routes/route-handler'; 

class App {

    public app: express.Application;
    public routeHandler: RouteHandler = new RouteHandler();

    constructor() {
        this.app = express();
        this.config();
        this.routeHandler.initializeRoutes(this.app);
        console.log("Constructing App...")
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
    }
}

export default new App().app;