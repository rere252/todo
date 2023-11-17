import {Task} from '@/model/task';
import {sql} from '@vercel/postgres';
import {TaskState} from './task-state.type';


export async function createTables() {
  await sql`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title TEXT NOT NULL,
      status TEXT NOT NULL
    )
  `;
}

async function getTasksByState(state: TaskState) {
  const tasks = (await sql.query<Task>(`SELECT * FROM tasks WHERE status = $1 ORDER BY id DESC`, [state])).rows;
  return tasks;
}

export function getNotStartedTasks(): Promise<Task[]> {
  return getTasksByState('not-started');
}

export function getInProgressTasks(): Promise<Task[]> {
  return getTasksByState('in-progress');
}

export function getCompletedTasks(): Promise<Task[]> {
  return getTasksByState('completed');
}

export async function createTask(task: Task) {
  const createdTask = await sql<Task>`
    INSERT INTO tasks (title, status) VALUES (${task.title}, 'not-started')
    RETURNING *
  `;
  return createdTask.rows[0];
}

async function setTaskState(id: number, state: TaskState) {
  const updatedTask = await sql<Task>`
    UPDATE tasks SET status = ${state} WHERE id = ${id}
    RETURNING *
  `;
  return updatedTask.rows[0];
}

export function startTask(id: number) {
  return setTaskState(id, 'in-progress');
}

export function completeTask(id: number) {
  return setTaskState(id, 'completed');
}

export function reopenTask(id: number) {
  return setTaskState(id, 'not-started');
}
