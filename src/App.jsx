import styled, { createGlobalStyle } from "styled-components";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  }

  body {
    background-color: #121212;
  }
`;

const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <main>
        <Header />
        <SectionStyle>
          {contents.map((el) => (
            <Content key={el.id} content={el} />
          ))}
        </SectionStyle>
      </main>
    </>
  );
}

export default App;