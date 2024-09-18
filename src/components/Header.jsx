import styled from "styled-components";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: black;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    li {
      font-size: 16px;
      font-weight: 400;
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyle>
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </HeaderStyle>
  );
}