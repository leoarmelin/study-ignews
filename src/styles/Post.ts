import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 2rem;
`;

export const PostWrapper = styled.article`
  max-width: 720px;

  margin: 5rem auto 0;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
`;

export const Time = styled.time`
  display: block;

  margin-top: 1.5rem;

  font-size: 1rem;

  color: ${({ theme }) => theme.colors.grayLight};
`;

export const Content = styled.div`
  margin-top: 2rem;

  line-height: 2rem;
  font-size: 1.125rem;

  color: ${({ theme }) => theme.colors.grayLighter};

  &.preview {
    background: ${({ theme }) =>
      `linear-gradient(${theme.colors.grayLighter}, transparent)`};
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  p,
  ul {
    margin: 1.5rem 0;
  }

  ul {
    padding-left: 1.5rem;

    li {
      margin: 0.5rem 0;
    }
  }
`;

export const ContinueReading = styled.div`
  border-radius: 100px;
  margin: 4rem 0 2rem;
  padding: 2rem;

  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.grayDarkTwo};

  a {
    margin-left: 0.5rem;

    color: ${({ theme }) => theme.colors.yellow};

    &:hover {
      text-decoration: underline;
    }
  }
`;
