import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { UserRequest} from "../../models/interfaces/user/UserRequest";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email, password }: UserRequest = request.body; //extrai dados do objeto request.body
        const createUserService = new CreateUserService(); //criando uma instância (objeto) da classe CreateUserService para usar seus métodos e propriedades 
        const user = await createUserService.execute({
            name, email, password //método execute passando os dados do user
        });

        return response.json(user);
    }
}

export { CreateUserController };

//handle() lida com req HTTP recebida pelo servidor