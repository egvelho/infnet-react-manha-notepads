import style from './TextField.module.css';
import { Message } from '../Message/Message';

export function TextField({
  value,
  onChange,
  onBlur,
  type = 'text',
  placeholder,
  error = false,
  message,
}) {
  const className = `${style['text-field']} ${error ? style['text-field-error'] : ''}`
  const messageComponent = message ? <Message error={error}>{message}</Message> : null;
  
  return (
    <>
      <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        onBlur={onBlur}
      />
      {messageComponent}
    </>
  );
}