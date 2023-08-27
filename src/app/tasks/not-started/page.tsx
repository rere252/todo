import NotStartedClient from './client';
import {getNotStartedTasks} from '@/lib/data';

export default async function NotStarted() {
  const tasks = await getNotStartedTasks();
  return (<NotStartedClient initialTasks={tasks} />);
};
