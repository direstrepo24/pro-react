import { DefaultHeadersProvider, HttpClientOptions, HttpClientResponse } from "@core/index";
import { FetchHttpClient } from "@core/infraestructure/services/fetch-http-client";
import { MockProxy, mock } from "jest-mock-extended";
global.fetch = jest.fn(); // Mock the global fetch function
 
describe("FetchHttpClient for GET test", () => {
    let fetchHttpClient: FetchHttpClient;
    const options: HttpClientOptions = {
        path: 'https://example.com/api/users'
    };
 
    beforeEach(() => {
        fetchHttpClient = new FetchHttpClient(new DefaultHeadersProvider());
    });
 
    afterEach(() => {
        jest.clearAllMocks(); // Clean mocks after each test
    });
 
    test("when request with the provided options and resolve with a successful response", async () => {
        // Prepare
        const response: HttpClientResponse<any> = {
            data: [
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' }
            ],
            statusText: "Ok",
            status: 200,
            ok: true,
            error: null
        };
        // Simulate that the fetch function resolves with a Response object that has the json method
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            status: 200,
            statusText: "Ok",
            json: () => Promise.resolve(response.data)
        });
        // Execute
        const result = await fetchHttpClient.get(options);
        // Assert
        expect(result.data).toEqual(response.data);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
 
    test('when request with the provided options and reject with a failed response', async () => {
        // Prepare
        const response: Response = {
            ok: false,
            status: 404,
            statusText: 'Not Found',
        } as any;
        (global.fetch as jest.Mock).mockResolvedValue(response);
        // Execute And Assert
        const result = await fetchHttpClient.delete(options)
        expect(result.ok).toEqual(false);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
    test('when request with the provided options and reject with an error', async () => {
        // Prepare
        const error = new Error('Network error');
        (global.fetch as jest.Mock).mockRejectedValue(error);
        // Execute And Assert
        const result = await fetchHttpClient.get(options)
        expect(result.error).toEqual(error);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
});
 
describe("FetchHttpClient for POST test", () => {
    let fetchHttpClient: FetchHttpClient;
    const options: HttpClientOptions = {
        path: 'https://example.com/api/users',
        body: {
          name: 'Alice',
          age: 25
        }
    };
 
    beforeEach(() => {
        fetchHttpClient = new FetchHttpClient(new DefaultHeadersProvider());
    });
 
    afterEach(() => {
        jest.clearAllMocks(); // Clean mocks after each test
    });
 
    test("when request with the provided options and resolve with a successful response", async () => {
        // Prepare
        const response: HttpClientResponse<any> = {
            data: {
                id: 1,
                name: 'Alice',
                age: 25
            },
            statusText: "Ok",
            status: 201,
            ok: true,
            error: null
        };
        // Simulate that the fetch function resolves with a Response object that has the json method
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            status: 201,
            statusText: "Ok",
            json: () => Promise.resolve(response.data)
        });
        // Execute
        const result = await fetchHttpClient.post(options);
        // Assert
        expect(result.data).toMatchObject(response.data);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
    test('when request with the provided options and reject with a failed response', async () => {
        // Prepare
        const response: Response = {
            ok: false,
            status: 404,
            statusText: 'Not Found'
        } as any;
        (global.fetch as jest.Mock).mockResolvedValue(response);
        // Execute And Assert
        const result = await fetchHttpClient.post(options)
        expect(result.ok).toEqual(false);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
    test('when request with the provided options and reject with an error', async () => {
        // Prepare
        const error = new Error('Network error');
        (global.fetch as jest.Mock).mockRejectedValue(error);
        // Execute And Assert
        const result = await fetchHttpClient.post(options)
        expect(result.error).toEqual(error);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
});
 
describe("FetchHttpClient for PUT test", () => {
    let fetchHttpClient: FetchHttpClient;
    const options: HttpClientOptions = {
        path: 'https://example.com/api/users',
        body: {
            id: 1,
            name: 'Alice',
            age: 25
        }
    };
 
    beforeEach(() => {
        fetchHttpClient = new FetchHttpClient(new DefaultHeadersProvider());
    });
 
    afterEach(() => {
        jest.clearAllMocks(); // Clean mocks after each test
    });
 
    test("when request with the provided options and resolve with a successful response", async () => {
        // Prepare
        const response: HttpClientResponse<any> = {
            data: {
                id: 1,
                name: 'Alice Update',
                age: 25
            },
            statusText: "Ok",
            status: 200,
            ok: true,
            error: null
        };
        // Simulate that the fetch function resolves with a Response object that has the json method
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            status: 200,
            statusText: "Ok",
            json: () =>  Promise.resolve(response.data)
        });
        // Execute
        const result = await fetchHttpClient.put(options);
        // Assert
        expect(result.data).toMatchObject(response.data);
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
 
    test('when request with the provided options and reject with a failed response', async () => {
        // Prepare
        const response: Response = {
            ok: false,
            status: 400,
            statusText: 'Bad Request'
        } as any;
        (global.fetch as jest.Mock).mockResolvedValue(response);
        // Execute And Assert
        const result = await fetchHttpClient.put(options);
        expect(result.ok).toEqual(false)
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
    test('when request with the provided options and reject with an error', async () => {
        // Prepare
        const error = new Error('Network error');
        (global.fetch as jest.Mock).mockRejectedValue(error);
        // Execute And Assert
        const result = await fetchHttpClient.put(options);
        expect(result.error).toEqual(error)
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
});
 
describe("FetchHttpClient for DELETE test", () => {
    let fetchHttpClient: FetchHttpClient;
    const options: HttpClientOptions = {
        path: 'https://example.com/api/users/1',
        headers: {
          'Content-Type': 'application/json'
        }
    };
 
    beforeEach(() => {
        fetchHttpClient = new FetchHttpClient(new DefaultHeadersProvider());
    });
 
    afterEach(() => {
        jest.clearAllMocks(); // Clean mocks after each test
    });
 
    test("when request with the provided options and resolve with a successful response", async () => {
        // Prepare
        const response: HttpClientResponse<any> = {
            data: null,
            status: 204,
            statusText: "",
            ok: true,
            error: null
        };
        // Simulate that the fetch function resolves with a Response object that has the json method
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            status: 204,
            json: () => Promise.resolve(response.data),
        });
        // Execute
        const result = await fetchHttpClient.delete(options);
        // Assert
        expect(result.data).toBeNull();
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
 
    test('when request with the provided options and reject with a failed response', async () => {
        // Prepare
        const response: Response = {
            ok: false,
            status: 403,
            statusText: 'Forbidden',
        } as any;
        (global.fetch as jest.Mock).mockResolvedValue(response);
        // Execute And Assert
        const result = await fetchHttpClient.delete(options)
        expect(result.ok).toBe(false)
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
 
    test('when request with the provided options and reject with an error', async () => {
        // Prepare
        const error = new Error('Network error');
        (global.fetch as jest.Mock).mockRejectedValue(error);
        // Execute And Assert
        const result = await fetchHttpClient.delete(options);
        expect(result.error).toEqual(error)
        expect(global.fetch).toHaveBeenCalledTimes(1); // fetch function to have been called once
    });
});
 
describe("FetchHttpClient for HEADERS , RESULT test", () => {
    let fetchHttpClient: FetchHttpClient;
    let defaultHeadersProviderMock: MockProxy<DefaultHeadersProvider>;
 
    beforeEach(() => {
        defaultHeadersProviderMock = mock<DefaultHeadersProvider>();
        fetchHttpClient = new FetchHttpClient(defaultHeadersProviderMock);
    });
 
    afterEach(() => {
        jest.clearAllMocks(); // Clean mocks after each test
    });
 
    test('should combine the default headers with the provided headers', () => {
        // Prepare
        const options: HttpClientOptions = {
          path: 'https://example.com/api/users/1',
          headers: {
            'Content-Type': 'application/json'
          }
        };
        const expectedHeaders = {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer token'
        };
        defaultHeadersProviderMock.getHeaders.mockReturnValue(
           {'Authorization': 'Bearer token'}
        );
        // Execute
        const result = fetchHttpClient.mergeHeaders(options);
        // Assert
        expect(result).toEqual(expectedHeaders);
        expect(defaultHeadersProviderMock.getHeaders).toHaveBeenCalledTimes(1);
      });
 
      test('should remove the default headers that are specified in the options', () => {
        // Prepare
        const options: HttpClientOptions = {
          path: 'https://example.com/api/users/1',
          headers: {
            'Content-Type': 'application/json'
          },
          removeDefaultHeaders: ['Authorization']
        };
        const expectedHeaders = {
          'Content-Type': 'application/json'
        };
        defaultHeadersProviderMock.getHeaders.mockReturnValue(
            {'Authorization': 'Bearer token'}
         );
        // Execute
        const result = fetchHttpClient.mergeHeaders(options);
        // Assert
        expect(result).toEqual(expectedHeaders);
        expect(defaultHeadersProviderMock.getHeaders).toHaveBeenCalledTimes(1);
      });
 
      test('should return a response with the data, status, headers and status text', async () => {
        // Prepare
        const response: Response = {
          ok: true,
          status: 200,
          statusText: 'OK',
          json: () => Promise.resolve({ id: 1, name: 'Alice' }),
          headers: new Headers({
            'content-type': 'application/json',
            'x-request-id': '123'
          })
        } as any;
        const expectedResponse: HttpClientResponse<any> = {
          data: { id: 1, name: 'Alice' },
          status: 200,
          ok: true,
          headers: {
            'content-type': 'application/json',
            'x-request-id': '123'
          },
          statusText: 'OK',
          error: null
        };
        const options = <HttpClientOptions>{
            path:`example`,
            removeDefaultHeaders: ['Authorization']
        };
        // Execute
        const result = await fetchHttpClient.result(options,response);
        // Assert
        expect(result).toMatchObject(expectedResponse);
      });
});