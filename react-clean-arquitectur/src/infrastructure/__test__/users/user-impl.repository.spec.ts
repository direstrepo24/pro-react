 
import { test, describe, beforeEach } from '@jest/globals'
import { MockProxy, mock } from 'jest-mock-extended';
import { HttpClient, HttpClientResponse, NoResult } from '@core/index';
import { CreateUserRequestDom, UpdateUserRequestDom } from '@domain/users/models/user-request.dom';
import { UserImplRepository } from '@infrastructure/users/user-impl.repository';
import { UserDto } from '@infrastructure/users/dtos/user.dto';
import { UserMapper } from '@infrastructure/users/mapper/user.mapper';
 
describe('UserRepositoryImpl Test', () => {
  let httpClientMock: MockProxy<HttpClient>;
  let repository:UserImplRepository;
 
  beforeEach(() => {
    httpClientMock = mock<HttpClient>();
    repository = new UserImplRepository(httpClientMock);
  });
 
  describe('List users test', ()=> {
    test('should return a successful', async () => {
      // Prepare
      let response = <HttpClientResponse<UserDto[]>>{
        status: 200,
        data: [
            <UserDto>{}
        ],
        ok: true
      };
      httpClientMock.get.mockReturnValue(Promise.resolve(response));
      // Execute
      const result = await repository.list();
      // Assert
      expect(result.isRight()).toBe(true);
      expect(result.value).toMatchObject(response.data);
      expect(httpClientMock.get).toHaveBeenCalledTimes(1);
    });
 
    test('should return a error', async () => {
      // Prepare
      httpClientMock.get.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        ok: false,
        error: new Error('Network error')
      }));
      // Execute
      const result = await repository.list();
      // Assert
      expect(result.isLeft()).toBe(true);
      expect(httpClientMock.get).toHaveBeenCalledTimes(1);
    });
  })
 
  describe('Create user test', ()=> {
    let requestObj = new CreateUserRequestDom("name","username","email")
 
    test('should return a successful when create a user', async () => {
      // Prepare
      let responseDto =  <UserDto>{
        id: 1,
        name: requestObj.name,
        userName: requestObj.userName,
        email: requestObj.email
      }
      const responseDom = UserMapper.toDom(responseDto)
      httpClientMock.post.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        status: 201,
        data: responseDto,
        ok: true
      }));
      // Execute
      const result = await repository.create(requestObj);
      // Assert
      expect(result.isRight()).toBe(true);
      expect(result.value).toMatchObject(responseDom);
      expect(httpClientMock.post).toHaveBeenCalledTimes(1);
    });
 
    test('should return a error when create user', async () => {
      // Prepare
      httpClientMock.post.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        ok: false,
        error: new Error('Network error')
      }));
      // Execute
      const result = await repository.create(requestObj);
      // Assert
      expect(result.isLeft()).toBe(true);
      expect(httpClientMock.post).toHaveBeenCalledTimes(1);
    });
  })
 
  describe('Upadate user test', ()=> {
    let requestObj = new UpdateUserRequestDom(1, "name","username")
 
    test('should return a successful when update user', async () => {
      // Prepare
      let responseDto =  <UserDto>{
        id: 1,
        name: requestObj.name,
        userName: requestObj.userName,
        email: "email"
      }
      const responseDom = UserMapper.toDom(responseDto)
      httpClientMock.put.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        status: 200,
        data: responseDto,
        ok: true
      }));
      // Execute
      const result = await repository.update(requestObj);
      // Assert
      expect(result.isRight()).toBe(true);
      expect(result.value).toMatchObject(responseDom);
      expect(httpClientMock.put).toHaveBeenCalledTimes(1);
    });
 
    test('should return a error when update user', async () => {
      // Prepare
      httpClientMock.put.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        ok: false,
        error: new Error('Network error')
      }));
      // Execute
      const result = await repository.update(requestObj);
      // Assert
      expect(result.isLeft()).toBe(true);
      expect(httpClientMock.put).toHaveBeenCalledTimes(1);
    });
  })
 
  describe('DeleteById user test', ()=> {
 
    test('when request delete should return a successful', async () => {
      // Prepare
      httpClientMock.delete.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        status: 204,
        data: null,
        ok: true
      }));
      // Execute
      const result = await repository.deleteById(1);
      // Assert
      expect(result.isRight()).toBe(true);
      expect(result.value).toBe(NoResult);
      expect(httpClientMock.delete).toHaveBeenCalledTimes(1);
    });
 
    test('when request delete should return a error', async () => {
      // Prepare
      httpClientMock.delete.mockReturnValue(Promise.resolve(<HttpClientResponse>{
        ok: false,
        error: new Error('Network error')
      }));
      // Execute
      const result = await repository.deleteById(1);
      // Assert
      expect(result.isLeft()).toBe(true);
      expect(httpClientMock.delete).toHaveBeenCalledTimes(1);
    });
  })
})