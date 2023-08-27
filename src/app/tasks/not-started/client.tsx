'use client';

import {Task} from '@/model/task';
import styles from './not-started.module.scss';
import {ChangeEvent, useState} from 'react';
import TaskList from '@/components/task-list';

export default function NotStartedClient(props: {
  initialTasks: Task[]
}) {
  const [tasks, setTasks] = useState<Task[]>(props.initialTasks);

  const blankTask: Task = {
    title: ''
  };
  const [newTask, setNewTask] = useState(blankTask);

  async function createNewTask() {
    const createdTaskResp = await fetch('/api/tasks/create', {method: 'POST', body: JSON.stringify(newTask)});
    const createdTask: Task = await createdTaskResp.json();
    setTasks([
      ...tasks,
      createdTask
    ]);
    setNewTask({
      title: ''
    });
  }

  function taskTitleUpdated(e: ChangeEvent<HTMLInputElement>) {
    setNewTask({
      ...newTask,
      title: e.target.value
    });
  }

  function startTask(task: Task) {
    tasks.find((t) => t.id === task.id)!.status = 'in-progress';
    setTasks(tasks);
  }

  return (
    <>
    <section className={styles.flexColumn}>
      <label>Task Title: <input value={newTask.title} onChange={taskTitleUpdated} type="text" /></label>
      <button className={styles.addBtn} type="button" onClick={createNewTask}>Add Task</button>
    </section>
    <section>
      <TaskList tasks={tasks} taskActionLabel="Start" taskActionHandler={startTask}/>
    </section>
    </>
  );
};