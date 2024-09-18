import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.tagColor};
    border: 1px solid ${(props) => props.tagColor};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    font-size: 18px;
    font-weight: 600;
  }
  p {
    color: gray;
  }
`;

export default function Content({ content }) {
  return (
    <ContentContainer tagColor="#d7fa00">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </ContentContainer>
  );
}
