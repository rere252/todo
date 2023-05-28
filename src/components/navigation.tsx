import Link from 'next/link';
import styles from './navigation.module.scss';


export default function Navigation() {
  return <nav>
    <ul className={styles.menu}>
      <li>
        <Link href="/not-started">Not started</Link>
      </li>
      <li>
        <Link href="/in-progress">In Progress</Link>
      </li>
      <li>
        <Link href="/completed">Completed</Link>
      </li>
      <li>
        <Link href="/instructions">Instructions</Link>
      </li>
    </ul>
  </nav>
}