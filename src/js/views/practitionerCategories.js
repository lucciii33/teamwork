import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import bodyimage from "../../img/categories.png";
import { Context } from "../store/appContext";
import { MDBBtn } from 'mdb-react-ui-kit';
import "../../styles/demo.css";
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';




export const PractitionerCategories = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="">
            <div className="p-4 iconback"><i className="fas fa-angle-left"></i><span className="p-2">back</span></div>
            <div className="text-center">
                <h2 className="titlepractitioner">Browse Practitioner Categories</h2>
                <p className="textpractitioner">Choose a category from below that best matches your current symptoms and needs. <br />
                    This will assist you in finding a provider who can help you. </p>
            </div>


            <div className="purplecards">
                {/* fisrt card here */}



                <MDBContainer>
                    <MDBRow>
                        <MDBCol size='md' className='ms-5 left '>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Bladder & Bowel Incontinence</h6>
                                    <p className="paragraphbox">Accidental leakage of <br /> bodily fluids and waste</p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='col-example'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Bladder Pain</h6>
                                    <p className="paragraphbox">Pain or pressure in the <br/>lower abdomen area and bladder</p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='me-5'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Constipation</h6>
                                    <p className="paragraphbox">Straining pain during <br /> bowel movements </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='ms-5 left '>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Endometriosis</h6>
                                    <p className="paragraphbox">Pain that occurs especially<br /> during menstrual periods</p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='col-example'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Menopause & Perimenopause</h6>
                                    <p className="paragraphbox">Irregular or pause of <br />  menstrual cycles </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='me-5'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Painful Sex</h6>
                                    <p className="paragraphbox">Recurrent genital pain that<br/> occurs just before, during, or after sex  </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='ms-5 left '>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Pelvic Organ Prolapse</h6>
                                    <p className="paragraphbox">Drooping of pelvic organs <br/> such as  the bladder, uterus, vagina, etc. </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='col-example'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Postpartum <br/> Recovery</h6>
                                    <p className="paragraphbox">Recovery period after<br/> pregnancy/childbirth </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='me-5'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Proactive Pelvic <br/> Care</h6>
                                    <p className="paragraphbox">Methods to actively take <br/> care of your pelvic health </p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='ms-5 left '>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Separated Abs</h6>
                                    <p className="paragraphbox">Condition when abdominal <br/> muscles separate during pregnancy bodily fluids and waste</p>
                                </div>
                            </div>
                        </MDBCol>
                        <MDBCol size='md' className='me-5'>
                            <div className="purpleboxes d-flex">
                                <img src={bodyimage}></img>
                                <div className="d-block information">
                                    <h6 className="titlebox">Vaginoplasty Prep <br/> & Recovery</h6>
                                    <p className="paragraphbox">Prepping and recovering<br/> from the repair of a vagina</p>
                                </div>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>


    );
};
