import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

function Login(props) {
  const [username, onNameChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [myData, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5001/users/").then((response) => {
      setData(response.data);
      console.log(myData);
    });
  }, []);

  const nameChange = (e) => {
    onNameChange(e.target.value);
    console.log("username", username);
  };

  const passwordChange = (e) => {
    onPasswordChange(e.target.value);
    console.log("passwornd", password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("mydata", myData);
    let a = myData.find((x) => {
      console.log("check", x.email, username, x.email == username);
      return x.email === username;
    });
    if (a === undefined) {
      Swal.fire({
        icon: "error",
        title: "Hatalı Giriş",
        text: "Kullanıcı adınızı Kontrol edin!",
      });
    } else if (a.password === password) {
      window.location = "/homepage/" + a._id;
    } else {
      Swal.fire({
        icon: "error",
        title: "Hatalı Giriş",
        text: "Parolanızı adını Kontrol edin!",
      });
    }
    console.log(username, password);
    console.log(a);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={nameChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                onChange={passwordChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  to="/create"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign Up!
                </Link>
              </p>
            </div>
          </div>

          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            type="button"
            className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
          />

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={onSubmit}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
