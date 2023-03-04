import React from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { backArrow } from 'assets';

import { fitImg } from 'styles/mixins';

interface IBackIconPropTypes {
  path: string;
}

function BackIcon({ path }: IBackIconPropTypes) {
  const navigate = useNavigate();

  return (
    <Back onClick={() => navigate(path)}>
      <img alt="back" src={backArrow} />
    </Back>
  );
}

export default BackIcon;

const Back = styled.div`
  ${fitImg};
  width: 23px;
  height: 20px;
  cursor: pointer;
`;
