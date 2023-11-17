import {getInProgressTasks} from '@/lib/data';
import InProgressClient from './client';

export default async function InProgress() {
  const tasks = await getInProgressTasks();

  return (
    <InProgressClient inProgressTasks={tasks} />
  );
};
