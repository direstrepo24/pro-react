import { CreateTaskRequestDom } from "@domain/tasks";
import { TaskDto } from "../../task/dtos/task.dto";
import { TaskImplRepository } from "../../task/task-impl.repository";
import { Right } from "@core/index";
 
describe('TaskImplRepository Test', () => {
    let taskRepository: TaskImplRepository;
    const taskDto: TaskDto = {
        id: 1,
        name: 'Do homework',
        complete: false,
      };
    beforeEach(() => {
      localStorage.clear();
      taskRepository = new TaskImplRepository();
    });
 
    test('should create a new task and add it to the localStorage when the create method is called', async () => {
        // Arrange
        const request = new CreateTaskRequestDom(taskDto.name)
        // Act
        const result = await taskRepository.create(request);
        // Assert
        expect(result).toBeInstanceOf(Right);
      });
 
    test('should mark a task as complete when the id is valid', async () => {
       // Prepare
        localStorage.setItem('KEY_TASK', JSON.stringify([taskDto]));
        // Execute
        const result = await taskRepository.complete(1);
        // Assert
        expect(result).toBeInstanceOf(Right);
    });
 
    test('should return a list', async () => {
        // Prepare
        localStorage.setItem('KEY_TASK', JSON.stringify([taskDto]));
        // Execute
        const result = await taskRepository.list();
        // Assert
        expect(result).toBeInstanceOf(Right);
    });
 
    test('should return a list filtered when search', async () => {
        // Prepare
        localStorage.setItem('KEY_TASK', JSON.stringify([taskDto]));
        // Execute
        const result = await taskRepository.search('do');
        // Assert
        expect(result).toBeInstanceOf(Right);
      });
   
      test('should delete a task and remove it from the localStorage', async () => {
        // Prepare
        localStorage.setItem('KEY_TASK', JSON.stringify([taskDto]));
        // Execute
        const result = await taskRepository.deleteById(1);
        // Assert
        expect(result).toBeInstanceOf(Right);
      });
})