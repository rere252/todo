import TaskList from '@/components/task-list';
import {getCompletedTasks} from '@/lib/data';
import {Task} from '@/model/task';

export default function Completed() {
  const tasks = getCompletedTasks();

  function reopenTask(task: Task) {
    tasks.find((t) => t.id === task.id)!.status = 'not-started';
  }

  return (
    <TaskList tasks={tasks} taskActionLabel="Reopen" taskActionHandler={reopenTask}/>
  );
};