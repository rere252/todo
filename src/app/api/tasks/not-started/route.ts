import {NextResponse} from 'next/server';
import {getNotStartedTasks} from '@/lib/data';


export async function GET(req: Request) {
  const tasks = await getNotStartedTasks();
  return NextResponse.json(tasks);
}

