# Arqutiectura limpia con React + TypeScript + Vite

# Crear nueva funcionalidad (formulario)

## 1. Crear el modelo

Se usa la siguiente api para poder probar: https://jsonplaceholder.typicode.com/posts
- Instalar las siguientes librerías para manejo de formularios: npm install react-hook-form yup @hookform/resolvers

- Instalar daisyUI:
`npm i -D daisyui@latest`

Entonces adicione a  tailwind.config.js configuración:

```js
module.exports = {
  //...
  plugins: [require("daisyui")],
}

```

 1.1 En domain crear los modelos:
- Crear carpeta `post` y dentro de ella las carpetas `models`, `repository` y `symbols`.
-  Para crear el modelo para las peticiones que haremos desde el front:
  
```typescript
export class PostRequestDom {
    constructor(
      public userid: string,
      public title: string,
      public body: string
    ) {}
}

```
- El modelo para las respuestas que recibiremos en el front:
  
```typescript
export class PostResponseDom {
    constructor(
      public username: string,
      public title: string,
      public body: string
    ) {}
}
```

1.2 Crear el repositorio para exponer los contratos, en la carpeta `repository`:

```typescript
import { Failure, Result } from "@core/index";
import { PostRequestDom } from "../models/post-request.dom";
import { PostResponseDom } from "../models/post-response.dom";

export interface PostRepository{
   
    create(request: PostRequestDom): Promise<Result<PostResponseDom, Failure>>
   
}
```
- Crear los simbolos que va a permitir enlazar el repositorio y los contratos:

```typescript
export const POST_SYMBOLS = {
    POST_REPOSITORY: Symbol('POST_REPOSITORY'),
    
    POST_CREATE: Symbol('POST_CREATE'),

}
```

1.3 Crear la capa de aplicacion 
- Crear una carpeta `post` y en `commands` crear `create-post.usecase`

```typescript
import { inject, injectable } from "inversify";
import  { Command, Failure, Result } from "@core/index";
import { POST_SYMBOLS,type PostRepository, PostResponseDom, PostRequestDom,  } from "@domain/post";


@injectable()
export class CreatePublicationUseCase extends Command<Promise<Result<PostResponseDom, Failure>>,PostRequestDom > {
    constructor(
        @inject(POST_SYMBOLS.POST_REPOSITORY)
        private readonly _postRepository: PostRepository,
    ) {
        super()
    }
    execute = (request: PostRequestDom): Promise<Result<PostResponseDom, Failure>> => this._postRepository.create(request)
}

```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
