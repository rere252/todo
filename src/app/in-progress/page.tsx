import TaskList from '@/components/task-list';
import {getInProgressTasks} from '@/lib/data';
import {Task} from '@/model/task';

export default function InProgress() {
  const initialTasks = getInProgressTasks();

  function completeTask(task: Task) {
    initialTasks.find((t) => t.id === task.id)!.status = 'completed';
    // todo update the list
  }

  return (
    <>
      <section>
        <TaskList tasks={initialTasks} taskActionLabel="Complete" taskActionHandler={completeTask}/>
      </section>
    </>
  );
};
