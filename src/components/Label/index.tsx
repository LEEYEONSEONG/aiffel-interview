import { HTMLAttributes, ReactNode } from 'react';

import Text from 'components/Text';

interface ILabelProps extends HTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  htmlFor: string;
}

function Label({ children, htmlFor }: ILabelProps) {
  return (
    <label htmlFor={htmlFor}>
      <Text.Regular>{children}</Text.Regular>
    </label>
  );
}

export default Label;
