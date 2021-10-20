import styled from "styled-components";

export const Container = styled.main`
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 2rem;
`;

export const Content = styled.div`
  max-width: 720px;

  margin: 5rem auto 0;
`;

export const PostContainer = styled.a`
  display: block;

  & + a {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.colors.grayNormal};
  }
`;

export const PostTime = styled.time`
  display: flex;

  align-items: center;

  font-size: 1rem;

  color: ${({ theme }) => theme.colors.grayLight};
`;

export const PostTitle = styled.strong`
  display: block;

  margin-top: 1rem;

  font-size: 1.5rem;
  line-height: 2rem;

  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const PostParagraph = styled.p`
  margin-top: 0.5rem;

  line-height: 1.625rem;

  color: ${({ theme }) => theme.colors.grayLight};
`;
