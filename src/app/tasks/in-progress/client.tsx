'use client';

import TaskList from '@/components/task-list';
import {Task} from '@/model/task';
import {completeTask} from '@/lib/tasks.service';
import {useState} from 'react';

export default function InProgressClient(
  props: {
    inProgressTasks: Task[]
  }
) {
  const [tasks, setTasks] = useState(props.inProgressTasks);

  async function onCompleteTask(task: Task) {
    const completedTask = await completeTask(task.id!);
    setTasks(tasks.filter(t => t.id !== completedTask.id));
  }

  return (
    <>
      <section>
        <TaskList tasks={tasks} taskActionLabel="Complete" taskActionHandler={onCompleteTask}/>
      </section>
    </>
  );
};
