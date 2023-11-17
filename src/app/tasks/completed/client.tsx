'use client';

import TaskList from '@/components/task-list';
import {Task} from '@/model/task';
import {reopenTask} from '@/lib/tasks.service';
import {useState} from 'react';

export default function CompletedClient(
  props: {
    completedTasks: Task[]
  }
) {
  const [tasks, setTasks] = useState(props.completedTasks);

  async function onReopenTask(task: Task) {
    const startedTask = await reopenTask(task.id!);
    setTasks(tasks.filter(t => t.id !== startedTask.id));
  }

  return (
    <TaskList tasks={tasks} taskActionLabel="Reopen" taskActionHandler={onReopenTask}/>
  );
};