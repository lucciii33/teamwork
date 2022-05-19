import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PatienLandingPage } from "./patienlandingpage";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="">
	<Link to="/patienlandingpage"><button>patien landing page</button></Link>
	<Link to="/singup"><button>sing up</button></Link>
	<Link to="/practitionerCategories"><button>practitione rCategories</button></Link>

	</div>
);
