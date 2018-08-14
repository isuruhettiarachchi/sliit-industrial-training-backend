import { Request, Response } from 'express';
import { router as general } from './general';

export class RouteHandler {
    public initializeRoutes(app): void {
        app.use('/', general);
    }
}