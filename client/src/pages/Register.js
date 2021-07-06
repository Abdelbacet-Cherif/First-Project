import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../actions/authActions";
// import TextField from "@material-ui/core/TextField";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./Register.css";
import Select from "../components/Select";

const Register = ({ history }) => {
  const [infoRegister, setInfoRegister] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    setErrors(null);
  }, []);

  useEffect(() => {
    if (auth.error) {
      setErrors(auth.error);
      //   setTimeout(() => {
      //     setErrors(null);
      //   }, 5000);
    }
    if (auth.isAuth) {
      history.push("/feed");
    }
  }, [auth.isAuth, auth.error]);
  useEffect(() => {
    setErrors(null);
  }, []);

  const handleChangeRegister = (e) => {
    setInfoRegister({ ...infoRegister, [e.target.name]: e.target.value });
  };
  const registerNow = (e) => {
    e.preventDefault();
    dispatch(registerUser(infoRegister));
  };
  // handle login
  const [infoLogin, setInfoLogin] = useState({
    email: "",
    password: "",
  });
  const handleChangeLogin = (e) => {
    setInfoLogin({ ...infoLogin, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(infoLogin));
  };
  return (
    // <div className="row no-gutters">
    //   <div className="col-md-6 no-gutters">
    //     <div className="leftside d-flex justify-content-center align-items-center "> hello</div>
    //   </div>
    //   <div className="col-md-6 no-gutters">
    //     <div className="rightside d-flex justify-content-center align-items-center"> i'm here</div>
    //   </div>
    // </div>
    <div>
      <p className="obligation">
        La création d'un Compte est GRATUITE et obligatoire pour pouvoir déposer
        vos annonces sur Animals.
      </p>
      <div className="color">
      
        <div className="row no-gutters">
          <div className="col-md-6 no-gutters">
            <Form
              className="leftside justify-content-center align-items-center  left login "
              onSubmit={login}
            >
              <div className="log">
                <h4 className="create">Je me connecte</h4>
                <Form className="label">Email *</Form>
                <Form.Control
                  className="input"
                  onFocus={() => setErrors(null)}
                  type="search"
                  type="text"
                  name="email"
                  onChange={handleChangeLogin}
                />
              </div>
              <div className="log">
                <Form className="label"> Votre mot de passe * </Form>
                <Form.Control
                  className="input"
                  type="search"
                  type="password"
                  name="password"
                  onChange={handleChangeLogin}
                />
              </div>
              {/*errors && errors.map((el) => <p className="error1">{el.msg}</p>)*/}
              {/* {errors && <p className="error1">{errors[2].msg}</p>}
              {errors && <p className="error1">{errors[4].msg}</p>} */}

              {/* <button className="btn btn-md btn-secondary" type="submit">
                ME CONNECTER
              </button> */}
              <Button className="buttoncnx" variant="primary" type="submit">
                Me connecter
              </Button>
            </Form>
          </div>
          <div className="col-md-6 no-gutters">
            <Form
              className="all"
              className="rightside justify-content-center align-items-center right"
              onSubmit={registerNow}
            >
              <div className="form">
                {/* <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control className="form" type="email" placeholder="Enter email" />

          </Form.Group> */}
                <h4 className="create">Je crée mon compte</h4>
                <Form className="label">Prénom *</Form>
                <Form.Control
                  className="input"
                  name="firstname"
                  type="text"
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="form">
                <Form className="label">Nom *</Form>
                <Form.Control
                  className="input"
                  type="text"
                  type="search"
                  name="lastname"
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="form">
                <Form className="label">N° de téléphone mobile *</Form>
                <Form.Control
                  className="input"
                  type="search"
                  type="text"
                  name="phone"
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="form">
                <Form className="label">Adresse e-mail *</Form>
                <Form.Control
                  className="input"
                  type="search"
                  type="text"
                  name="email"
                  onChange={handleChangeRegister}
                />
              </div>
              <div className="form">
                <Form className="label">Créez votre mot de passe *</Form>
                <Form.Control
                  className="input"
                  type="search"
                  type="password"
                  name="password"
                  onChange={handleChangeRegister}
                />
              </div>
              {errors && errors.map((el) => <p className="error1">{el.msg}</p>)}
              {/* <button className="btn btn-md btn-secondary " type="submit">
                Créer mon compte
              </button> */}
              <Button className="buttoncnx" variant="primary" type="submit">
                Créer mon compte
              </Button>
            </Form>
            {/* <Select/> */}
             </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
