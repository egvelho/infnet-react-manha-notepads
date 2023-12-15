import style from './Message.module.css';

export function Message({ children, error = false }) {
  const className = `${style['message']} ${error ? style['message-error'] : ''}`
  
  return <p className={className}>{children}</p>
}