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

export const SingUp = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [centredModal, setCentredModal] = useState(false);
	const toggleShow = () => setCentredModal(!centredModal);
	return (
		<div className="signupGradient pt-1 pb-1">
			<div className="bgwhite m-auto">

				{/* /////// first part logo and icon*/}
				<div className="d-flex justify-content-between p-2 pb-2">
					<img src={logo} className="logosingup"></img>
					<div><i class="fas fa-times"></i></div>
				</div>

				{/* /////// second part titles*/}

				<div className="text-center">
					<h2 className="titlesingup">Welcome to Elana</h2>
					<p className="titlesingup">Already have an account? Click <a>here</a> to login</p>
				</div>

				{/* /////// third part inputs*/}

				<div className="d-flex justify-content-evenly m-2">
					<div>
						<label className="labelsingup text-muted">First Name</label>
						<MDBInput id='form1' type='text' />
					</div>


					<div>
						<label className="labelsingup text-muted">Last Name</label>
						<MDBInput id='form1' type='text' />
					</div>
				</div>
				<div className="d-flex justify-content-evenly m-2">
					<div>
						<label className="labelsingup text-muted">Practice Name</label>
						<MDBInput id='form1' type='text' />
					</div>


					<div>
						<label className="labelsingup text-muted">Practice Number</label>
						<MDBInput id='form1' type='text' />
					</div>
				</div>
				<div className="d-flex justify-content-evenly m-2">
					<div>
						<label className="labelsingup text-muted">Email (This will be your username)</label>
						<MDBInput id='form1' type='text' />
					</div>

					<div>
						<label className="labelsingup text-muted">Password</label>
						<MDBInput id='form1' type='password' />
					</div>

				</div>
				<div className=" inputdrop">
					<label className="labelsingup text-muted">Licensing credentials</label>
					<input type="text" class="form-control" aria-describedby="addon-wrapping"/>
				</div>
				<div className="inputdrop model">
					<label className="labelsingup text-muted">Area of Specialty</label>
					<div class="input-group">
						<select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
							<option className="text-muted">-select one-</option>
							<option value="1">Occupational Therapist (OT)</option>
							<option value="2">Pain Management Doctor</option>
							<option value="3">Pain Management Psychologist</option>
							<option value="3">Pelvic Health Physical Therapist</option>
						</select>
					</div>
				</div>

				{/* /////// fourth part checkbox*/}

				<div className="m-2 checkbox text-center">
					<input type="checkbox" className="checkbox-round m-2"></input>
					<span>By creating an account, you have read and agree to our <a>Terms</a> and <a>Privacy Policy</a></span>
				</div>

				{/* /////// fifth part button and modal*/}

				<div className="text-center model">
					<button onClick={toggleShow} className="buttonmainpage m-2 mb-5">CONTINUE</button>

					<MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
						<MDBModalDialog centered>
							<MDBModalContent>
								<MDBModalBody className="text-center">
									<img src={vector} className="logosingup"></img>
									<h1>Woohoo</h1>
									<p>Your registration is complete. Please, check your email for confirmation information.</p>
									<p>Next, let’s set up your profile.</p>
									<Link><button className="buttonmainpage">CREATE PROFILE</button></Link>
								</MDBModalBody>
							</MDBModalContent>
						</MDBModalDialog>
					</MDBModal>
				</div>
			</div>
		</div>
	);
};

SingUp.propTypes = {
	match: PropTypes.object
};
