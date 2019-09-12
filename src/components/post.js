import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Footer from '../components/footer'

let checkBlank = value => (value ? value : `--`)

const Post = () => {
  const item = useStaticQuery(graphql`
  query postQuery {
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
          }
        }
      }
    }
}

  `)
  return (
    
   <div className="wrapper">
     {item.allAirtable.nodes.map(node => (
       <div key={node.recordId} className="post">
         <div className="text">
         <h1>{node.data.Name}</h1>
         <p>{node.data.Notes}</p>
         <p>Current Price: {checkBlank(node.data.Price)}</p>
         <p style={{display: node.data.Link ? "block" : "none"}}>Available <a href="{node.data.Link}">here</a></p>
         </div>
         <img src={node.data.Attachments.raw[0].url} alt="" />
       
         
       </div>
     ) 
     )}
    <Footer />
   </div>
  
  )


}



export default Post

