import {createTask} from '@/lib/data';
import {Task} from '@/model/task';
import {NextResponse} from 'next/server';

export async function POST(req: Request) {
  const newTask = await req.json() as Task;
  const createdTask = await createTask(newTask);
  return NextResponse.json(createdTask);
}
