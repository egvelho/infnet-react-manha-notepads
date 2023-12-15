import style from './AppBar.module.css';
import { Title } from '../Title/Title';
import { Button } from '../Button/Button';

const logoSrc = "https://upload.wikimedia.org/wikipedia/commons/f/f0/Icon-notepad.svg";

export function AppBar({ onClickCreateNotepad }) {
  return (
    <header className={style['app-bar']}>
      <a href="/" className={style['app-bar-link']}>
        <img
          className={style['app-bar-logo']}
          src={logoSrc}
        />
        <Title>Notepads</Title>
      </a>
      <Button onClick={onClickCreateNotepad}>Criar notepad</Button>
    </header>
  );
}