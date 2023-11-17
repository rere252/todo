import {completeTask} from '@/lib/data';
import {NextRequest} from 'next/server';

export async function POST(req: NextRequest, paramWrapper: {params: {id: string}}) {
  const taskId = Number(paramWrapper.params.id);
  const task = await completeTask(taskId);
  return Response.json(task);
}
