import { ReactNode } from 'react';

interface ITriggerProps {
  children: ReactNode;
}

function Trigger({ children, ...restProps }: ITriggerProps) {
  return <div {...restProps}>{children}</div>;
}

export default Trigger;
