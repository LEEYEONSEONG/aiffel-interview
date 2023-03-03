import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import Input from 'components/Input';

import { searchIcon, searchIconActive } from 'assets';

import { flex } from 'styles/flex';
import { fitImg } from 'styles/mixins';

interface ISearchBarProps {
  placeholder: string;
  name: string;
  onChange: (value: string) => void;
}

function SearchBar({ placeholder, name, onChange }: ISearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  // debounce 적용
  useEffect(() => {
    const timer = setTimeout(() => onChange(searchValue), 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <Container>
      <Input>
        <Input.Value
          placeholder={placeholder}
          textAlign="left"
          name={name}
          value={searchValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)
          }
        />
        <Input.Right>
          <SearchIcon>
            <img
              alt="search"
              src={searchValue.length ? searchIconActive : searchIcon}
            />
          </SearchIcon>
        </Input.Right>
      </Input>
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  ${flex('', 'center')}
  position: sticky;
  top: 0;

  input {
    font-weight: 600;
    border: 1px solid #dde1e6;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 18px;
  height: 18px;
  ${fitImg};
`;
