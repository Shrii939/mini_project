import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import {handleClick, detail_link  } from 'react'
function Donate() {
    const divStyle = {
        maxWidth: "103%",
        paddingTop:"50px",
        paddingLeft: "33%",
        paddingRight: "30%"
    };
    const divv = {
        padding: 7,
    };
    const btnn = {
        // textalign : "center",
        marginTop: "15px",
        marginLeft: 120,
    };

        // const navigate = useNavigate();
        // const goToLoginPage = () => navigate("./success");
         function success() {
            alert('we have send request to all the NGOs near you.. You will be contacted soon');
          }


    return (
        <div classNameName="">
            <form style={divStyle}>
                <div>
                    <div classNameName="" style={divv}>
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div >
                    <div classNameName="" style={divv}>
                        <label for="exampleInputEmail1" className="form-label">contact</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                    </div>
                    <div classNameName="" style={divv}>
                        <label for="exampleInputEmail1" className="form-label">Address</label>
                        <textarea class="form-control" aria-label="With textarea" required></textarea>
                    </div>
                    <div classNameName='' style={divv}>
                        <label for="exampleInputEmail1" className="form-label" required>Food Type</label>
                    </div>
                    <div class="dropdown">
                        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            --select--
                        </a>

                        <ul class="dropdown-menu" style={divv} aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Vegetables</a></li>
                            <li><a class="dropdown-item" href="#">Rice</a></li>
                            <li><a class="dropdown-item" href="#">Veg Cooked food</a></li>
                            <li><a class="dropdown-item" href="#">Fruits</a></li>
                            <li><a class="dropdown-item" href="#">Grains, legumes, nuts</a></li>
                            <li><a class="dropdown-item" href="#">Meat and poultry</a></li>
                            <li><a class="dropdown-item" href="#">Meat and poultry</a></li>
                            <li><a class="dropdown-item" href="#">Fish and seafood</a></li>
                            <li><a class="dropdown-item" href="#">Dairy foods</a></li>
                            <li><a class="dropdown-item" href="#">Eggs</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        <div class="input-group" style={divv}>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile02" />
                            </div>
                        </div>
                    </div>

                    {/* <div className="div">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div> */}
                    {/* <div className="form-check"  style={divv}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                    <button type="submit" style={btnn} className="btn btn-primary" onClick={success}>Submit</button>
                    {/* <button type = "submit" style={btnn} className="btn btn-primary"
                     onClick={() => handleClick(detail_link)}>
                    {"Detailed Map"}
                </button> */}
                </div>
            </form>

        </div>


        // <>
        //     <div className='styled'>
        //         <form className="row g-3 needs-validation" novalidate>
        //             <div className="col-md-4">
        //                 <label for="validationCustom01" className="form-label">First name</label>
        //                 <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
        //                 <div className="valid-feedback">
        //                     Looks good!
        //                 </div>
        //             </div>
        //             <div className="col-md-4">
        //                 <label for="validationCustom02" className="form-label">Last name</label>
        //                 <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
        //                 <div className="valid-feedback">
        //                     Looks good!
        //                 </div>
        //             </div>
        //             <div className="col-md-4">
        //                 <label for="validationCustomUsername" className="form-label">Username</label>
        //                 <div className="input-group has-validation">
        //                     <span className="input-group-text" id="inputGroupPrepend">@</span>
        //                     <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
        //                     <div className="invalid-feedback">
        //                         Please choose a username.
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-md-6">
        //                 <label for="validationCustom03" className="form-label">City</label>
        //                 <input type="text" className="form-control" id="validationCustom03" required />
        //                 <div className="invalid-feedback">
        //                     Please provide a valid city.
        //                 </div>
        //             </div>
        //             <div className="col-md-3">
        //                 <label for="validationCustom04" className="form-label">State</label>
        //                 <select className="form-select" id="validationCustom04" required>
        //                     <option selected disabled value="">Choose...</option>
        //                     <option>...</option>
        //                 </select>
        //                 <div className="invalid-feedback">
        //                     Please select a valid state.inputGroupFile02
        //                 </div>
        //             </div>
        //             <div className="col-md-3">
        //                 <label for="validationCustom05" className="form-label">Zip</label>
        //                 <input type="text" className="form-control" id="validationCustom05" required />
        //                 <div className="invalid-feedback">
        //                     Please provide a valid zip.
        //                 </div>
        //             </div>
        //             <div className="col-12">
        //                 <div className="form-check">
        //                     <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
        //                     <label className="form-check-label" for="invalidCheck">
        //                         Agree to terms and conditions
        //                     </label>
        //                     <div className="invalid-feedback">
        //                         You must agree before submitting.
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="col-12">
        //                 <button className="btn btn-primary" type="submit">Submit form</button>
        //             </div>
        //         </form>
        //     </div>
        // </>

    );
}

export default Donate