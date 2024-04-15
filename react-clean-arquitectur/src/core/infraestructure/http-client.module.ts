import { ContainerModule } from 'inversify'
import 'reflect-metadata'
import {   DefaultHeadersProvider, HTTP_CLIENT_SYMBOLS, HttpClient } from "@core/index";
import { FetchHttpClient } from './services/fetch-http-client';

const httpClientModule = new ContainerModule((bind) => {
  bind<DefaultHeadersProvider>("Headers")
  .to(DefaultHeadersProvider)
    .inSingletonScope()
  
  bind<HttpClient>(HTTP_CLIENT_SYMBOLS.FETCH)
    .to(FetchHttpClient)
    .inSingletonScope()
 
})
export { httpClientModule }
