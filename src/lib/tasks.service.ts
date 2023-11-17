import {Task} from '@/model/task';

export async function createTask(task: Task) {
  const createdTaskResp = await fetch('/api/tasks/create', {method: 'POST', body: JSON.stringify(task)});
  const createdTask: Task = await createdTaskResp.json();
  return createdTask;
}

export async function startTask(id: number) {
  const startedTaskResp = await fetch(`/api/tasks/${id}/start`, {method: 'POST'});
  const startedTask: Task = await startedTaskResp.json();
  return startedTask;
}

export async function completeTask(id: number) {
  const completedTaskResp = await fetch(`/api/tasks/${id}/complete`, {method: 'POST'});
  const completedTask: Task = await completedTaskResp.json();
  return completedTask;
}

export async function reopenTask(id: number) {
  const reopenedTaskResp = await fetch(`/api/tasks/${id}/reopen`, {method: 'POST'});
  const reopenedTask: Task = await reopenedTaskResp.json();
  return reopenedTask;
}
