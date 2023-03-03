import { ReactNode } from 'react';

interface ITextLayout {
  children: ReactNode;
}

function TextLayout({ children }: ITextLayout) {
  return <p>{children}</p>;
}

export default TextLayout;
