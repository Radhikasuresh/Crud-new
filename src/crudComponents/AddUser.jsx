import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function AddUser({UpdateUser,currentUser,index,Adduser}) {
  // console.log(currentUser);

  const [user,setUser]=useState(currentUser?currentUser:{ 
    name:'',
  gender:'',
  email:'',
attendance:'',
  password:'',
  address:''})

const handlechange = (e)=>{
  setUser (
    {...user,[e.target.name]:e.target.value}
    )
  
 

}



  return (
    <>
      <div className="container-fluid p-3 bg-dark text-white" id="adduser">
        <div className="row">
          <div className="col col-sm-4 text-danger">
            <Link to="/home" className="btn btn-success">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col">
            <form className="row g-3" >
              <div className="col-md-6 d-flex gap-2 align-items-center">
                <label htmlFor="inputName" className="form-label badge bg-secondary py-2 ">
                  Name:
                </label><br></br>
                <input type="text" 
                placeholder="Enter Name" className="form-control" id="inputName"
                name="name" value={user.name} onChange={handlechange} required />
              
              </div><br></br>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                  Email:
                </label><br></br>
                
                <input type="email"  placeholder="Enter Email" className="form-control" id="inputEmail4" 
                  name="email" value={user.email} onChange={handlechange} required />
              </div><br/>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputEmail4" className="form-label badge bg-secondary py-2">
                  Attendance:
                </label><br></br>
                
                <input type="att"  placeholder="Enter Attendance" className="form-control" id="inputatt" 
                  name="attendance" value={user.attendance} onChange={handlechange} required />
              </div><br/>
              <div className="col-md-6 d-flex gap-2">
                <label htmlFor="inputPassword4" className="form-label badge bg-secondary py-2">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  name="password"
                  placeholder="Enter Password"
                  value={user.password}
                  onChange={handlechange}
                  required
                />
              </div><br></br>
              <div className="col-12 d-flex gap-2">
                <label htmlFor="inputAddress" className="form-label badge bg-secondary py-2">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Enter the Address"
                  name="address"
                  value={user.address}
                  onChange={handlechange}
                />
              </div>

              <div className="col-3 mx-auto btn-group">
                <button onClick={(e)=>{ e.preventDefault();Adduser(user);}}
                 className="btn btn-primary">
                  ADD
                </button>
                
               { currentUser?
                <button className="btn btn-warning" onClick={(e)=>{e.preventDefault();UpdateUser(user,index);}}>
                  Update
                </button>:<></>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUser;