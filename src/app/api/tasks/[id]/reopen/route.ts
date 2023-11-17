import {NextRequest, NextResponse} from 'next/server';
import {reopenTask} from '@/lib/data';

export async function POST(req: NextRequest, paramWrapper: {params: {id: string}}) {
  const taskId = Number(paramWrapper.params.id);
  const task = await reopenTask(taskId);
  return NextResponse.json(task);
}