import { Container } from "inversify";
import { userModule } from "@infrastructure/users/index";
import { httpClientModule } from "@core/index";
import { taskModule } from "@infrastructure/task";
import { postModule } from "@infrastructure/post/post.module";

// Crear contenedor de Inversify
const di = new Container();
//Transversales
di.load(httpClientModule)
// Cargar módulos en el contenedor
di.load(userModule);
di.load(taskModule);
//new module
di.load(postModule);
export { di };