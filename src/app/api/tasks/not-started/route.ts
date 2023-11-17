import {getNotStartedTasks} from '@/lib/data';


export async function GET(req: Request) {
  const tasks = await getNotStartedTasks();
  return Response.json(tasks);
}

