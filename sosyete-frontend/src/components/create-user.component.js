import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function CreateUser(props) {
  const [username, onUsernameChange] = useState("");
  const [password, onPasswordChange] = useState("");
  const [email, onEmailChange] = useState("");

  const usernameChange = (e) => {
    onUsernameChange(e.target.value);
    console.log(username);
  };
  const emailChange = (e) => {
    onEmailChange(e.target.value);
    console.log(email);
  };

  const passwordChange = (e) => {
    onPasswordChange(e.target.value);
    console.log(password);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      email: email,
    };
    console.log(user);

    axios
      .post("http://localhost:5001/users/add", user)
      .then((res) => Swal.fire("Kullanıcı Oluşturuldu. Hoşgeldiniz."));
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign Up An Account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                UserName
              </label>
              <input
                id=""
                name=""
                type=""
                autoComplete=""
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                onChange={usernameChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete=""
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                onChange={emailChange}
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

            <div>
              <label htmlFor="password" className="sr-only">
                Password Repeat
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password Repeat"
                onChange={passwordChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link
                to="/"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already Have An Account
              </Link>
            </div>
          </div>

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
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
