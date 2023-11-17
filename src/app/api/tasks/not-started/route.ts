import {getNotStartedTasks} from '@/lib/data';
import {NextResponse} from 'next/server';


export async function GET(req: Request) {
  const tasks = await getNotStartedTasks();
  return NextResponse.json(tasks);
}

