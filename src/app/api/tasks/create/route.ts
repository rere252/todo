import {createTask} from '@/lib/data';
import {Task} from '@/model/task';

export async function POST(req: Request) {
  const task = await req.json() as Task;
  return createTask(task);
}
