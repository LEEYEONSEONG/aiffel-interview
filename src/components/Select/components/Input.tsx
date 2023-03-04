import { MouseEvent } from 'react';

import styled, { css } from 'styled-components';

import Input from 'components/Input';
import { selectIcon } from 'assets';

interface ISelectInputProps {
  isSelect: boolean;
  placeholder?: string;
  title: string;
  value: string;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}

function SelectInput({ isSelect, onClick, ...restProps }: ISelectInputProps) {
  return (
    <StyledInput title={restProps.title} onClick={onClick}>
      <StyledInputValue readOnly {...restProps} />
      <Input.Right>
        <Arrow isSelect={isSelect}>
          <img alt="arrow down" src={selectIcon} />
        </Arrow>
      </Input.Right>
    </StyledInput>
  );
}

export default SelectInput;

type IArrowStyle = Pick<ISelectInputProps, 'isSelect'>;

const StyledInput = styled(Input)`
  cursor: pointer;
`;

const StyledInputValue = styled(Input.Value)`
  border: 1px solid #c0c0c0;
  border-radius: 5px;
  cursor: pointer;
  color: #191919;
`;

const Arrow = styled.div<IArrowStyle>`
  position: absolute;
  top: 18px;
  right: 15px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  ${(props) => (props.isSelect ? ReverseArrow : '')};
`;

const ReverseArrow = css`
  img {
    transform: rotate(-180deg);
  }
`;
