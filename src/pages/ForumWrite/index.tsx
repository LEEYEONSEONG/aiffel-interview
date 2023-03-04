import React, {
  ChangeEvent,
  MouseEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';

import styled, { css } from 'styled-components';

import {
  BackIcon,
  Button,
  Dropdown,
  Input,
  Text,
  Select,
  TextArea,
} from 'components';

import { usePostForumQuery } from './queries/usePostForumQuery';

import { flex } from 'styles/flex';
import { fontSize } from 'styles/mixins';

const SELECTED_LIST = ['general', 'tip', 'bug', 'learn'];

function ForumWrite() {
  const { mutate: postNewForum } = usePostForumQuery();

  const [inputValue, setInputValue] = useState({
    title: '',
    content: '',
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState('general');

  const { title, content } = inputValue;

  //등록하기 버튼 validate
  const submitStatus = useMemo(
    () => !!title && !!content && !!selectedOption,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputValue, selectedOption],
  );

  const handleInputValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setInputValue((prev) => ({ ...prev, [name]: value }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputValue],
  );

  const handelSelectedOptionClick = (e: MouseEvent<HTMLLIElement>) => {
    const { innerText } = e.currentTarget;
    setSelectedOption(innerText);
    handleDropdownClick();
  };

  const handleDropdownClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleConfirmBtnClick = () => {
    postNewForum({ title, content, selectedOption });
  };

  return (
    <Container>
      <BackIcon path="/forum" />
      <Text.Large weight={700}>질문 등록하기</Text.Large>
      <Input>
        <Input.Label htmlFor="title">질문 제목</Input.Label>
        <InputValue
          value={title}
          name="title"
          type="text"
          textAlign="left"
          placeholder="ex. nnnnnn를 이용해서 빈 행렬을 만드는 방법이 궁금합니다"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputValue(e)}
        />
      </Input>
      <StyledDropdown>
        <Dropdown.Trigger>
          <Select>
            <Select.Label htmlFor="algo">분류</Select.Label>
            <Select.Input
              isSelect={showDropdown}
              title="selected"
              value={selectedOption}
              onClick={() => handleDropdownClick()}
            />
          </Select>
        </Dropdown.Trigger>
        <Dropdown.List isOpen={showDropdown}>
          {SELECTED_LIST.map((item, idx) => (
            <Dropdown.Item
              key={`selected-${idx}`}
              isActive={selectedOption === item}
              title="selected"
              onClick={handelSelectedOptionClick}
            >
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.List>
      </StyledDropdown>
      <TextArea>
        <TextArea.Label htmlFor="content">질문 내용</TextArea.Label>
        <TextAreaValue
          value={content}
          name="content"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            handleInputValue(e)
          }
        />
      </TextArea>
      <ConfirmButton onClick={handleConfirmBtnClick} disabled={!submitStatus}>
        등록하기
      </ConfirmButton>
    </Container>
  );
}

export default ForumWrite;

const Container = styled.div`
  ${flex('', '', 'column')}
  width: 700px;
  margin-top: 120px;
  row-gap: 35px;
`;

const InputValue = styled(Input.Value)`
  border: 1px solid #c0c0c0;
  font-size: ${fontSize.regular};
  font-weight: 700;
  color: #777777;
  border-radius: 8px;
  ::placeholder {
    font-weight: 300;
  }
`;

const TextAreaValue = styled(TextArea.Value)`
  border: 1px solid #c0c0c0;
  font-size: ${fontSize.regular};
  font-weight: 700;
  color: #777777;
  height: 300px;
  border-radius: 8px;
  ::placeholder {
    font-weight: 400;
  }
`;

const StyledDropdown = styled(Dropdown)`
  width: 170px;
`;

const ConfirmButton = styled(Button)<{ disabled: boolean }>`
  ${flex('center', 'center')}
  background-color: #f7cf47;
  color: #ffffff;
  border-radius: 8px;
  font-weight: 700;
  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #c0c0c0;
    `}
`;
