const express = require("express");
const app = express();
const produtosRoutes = require("./routes/produtos");
const globalLogger = require("./middlewares/globalLogger");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(globalLogger); 
app.use("/produtos", produtosRoutes); 
app.use(errorHandler); 
app.listen(3000, () => console.log("Server rodando na porta 3000"));
 