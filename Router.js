import Router from "express";
import PostСontroller from "./PostController.js";

const router = new Router();
// Routes
/**
 * @swagger
 * /api-docs/components:
 *   schemas:
 *     Post:
 *       type: object
 *       required:
 *         - name
 *         - surname
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the post
 *         name:
 *           type: string
 *           description: The name of user
 *         surname:
 *           type: string
 *           description: The surname of user
 *         email:
 *           type: string
 *           description: The email of user
 *       example:
 *         name: Conor
 *         surname: McGregor
 *         email: thenotoriousmma@gmail.com
 */

 /**
  * @swagger
  * tags:
  *   name: Posts
  *   description: The posts managing API
  */

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: Create a new book
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/api-docs/components/schemas/Post'
 *     responses:
 *       '200':
 *         description: The post was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/api-docs/components/schemas/Post'
 *       '500':
 *         description: Some server error
 */
router.post('/posts', PostСontroller.create);
/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Returns the list of all the posts
 *     tags: [Posts]
 *     responses:
 *       '200':
 *         description: The list of the posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/api-docs/components/schemas/Post'
 */

router.get('/posts', PostСontroller.getAll);
/**
 * @swagger
 * /api/posts/{id}:
 *   get:
 *     summary: Get the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 *     responses:
 *       '200':
 *         description: The post description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/api-docs/components/schemas/Post'
 *       '404':
 *         description: The book was not found
 */
router.get('/posts/:id', PostСontroller.getOne);
/**
 * @swagger
 * /api/posts/{id}:
 *  put:
 *    summary: Update the post by the id
 *    tags: [Posts]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The post id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/api-docs/components/schemas/Post'
 *    responses:
 *      '200':
 *        description: The post was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/api-docs/components/schemas/Post'
 *      '404':
 *        description: The post was not found
 *      '500':
 *        description: Some error happened
 */
router.put('/posts', PostСontroller.update);
/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: Remove the post by id
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The post id
 * 
 *     responses:
 *       '200':
 *         description: The post was deleted
 *       '404':
 *         description: The post was not found
 */
router.delete('/posts/:id', PostСontroller.delete);


export default router;
