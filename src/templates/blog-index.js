// example src/templates/blog-index.js
import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import { Container, Heading, Box, Link } from "../components/ui"

export default function BlogIndex(props) {
  const posts = props.data.allBlogPost.nodes

  return (
    <Layout title="Blog">
      <Container>
        <Box paddingY={4}>
          <Heading as="h1">Blog</Heading>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                {post.image && (
                  <Link to={`/blog/${post.slug}`}>
                    <GatsbyImage
                      alt={post.image.alt}
                      image={getImage(post.image)}
                    />
                  </Link>
                )}
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                <p>{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allBlogPost {
      nodes {
        id
        slug
        title
        excerpt
        image {
          id
          alt
          gatsbyImageData
        }
      }
    }
  }
`
