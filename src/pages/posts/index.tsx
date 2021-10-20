import { GetStaticProps } from "next";
import { SEO } from "../../components/SEO";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import {
  Container,
  Content,
  PostContainer,
  PostTime,
  PostTitle,
  PostParagraph,
} from "../../styles/Posts";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

interface IPostsProps {
  posts: Post[];
}

export default function Posts({ posts }: IPostsProps) {
  return (
    <>
      <SEO title="Posts" />

      <Container>
        <Content>
          {posts?.map((post) => (
            <PostContainer key={post.slug} href="#">
              <PostTime>{post.updatedAt}</PostTime>
              <PostTitle>{post.title}</PostTitle>
              <PostParagraph>{post.excerpt}</PostParagraph>
            </PostContainer>
          ))}
        </Content>
      </Container>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? "",
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: { posts },
  };
};
