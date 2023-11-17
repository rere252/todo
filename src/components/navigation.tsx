import Link from 'next/link';
import styles from './navigation.module.scss';

export default function Navigation() {
  return <nav>
    <ul className={styles.menu}>
      <li>
        <Link href="/tasks/not-started">Not started</Link>
      </li>
      <li>
        <Link href="/tasks/in-progress">In Progress</Link>
      </li>
      <li>
        <Link href="/tasks/completed">Completed</Link>
      </li>
      <li>
        <Link href="/tasks/instructions">Instructions</Link>
      </li>
      <li>
        <Link href="/api/auth/signout">Sign Out</Link>
      </li>
    </ul>
  </nav>
}