import React from "react"
import Preview from "./Preview"

class InputForm extends React.Component{
    state = {
        applicationText: '',
        submitted: false,
        preview: false
    }
    handleUserInput = (event) => {
        this.setState ({[event.target.name]: event.target.value})
    }
    resetForm = () => {
        this.setState ({
           applicationText: '',
           submitted: false
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault()
        this.setState ({
            // applicationText: '',
            submitted: true
         })
        
    }
    handelClick = (event) => {
        event.preventDefault()
        this.setState ({
        preview: true
         })
       
    }

    render(){
        const isSubmitted = this.state.submitted
        const message = isSubmitted ? (<p id="message">&nbsp; Your application was submited!</p>): <p></p>
        const className = this.state.preview ? '':'hidden'
        return(
            <section>
            <form id="application-input" onSubmit={this.handleFormSubmit}> 
            <label>Apply Here: </label>
            <textarea id="application-text" value={this.state.applicationText}  onChange={this.handleUserInput} name='applicationText' rows="8" cols="100"></textarea>
            <input id="submit" type="submit" value="Submit" />
          </form>
            {message}
            
             <button id="preview-toggle" onClick= {this.handelClick}>Show Preview</button>
             <Preview className={className} applicationText={this.state.applicationText} />
            </section>
    )
    }
}  
   
  
  


export default InputForm