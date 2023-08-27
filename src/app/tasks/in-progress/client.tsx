'use client';

import TaskList from '@/components/task-list';
import {Task} from '@/model/task';

export default function InProgressClient(
  props: {
    inProgressTasks: Task[]
  }
) {
  const tasks = props.inProgressTasks;

  function completeTask(task: Task) {
    tasks.find((t) => t.id === task.id)!.status = 'completed';
    // todo update the list
  }

  return (
    <>
      <section>
        <TaskList tasks={tasks} taskActionLabel="Complete" taskActionHandler={completeTask}/>
      </section>
    </>
  );
};
