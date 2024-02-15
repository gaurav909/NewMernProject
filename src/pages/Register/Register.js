import React, { useEffect, useState } from "react";
import "./Register.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  console.log(inputData);

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  //set input value

  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  //status set

  const setStatusValue = (e) => {
    setStatus(e.value.status);
  };

  //profile set

  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };
  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);
  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  //submituser Data

  const submitUserData = (e) => {
    e.preventDefault();

    const { fname, lname, email, mobile, gender, location } = inputData;

    if (fname === "") {
      toast.error("First name is required");
    } else if (lname === "") {
      toast.error("Last name is required");
    } else if (email === "") {
      toast.error("Email is required");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email");
    } else if (mobile === "") {
      toast.error("Mobile Number is Required");
    } else if (mobile.length > 10) {
      toast.error("enter valid mobile");
    } else if (gender === "") {
      toast.error("Gender is Required");
    } else if (status === "") {
      toast.error("status is Required");
    }else if (image === "") {
      toast.error("Profile  is Required");
    }else if(location===""){
      toast.error("Location  is Required");
    }else{
      toast.success("Registration is Succesfully done");
    }
  };
  console.log(inputData)
  return (
    <div className="container">
      <h2 className="text-center mt-1">Register Your Details</h2>
      <Card className="shadow mt-3 p-3">
        <div className="profile_div text-center">
          <img src={preview ? preview : "/man.png"} alt="img" />
        </div>

        <Form>
          <Row>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                name="fname"
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                name="lname"
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                name="email"
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Mobile no"
                name="mobile"
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Gender</Form.Label>
              <Form.Check // prettier-ignore
                type={"radio"}
                label={`Male`}
                name="gender"
                value={"Male"}
                onChange={setInputValue}
              />
              <Form.Check // prettier-ignore
                type={"radio"}
                label={`Female`}
                name="gender"
                value={"Female"}
                onChange={setInputValue}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Status</Form.Label>
              <Select options={options} onChange={setStatusValue} />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Select Your Profile</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select Yor profile"
                name="user_profile"
                onChange={setProfile}
              />
            </Form.Group>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Label>Enter Your Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Location"
                name="location"
                onChange={setInputValue}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submitUserData}>
              Submit
            </Button>
          </Row>
        </Form>
      </Card>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Register;
