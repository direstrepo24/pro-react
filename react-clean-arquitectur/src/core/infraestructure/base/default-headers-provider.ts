import { injectable } from "inversify";

@injectable()
export class DefaultHeadersProvider {
  constructor() {}
  getHeaders(): Record<string, string>  {
    return {
      'Authorization': 'Bearer your-auth-token',
      'Content-Type': 'application/json',
    };
  }
}