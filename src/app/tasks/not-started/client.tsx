'use client';

import {Task} from '@/model/task';
import styles from './not-started.module.scss';
import {ChangeEvent, useState} from 'react';
import TaskList from '@/components/task-list';
import {createTask, startTask} from '@/lib/tasks.service';

export default function NotStartedClient(props: {
  initialTasks: Task[]
}) {
  const [tasks, setTasks] = useState(props.initialTasks);

  const blankTask: Task = {
    title: ''
  };
  const [newTask, setNewTask] = useState(blankTask);

  async function createNewTask() {
    const createdTask = await createTask(newTask);
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

  async function onStartTask(task: Task) {
    const startedTask = await startTask(task.id!);
    setTasks(tasks.filter(t => t.id !== startedTask.id));
  }

  return (
    <>
    <section className={styles.flexColumn}>
      <label>Task Title: <input value={newTask.title} onChange={taskTitleUpdated} type="text" /></label>
      <button className={styles.addBtn} type="button" onClick={createNewTask}>Add Task</button>
    </section>
    <section>
      <TaskList tasks={tasks} taskActionLabel="Start" taskActionHandler={onStartTask}/>
    </section>
    </>
  );
};