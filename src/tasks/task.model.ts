export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

/**
 * Interfaces are a typescript concept that simply enforces the shape
 * of an object upon computation.
 *
 * Classes are useful when you want to create objects based on a blueprint
 * and add some self-contained functionality to them using methods.
 */
