import styles from './NotepadList.module.css';
import { NotepadCard } from '../NotepadCard/NotepadCard';

export function NotepadList({ notepads, onClickItem }) {
  const notepadsItems = notepads.map(
    (notepad, index) => (
      <div
        key={notepad.id}
        className={styles['notepad-item']}
        onClick={() => onClickItem(notepad)}>
        <NotepadCard {...notepad} />
      </div>
    )
  );
  
  return (
    <div className={styles['notepad-list']}>
      {notepadsItems}
    </div>
   );
}