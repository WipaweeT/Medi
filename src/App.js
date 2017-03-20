import React from 'react';
import ContactsList from './ContactsList';
import './index.css';

class App extends React.Component {

  render() {

    return (

      <div className="collapse navbar-collapse topMenu" id="bs-example-navbar-collapse-1">
       <div className="Red">
            <h1 className="text">Record Medicine</h1>
        </div>

       <ContactsList contacts={this.props.contacts} />
		
      </div>
    )
  }
}
export default App


