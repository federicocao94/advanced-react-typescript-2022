import { FC } from 'react';
import { useIntl } from 'react-intl';

export interface AlertProps {
  messageId: string,
  variant: 
    | 'danger'
    | 'dark'
    | 'info'
    | 'light'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
}

export const Alert: FC<AlertProps> = ({ messageId, variant }) => {
  const { formatMessage } = useIntl();

  if (!messageId) {
    throw new Error('The messageId prop is required');
  }
  return (
    <div className={`alert alert-${variant}`} role="alert">
      {formatMessage({ id: messageId })}
    </div>
  );
}
