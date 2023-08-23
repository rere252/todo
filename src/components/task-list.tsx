import {Task} from '@/model/task';
import styles from './task-list.module.scss';

export default function TaskList(
  props: {
    tasks: Task[],
    taskActionLabel: string,
    taskActionHandler: (task: Task) => void
  }
) {
  const tasks = props.tasks;
  return (
    <ul>
      {tasks.map((task) => (
        <li className={styles.item} key={task.id}>
          <button className={styles.action} type="button" onClick={() => console.log('hah')}>{props.taskActionLabel}</button>{task.title}</li>
      ))}
    </ul>
  );
}