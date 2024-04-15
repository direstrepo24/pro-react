import { Container } from 'inversify';
import 'reflect-metadata';
import { DefaultHeadersProvider, HTTP_CLIENT_SYMBOLS, HttpClient, httpClientModule } from '@core/index';
import { FetchHttpClient } from '@core/infraestructure/services/fetch-http-client';
 
describe('HttpClientModule Test', () => {
  let container: Container;
 
  beforeEach(() => {
    // Create an instance of the inversify container with the httpClientModule module
    container = new Container();
    container.load(httpClientModule);
  });
 
  test('should resolve the dependency on DefaultHeadersProvider', () => {
    // Execute
    const defaultHeadersProvider = container.get<DefaultHeadersProvider>('Headers');
    // Assert
    expect(defaultHeadersProvider).toBeInstanceOf(DefaultHeadersProvider);
  });
 
  test('should resolve the HttpClient dependency', () => {
    // Excute
    const httpClient = container.get<HttpClient>(HTTP_CLIENT_SYMBOLS.FETCH);
    // Assert
    expect(httpClient).toBeInstanceOf(FetchHttpClient);
  });
});