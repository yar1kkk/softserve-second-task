import express from "express";
import mongoose from "mongoose"
import Router from "./Router.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const PORT = 5000;
const DB_URL = `mongodb+srv://yvaskiv:qazlinkerqaz01@cluster0.xkbz4.mongodb.net/Cluster0?retryWrites=true&w=majority`
const app = express();

const swaggerDefinition = {
    info: {
        title: "Users API",
        description: "Users API Information",
        contact: {
          name: "Yaroslav Vaskiv",
          email: "slavkovaskiv@gmail.com"
        },
        servers: ["http://localhost:5000"]
    },
  }

const options = {
  swaggerDefinition,
  apis: ['*.js'],
};

const swaggerDocs = swaggerJsDoc(options);

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
app.use(express.json());
app.use('/api', Router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log("Server started with port " + PORT));
  } catch (e) {
    console.log(e)
  }
};

startApp();
