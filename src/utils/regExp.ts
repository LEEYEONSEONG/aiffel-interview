const validateEmail = (email: string) => {
  //이메일  타입 체크
  return /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(
    email,
  );
};

export default validateEmail;
