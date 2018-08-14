import { Request, Response, Router } from 'express';
const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        message: 'GET / works'
    })
});

router.get('/about', (req: Request, res: Response) => {
    res.status(200).send({
        message: 'GET /about works'
    })
});

export { router };