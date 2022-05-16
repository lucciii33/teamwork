import React from "react";
import {
MDBContainer,
MDBNavbar,
MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import logo from "../../img/logoname.png";


export const Navbar = () => {
	return (
		<MDBNavbar light bgColor='light' className="d-flex">
		  <MDBContainer fluid>
			<img src={logo} className="logo"></img>
			<form className='d-flex w-auto form'>
			  <Link to='/' className="link"><p>Individuals</p></Link>
			  <Link to='/' className="link"><p>Practitioner</p></Link>
			  <Link to='/' className="link"><p>About</p></Link>
			  <Link to='/' className="link"><p>Browse</p></Link>
			  <Link to='/'className="link"><p>Join</p></Link>
			  <Link to='/'className="link"><p>Login</p></Link>
			</form>
		  </MDBContainer>
		</MDBNavbar>
	  );
}
	
