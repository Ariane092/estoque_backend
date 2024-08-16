import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import { router } from "./routes";

const app = express();
const port = 3333;
app.use(express.json()); //requisita req e responde res arquivos em formato json
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message,
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error."
    })
}); //tratamento de erros 

app.listen(port, () => {
    console.log("Servidor rodando na porta 3333");
});


