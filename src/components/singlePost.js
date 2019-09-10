import React, { Component } from 'react'
import { graphql, useStaticQuery } from 'gatsby';


class singlePost extends React.Component {


    render() {
        let post = this.props.airtable;
        return (
          <div>
          {post.nodes.map(node => (
            <div key={node.recordId} className="singlePost">
              <h1>{node.data.Name}</h1>
            </div>
          ))}
          </div>
        )
    }

}

export default SinglePost;

export const pageQuery = graphql`
query singleQuery {
  allAirtable {
    nodes {
      data {
        Link
        Name
        Notes
        Price
        Attachments {
          raw {
            url
          }
          localFiles {
            absolutePath
            relativePath
          }
        }
      }
    }
  }
}



`