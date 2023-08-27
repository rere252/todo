import {getCompletedTasks} from '@/lib/data';
import CompletedClient from './client';

export default async function Completed() {
  const tasks = await getCompletedTasks();
  return (
    <CompletedClient completedTasks={tasks}/>
  );
};