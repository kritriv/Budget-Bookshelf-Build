import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contects/AuthProvider";
import googleLogo from "../../assets/google-logo.svg";
import books from "../../assets/books.png";

const Login = () => {
  const { login, loginwithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        // alert("Login successfull !!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  //sign up using google account
  const handleRegister = () => {
    loginwithGoogle()
      .then((result) => {
        const user = result.user;
        alert("Sign up successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="py-10 px-4 lg:px-24 bg-cyan-50  flex items-center">
      {/*Login section */}
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-20">
        <div className="md:w-1/2 space-y-8 h-full">
          <div className="md:w-4/5">
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div className="max-w-md mx-auto">
                <div>
                  <h1 className="text-2xl font-semibold">Login Form</h1>
                </div>
                <div className="divide-y divide-gray-200">
                  <form
                    onSubmit={handleLogin}
                    className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                  >
                    <div className="relative">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="relative">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="peer  h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                      />
                    </div>
                    {error ? (
                      <p className="text-red-600 text-base">
                        {" "}
                        Email or Password is not correct
                      </p>
                    ) : (
                      ""
                    )}
                    <p>
                      If you haven't account.Please{" "}
                      <Link to="/sign-up" className="text-blue-600 underline">
                        Sign Up{" "}
                      </Link>{" "}
                    </p>
                    <div className="relative">
                      <button className="bg-cyan-700 text-white rounded-md px-4 py-1">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <hr />
                <div className="flex w-full items-center flex-col mt-5 gap-3">
                  <button onClick={handleRegister} className="block">
                    <img
                      src={googleLogo}
                      alt=""
                      className="w-12 h-12 inline-block"
                    />
                    Login with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="md:w-1/2">
          <img src={books} alt="" className="rounded md:w-10/12" />
        </div>
      </div>
    </div>
  );
};

export default Login;
