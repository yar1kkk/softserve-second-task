import Router from "express";
import PostСontroller from "./PostController.js";

const router = new Router();

/**
 * @swagger
 * api-docs/#/components:
 *  schemas:
 *    Post:
 *      type: object
 *      required: 
 *      - name
 *      - surname
 *      - email
 *      properties:
 *        name:
 *          type: string
 *        surname:
 *          type: string
 *        email:
 *          type: string
 *      example:
 *        name: Oleh
 *        surname: Vakarchyk
 *        email: oe@gmail.com
 */

router.get('/posts', PostСontroller.getAll);

router.get('/posts/:id', PostСontroller.getOne);

router.post('/posts', PostСontroller.create);

router.put('/posts', PostСontroller.update);

router.delete('/posts/:id', PostСontroller.delete);


export default router;
