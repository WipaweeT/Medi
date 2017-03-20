import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component{

	constructor(props) {
		super(props);

		this.state = {
			search:'',
			contacts: props.contacts
		};
	}
	updateSearch(event){
		this.setState({search: event.target.value.substr(0,20)});

	}
	addContact(event){
    	event.preventDefault();
  
    	let name = this.refs.name.value;
    	let date = this.refs.date.value;
    	let web = this.refs.web.value;
    	let typemed = this.refs.typemed.value;
    	let id = Math.floor((Math.random()*100)+1);
    	this.setState({
      		contacts: this.state.contacts.concat({id, name, date,typemed, web})
    })
    	this.refs.name.value ='';
    	this.refs.date.value ='';
    	this.refs.web.value ='';
    	this.refs.typemed.value ='';
	}

	render(){
		let filteredContacts = this.state.contacts.filter(
				(contact) => {
					return contact.name.toLowerCase().indexOf(this.state.search) !== -1;
				}
			);
		return(
			<div>
			<div className="serchBox">
				<input className="search" type="text"
					placeholder="Search"
				 	value={this.state.search}
				 	onChange={this.updateSearch.bind(this)}/> 
			 </div>

			<form onSubmit={this.addContact.bind(this)}>
			<div>
				<table className="center">
					<tbody>
						<tr>
						<td className="text-center">ชื่อยา </td>
						<td ><input type="text" ref="name" className="b-radius"/></td>
	                	<td className="text-center">ช่วงเวลาการกิน(เช้า,กลางวัน,เย็น) </td>
	            		<td><input type="text" ref="date" className="b-radius" /></td>
	            		<td className="text-center">ประเภทยา (น้ำ,เม็ด) </td>
	            		<td><input type="text" ref="typemed" className="b-radius" /></td>		
	                	<td className="text-center">Medicine url </td>
	            		<td><input type="text" ref="web" className="b-radius" /></td>
	            		<td><button className="button-class" type="summit">Add</button></td>
	            		</tr>
	            	</tbody>
            	</table>
            	
            </div>
            </form>
			<ul className="marginna">
				{filteredContacts.map((contact)=> {
					return <Contact contact={contact} key={contact.id}/>

				})}	
			</ul>	

				 {this.state.numValue}
			</div>
			)
	}
}
export default ContactsList