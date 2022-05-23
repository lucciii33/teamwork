import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { MDBInput } from 'mdb-react-ui-kit';
import logo from "../../img/logoname.png";
import vector from "../../img/modal.png";

import {
	MDBBtn,
	MDBModal,
	MDBModalDialog,
	MDBModalContent,
	MDBModalHeader,
	MDBModalTitle,
	MDBModalBody,
	MDBModalFooter,
} from 'mdb-react-ui-kit';

export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [centredModal, setCentredModal] = useState(false);
	const toggleShow = () => setCentredModal(!centredModal);
	return (

		<div className="signupGradient">
			{/* /////// singUpGradient control padding */}
			<div className="bgwhite2">

				{/* /////// first part logo and icon*/}
				<div className="p-3">
					<img src={logo} className="logosingup"></img>
				</div>

				{/* /////// second part titles*/}

				<div className="text-center">
					<h2 className="titlesingup">Practitioner Log In</h2>
					<p className="titlesingup">Don’t have an account? Click here to Sign Up</p>
				</div>

				{/* /////// third part inputs*/}

				<div className="d-grid justify-content-center m-1">
					<div>
						<label className="labelsingup text-muted">Username</label>
						<MDBInput id='form1' type='text' />
					</div>


					<div>
						<label className="labelsingup text-muted">Password</label>
						<MDBInput id='form1' type='Password' />
					</div>

					<button className='buttonmainpage col-sm m-5'>
							LOG IN
					</button>
				</div>
			</div>
		</div>
	);
};







Login.propTypes = {
	match: PropTypes.object
};
