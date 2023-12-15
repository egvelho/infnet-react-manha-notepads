import style from './TextArea.module.css';
import { Message } from '../Message/Message';

export function TextArea({
  value,
  onChange,
  onBlur,
  placeholder,
  message,
  error = false
}) {
  function onChangeEvent(event) {
    const nextValue = event.target.value;
    onChange(nextValue);
  }

  const className = `${style['text-area']} ${error ? style['text-area-error'] : ''}`;
  const messageComponent = message ? <Message error={error}>{message}</Message> : null;
  
  return (
    <>
      <textarea
        className={className}
        value={value}
        onChange={onChangeEvent}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {messageComponent}
    </>
  );
}