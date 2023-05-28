export interface Task {
  id: number;
  title: string;
  status: 'not-started' | 'in-progress' | 'completed';
}
