import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'components';

import { formatPageArray } from 'utils/formatPageArray';

interface PaginationProps {
  currentPage: number;
  total: number;
  onGetPage: (page: number) => void;
}

const Pagination = ({ currentPage, onGetPage, total }: PaginationProps) => {
  const [displayArray, setDisplayArray] = useState<Array<number>>([]);

  useEffect(() => {
    const paginationArray = formatPageArray(total);

    setDisplayArray(paginationArray);
  }, [currentPage, total]);

  return (
    <>
      {displayArray.map((page: number, index: number) => {
        return (
          <PaginationButton
            key={`pagination-${index}`}
            onClick={() => onGetPage(page)}
            active={currentPage === page}
          >
            {page}
          </PaginationButton>
        );
      })}
    </>
  );
};

export default Pagination;

type PaginationButtonProps = {
  active: boolean;
};

const PaginationButton = styled(Button)<PaginationButtonProps>`
  background-color: white;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  color: #909090;
  border: 1px solid #d8d8d8;
  margin: 0 5px;
  &:hover {
    border: 1px solid #f7cf47;
  }

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #f7cf47;
    `}
`;
