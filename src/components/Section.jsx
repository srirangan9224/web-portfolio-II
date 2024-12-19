import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Section extends React.Component{
    constructor(props){
        super()
        this.state = {
            display: props.display,
            content: props.content,
            title: props.title,
        }
    }
    
    render(){
        return(
            <>
            <section class={this.props.title} style={{ display: this.props.display}}>
            <h2>{this.props.title}</h2>
            <hr/>
            <p>{this.props.content}</p>
            </section>
            </>
        );
    }


}

export default Section;