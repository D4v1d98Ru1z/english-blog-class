import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/Bio"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RelatedPost from '../components/RelatedPost'
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <div>
        <a 
          href="https://github.com/D4v1d98Ru1z/english-blog-class"
          style={{boxShadow: 'none', position: 'absolute'}}
        >
          <img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149" className="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1"/>
        </a>
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="EFLA"
            keywords={[`blog`, `english`]}
          />
          <Bio />
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small style={{fontWeight:'bold'}}>{node.frontmatter.creator}</small>
                {' '}
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
          <RelatedPost />
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            creator
          }
        }
      }
    }
  }
`
