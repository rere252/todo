'use client';

import {Task} from '@/model/task';
import styles from './not-started.module.scss';
import {ChangeEvent, useState} from 'react';
import {getNotStartedTasks} from '@/lib/data';
import TaskList from '@/components/task-list';

export default function NotStarted() {
  const initialTasks = getNotStartedTasks();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const blankTask: Task = {
    id: tasks[tasks.length - 1].id + 1,
    status: 'not-started',
    title: ''
  }
  const [newTask, setNewTask] = useState(blankTask);

  function addNewTask() {
    setTasks([
      ...tasks,
      newTask
    ]);
    setNewTask({
      ...newTask,
      id: newTask.id + 1,
      title: '',
      status: 'not-started'
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
      <button className={styles.addBtn} type="button" onClick={addNewTask}>Add Task</button>
    </section>
    <section>
      <TaskList tasks={tasks} taskActionLabel="Start" taskActionHandler={startTask}/>
    </section>
    </>
  );
};