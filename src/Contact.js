import React from 'react';

class Contact extends React.Component{


	render(){
		
		return(
			<div>
				<h1 className="text1">
					
					
					ยา : <a href={this.props.contact.web} target="_blank">{this.props.contact.name}</a>
					<br/>เวลาการกิน : {this.props.contact.date}
					<br/>ประเภท : {this.props.contact.typemed}

				</h1>
			</div>
		)
	}
}
export default Contact;