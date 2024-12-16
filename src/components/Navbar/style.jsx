import styled, { css } from "styled-components";

const comonStyles = css`
  color: blue;
  font-size: 18px;
`;
const Nav = styled.nav`
  width: 100%;

  display: flex;
  margin-top: 20px;
  align-items: center;

  padding: 0 60px;
  justify-content: space-between;
`;

const Input = styled.input`
  ${comonStyles};
  width: 200px;

  padding: 10px;
  /* text-indent: 5px; */
  border: solid green;
`;
export { Nav, Input };
