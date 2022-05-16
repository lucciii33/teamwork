import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../img/imagepatien.png";
import { Context } from "../store/appContext";
import { MDBBtn } from 'mdb-react-ui-kit';



import "../../styles/demo.css";

export const PatienLandingPage = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="">
			<div className="bgpurple">
				<div className="intro">

					<h1 className="p-4">We’re so glad you’re here. </h1>
					<h4 className="p-0">Elana is changing a generation of women’s health, putting you in control <br/>
					 of managing your pelvic health, how, and when, it suits you.</h4>
				</div>
			</div>
			<div className="d-flex">
				<div>
					<img src={image}></img>
				</div>
				<div className="m-auto">
					<h3 className="text-center title1">Health providers in Elana include:</h3>
					<ul type="none" className="list">
						<li>Yoga Instructors</li>
						<li>Pilates Instructors</li>
						<li>Physical Therapy</li>
						<li>Pain Management</li>
						<li>Health Coach</li>
						<li>Gynecologist</li>
						<li>and more!</li>
					</ul>
					<div>

						<button className='buttonmainpage'>
							BROWSE PRACTITIONERS
						</button>
					</div>
				</div>
			</div>
			<div className="bggrey">
				<div className="text-center p-3 title1">

				<h4 className="pt-4">Stay in the know with our newsletter.</h4>
				<h4>Get updates and the latest on pelvic care delivered to your inbox.</h4>
				</div>
				<div className="input-group p-0 d-flex justify-content-center">
					<div className="active-purple-4 mb-2 d-flex">
						<div className="input-group md-form form-sm form-2 pl-0 pb-2">
							<input className="form-control my-0 py-1 red-border" type="text" placeholder="Enter your email" aria-label="Search" />
							<div className="input-group-append">
								<span className="" id="basic-text1">
									<button className='buttonmainpage' color='secondary'>
									Stay in the know
									</button>
								</span>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};