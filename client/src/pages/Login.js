import { useEffect, useState } from "react";
import { loginUser } from "../actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import "./Register.css";

const Login = ({ history }) => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(info));
  };

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/feed");
    }
    if (auth.error) {
      setErrors(auth.error);
      //   setTimeout(() => {
      //     setErrors(null);
      //   }, 5000);
    }
  }, [auth.isAuth, auth.error]);
  useEffect(() => {
    setErrors(null)
  }, [])
  return (
    // <form onSubmit={login}>
    //   <div>
    //     <label>Email</label>
    //     <input
    //       onFocus={() => setErrors(null)}
    //       type="text"
    //       name="email"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <label>Password</label>
    //     <input type="password" name="password" onChange={handleChange} />
    //   </div>
    //   {errors && errors.map((el) => <h1>{el.msg}</h1>)}
    //   <button type="submit">Login</button>
    // </form>
    <div className="color espace">
     
      <div className="row no-gutters">
        <div className="col-md-6 no-gutters">
         
          <Form
            className=" inline leftside justify-content-center align-items-center  left login  flexdis "
            onSubmit={login}
          >
            <div className="log">
              <h4 className="create">Je me connecte</h4>
              <Form className="label">Adresse e-mail *</Form>
              <Form.Control
                className="input"
                onFocus={() => setErrors(null)}
                type="search"
                type="text"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="log">
              <Form className="label">Votre mot de passe *</Form>
              <Form.Control
                className="input"
                type="search"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            {errors &&
              (typeof errors === "string" ? (
                <p className="error1">{errors}</p>
              ) : (
                errors.map((el) => <p className="error1">{el.msg}</p>)
              ))}
            {/* <Button className="btn btn-md btn-secondary buttonmedia" type="submit">
              CONNEXION
            </Button> */}
            <Button className="buttoncnx" variant="primary" type="submit">
              Connexion
            </Button>
          </Form>
        </div>
        <img src="./images/login-image.jpg" className="displayim" />
      </div>
    </div>
  );
};

export default Login;
