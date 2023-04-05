# 프로젝트 소개

- aiffel 부분 클론 프로젝트
- 개발 인원 : 1인 (이연성)
- 개발 기간 : 22.03.02 ~ 03.05 (3일)

<br />

[구현한 화면]

<br />

<p align="center">
<img width="300" alt="image" src="https://user-images.githubusercontent.com/68770086/222915463-645e2834-1d9d-4ea0-b8ba-f6966e196fa4.png">
<img width="303" alt="image" src="https://user-images.githubusercontent.com/68770086/222915489-1357a46b-d641-4484-b425-c22f95d92c8b.png">
</p>

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/68770086/222915585-3ccd38b6-3f95-405a-b8a1-1fc74364afc4.jpg">
</p>

<br />

# 선정 이유

- Select, Dropdown , Text, Input, TextArea 등 컴포넌트 재사용화

<br />

# 프로젝트 설치 및 실행 방법

```bash

 node -v
 v16.15.0

```

```typescript
// client 실행

npm install
npm run start

// json-server 실행

cd json-server-test
npm install global json-server
npm start
```

<br />

# 프로젝트 관리

Jira를 이용해 할 일을 관리했습니다.

<p align="center">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/68770086/222915884-60d790a7-2368-4d77-9733-b0fd38651fcd.jpg">
</p>

<br />

# 프로젝트 구조

```
├── json-server-test
├── public
├── src
│   ├── assets
│   │   ├── ic-active-like.png
│   │   ├── ...
│   │   └── index.ts
│   ├── components
│   │   ├── BackIcon
│   │   │   └── index.tsx
│   │   ├── Button
│   │   │   └── index.tsx
│   │   ├── Dropdown
│   │   │   ├── components
│   │   │   │   ├── Item.tsx
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── List.tsx
│   │   │   │   └── Trigger.tsx
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   └── index.tsx
│   │   ├── Input
│   │   │   ├── components
│   │   │   │   ├── Layout.tsx
│   │   │   │   ├── Right.tsx
│   │   │   │   └── Value.tsx
│   │   │   └── index.tsx
│   │   ├── Label
│   │   │   └── index.tsx
│   │   ├── Layout
│   │   │   └── index.tsx
│   │   ├── Pagination
│   │   │   └── index.tsx
│   │   ├── SearchBar
│   │   │   └── index.tsx
│   │   ├── Select
│   │   │   ├── components
│   │   │   │   ├── Input.tsx
│   │   │   │   └── Layout.tsx
│   │   │   └── index.tsx
│   │   ├── Text
│   │   │   ├── components
│   │   │   │   ├── TextLarge.tsx
│   │   │   │   ├── TextLayout.tsx
│   │   │   │   ├── TextMedium.tsx
│   │   │   │   ├── TextRegular.tsx
│   │   │   │   └── TextSmall.tsx
│   │   │   └── index.tsx
│   │   ├── TextArea
│   │   │   ├── components
│   │   │   │   ├── Layout.tsx
│   │   │   │   └── Value.tsx
│   │   │   └── index.tsx
│   │   └── index.ts
│   ├── pages
│   │   ├── Forum
│   │   │   ├── components
│   │   │   │   └── ForumList
│   │   │   │       └── index.tsx
│   │   │   ├── index.tsx
│   │   │   └── queries
│   │   │       ├── useGetForumListQuery.ts
│   │   │       └── useGetPageListQuery.ts
│   │   ├── ForumDetail
│   │   │   ├── index.tsx
│   │   │   └── queries
│   │   │       ├── useDeleteForumQuery.ts
│   │   │       ├── useGetForumDetailQuery.ts
│   │   │       └── usePatchLikeToggleQuery.ts
│   │   ├── ForumWrite
│   │   │   ├── index.tsx
│   │   │   └── queries
│   │   │       └── usePostForumQuery.ts
│   │   ├── Login
│   │   │   ├── index.tsx
│   │   │   └── queries
│   │   │       └── useLoginQuery.ts
│   │   └── index.ts
│   ├── redux
│   │   └── modules
│   │       ├── auth.ts
│   │       ├── forum.ts
│   │       └── index.ts
│   ├── styles
│   │   ├── GlobalStyle.ts
│   │   ├── flex.ts
│   │   └── mixins.ts
│   ├── types
│   │   ├── images.d.ts
│   │   └── payloadTypes.ts
│   └── utils
│   │   ├── formatPageArray.ts
│   │   └── regExp.ts
│   │
│   ├── index.tsx
│   └── Routes.tsx
├── package-lock.json
├── package.json
└── tsconfig.json


```

</br>

# 사용한 기술 스택

- 클라이언트 상태는 redux, 서버 상태는 react-query로 관리했습니다.
- json-server 를 활용하여 dummy server를 활용하였습니다.

```

- React, Typescript
- 상태 관리 : redux, react-query
- 스타일 : styled-components
- 기타 라이브러리 : json-server, react-route-dom 등

```

<br />

# 컴포넌트를 만들 때 고려한 내용

- 아토믹 디자인 패턴 [(참고글)](https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/)

<img width="518" alt="image" src="https://user-images.githubusercontent.com/98295004/214600685-48d2ab23-2b7b-4215-9a6d-a7ab6d0067fe.png">

<br />

공통 컴포넌트를 만들 때 `Atomic Deign Pattern`와 `합성 컴포넌트 패턴` 을 활용했습니다.

- 서브 컴포넌트로 분해한 후, 필요한 것만 조합해서 사용

```typescript
// component/Input/index.ts

const Input = Object.assign(Layout, {
  Label,
  Value,
  Right,
});

export default Input;

--------------------------------------------

// component/Select/Value

function SelectInput({ isSelect, onClick, ...restProps }: ISelectInputProps) {
  return (
    <Input title={restProps.title} onClick={onClick}>
      <Input.Value readOnly {...restProps} />
      <Input.Right>
        <Arrow isSelect={isSelect}>
          <img alt="arrow down" src={selectIcon} />
        </Arrow>
      </Input.Right>
    </Input>
  );
}

export default SelectInput;
```

<br />

# 구현 사항

## 1. Private Route

- 로그인 상태에 따른 페이지 권환 기능
- 로그인 시 유저 정보 전역 상태 관리

<br />

## 2. Search & Pagination 기능

- Redux client store 사용 ( filteredList 및 list state 관리)
- searchBar component 생성 후 최적화 input value debounce 적용
- pagination component 생성 및 검색에 따른 pagination 기능 적용

<p align="center">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/68770086/222916618-f7667378-1094-48dc-9528-cf3178b0237a.gif">
</p>

<br />

## 3. 질문 등록

- 공통 Select , Dropdown Component 구현
- 등록하기 버튼 `validation`

<p align="center">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/68770086/222917466-5867f8c5-b789-4bf2-beeb-7b7a4be42796.gif">
</p>

<br />

## 4. 좋아요 및 삭제 기능

- json-server 활용 좋아요 및 삭제 기능 구현

<p align="center">
<img width="400" alt="image" src="https://user-images.githubusercontent.com/68770086/222917354-477d6d93-3a82-49e7-9c51-4c10ed3dabec.gif">
</p>

<br />
