import { ChangeEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input } from 'components/atoms';

import { refreshIcon, searchIcon, searchIconActive } from 'assets';

import { flex } from 'styles/flex';
import { fitImg } from 'styles/mixins';

interface ISearchBarProps {
  placeholder: string;
  name: string;
  hasRefresh?: boolean;
  onChange: (value: string) => void;
}

function SearchBar({
  placeholder,
  name,
  hasRefresh,
  onChange,
}: ISearchBarProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleRefreshClick = () => {
    setSearchValue('');
  };

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
      {hasRefresh && (
        <RefreshIcon>
          <img
            onClick={() => handleRefreshClick()}
            alt="refresh"
            src={refreshIcon}
          />
        </RefreshIcon>
      )}
    </Container>
  );
}

export default SearchBar;

const Container = styled.div`
  ${flex('', 'center')}
  width: 100%;
  input {
    font-weight: 600;
    border: 1px solid #c0c0c0;
    border-radius: 8px;
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

const RefreshIcon = styled.div`
  width: 25px;
  ${fitImg};
  margin-left: 8px;
  cursor: pointer;
`;
