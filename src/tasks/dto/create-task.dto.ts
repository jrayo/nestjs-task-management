/**
 * What are Data Transfer Objects used for?
 * DTOs define the shape of data of an incoming request, and allows us to re-use the definition
 * throughout the application
 */

export class CreateTaskDto {
  title: string;
  description: string;
}
