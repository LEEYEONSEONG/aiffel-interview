import { ReactNode } from 'react';

interface ITriggerProps {
  children: ReactNode;
}

function Trigger(props: ITriggerProps) {
  const { children, ...restProps } = props;
  return <div {...restProps}>{children}</div>;
}

export default Trigger;
