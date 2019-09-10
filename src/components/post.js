import React from 'react'
import Img from "gatsby-image"

import {graphql, useStaticQuery} from 'gatsby'
import Footer from '../components/footer'

const wrapperStyle = {
  marginTop: 0
}


let checkBlank = value => (value ? value : `--`)



const Post = () => {
  const item = useStaticQuery(graphql`
  query MyQuery {
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
              childImageSharp {
                fluid(background: "#ee757b") {
                  src
                  base64
                }
              }
            }
          }
        }
      }
    }
  }

  `)
  return (
    
   <div className="wrapper" style={wrapperStyle}>
     {item.allAirtable.nodes.map(node => (
       <div key={node.recordId} className="post">
         <div className="text">
         <h1>{node.data.Name}</h1>
         <p>{node.data.Notes}</p>
         <p>Current Price: {checkBlank(node.data.Price)}</p>
         <p style={{display: node.data.Link ? "block" : "none"}}>Available <a href="{node.data.Link}">here</a></p>
         </div>
         <img src={node.data.Attachments.raw[0].url} alt="image Description"/>
         {/* <Img 
         fluid={node.data.Attachments.localFiles[0].childImageSharp.fluid}
         backgroundColor="ee757b"
         title="text"
         /> */}
         
       </div>
     ) 
     )}
    <Footer />
   </div>
  
  )


}



export default Post

