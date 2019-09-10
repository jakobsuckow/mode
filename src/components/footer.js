import React from "react"

const footerStyle = {
    width: '100%',
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(rgba(2,0,36,0) 0%, rgba(1,0,255,1) 100%)',
    height: '400px',
    position: 'relative',
    bottom: 0,
    textAlign: 'center'
}



const Footer = () => {
    return(
        <footer style={footerStyle}>
             
            <h2>Hi, this is a Footer</h2>
            <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

        </footer>
       
    )
}

export default Footer 