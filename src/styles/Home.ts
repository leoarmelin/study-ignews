import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  height: calc(100vh - 5rem);

  margin: 0 auto;
  padding: 0 2rem;
`;

export const Content = styled.section`
  max-width: 600px;

  & > span {
    font-size: 1.5rem;
    font-weight: bold;
  }

  button {
    margin-top: 2.5rem;
  }
`;

export const LittleText = styled.span``;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 4.5rem;

  margin-top: 2.5rem;
`;

export const ColoredText = styled.span`
  color: ${({ theme }) => theme.colors.cyan};
`;

export const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 2.25rem;

  margin-top: 1.5rem;

  span {
    font-weight: bold;
  }
`;

export const HomeImg = styled.img``;
