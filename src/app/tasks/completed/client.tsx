'use client';

import TaskList from '@/components/task-list';
import {Task} from '@/model/task';

export default function CompletedClient(
  props: {
    completedTasks: Task[]
  }
) {
  const tasks = props.completedTasks;

  function reopenTask(task: Task) {
    tasks.find((t) => t.id === task.id)!.status = 'not-started';
  }

  return (
    <TaskList tasks={tasks} taskActionLabel="Reopen" taskActionHandler={reopenTask}/>
  );
};