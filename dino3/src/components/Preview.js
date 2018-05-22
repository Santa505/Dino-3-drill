import React from 'react'



class Preview extends React.Component {
   
 

    render() {
        
        return (
            <section id="application-preview" className= {this.props.className}>
            {this.props.applicationText}
            </section>
            
              

        )
    }
}

export default Preview