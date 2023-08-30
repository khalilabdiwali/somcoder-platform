import React, { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with username and password
  };

  return (
    <div className="bg-slate-800 min-h-screen  flex items-center justify-center">
      <div className="bg-white w-[330px] rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-teal-500 mb-4">Log in</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-3 mr-3"
                onClick={handleShowPassword}
              >
                {showPassword ? (
                  <svg
                    className="fill-current h-4 w-4 text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.071 7.879a5 5 0 10-7.072 7.072 5 5 0 007.072-7.072zM15 10a5 5 0 11-10 0 5 5 0 0110 0zm-1.414-1.414a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="fill-current h-4 w-4 text-teal-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.32 9.917l1.414-1.414c.732-.732.732-1.92 0-2.652l-.88-.88a1.875 1.875 0 00-2.652 0L12.76 6.385a1.875 1.875 0 000 2.652l.88.88a.937.937 0 011.326 0l.88.88a.937.937 0 010 1.326l-1.414 1.414a.937.937 0 01-1.325 0l-.88-.88a2.813 2.813 0 010-3.978l1.414-1.414a2.813 2.813 0 013.978 0l.88.88a.937.937 0 001.326 0l.88-.88a2.813 2.813 0 010 3.978l-1.414 1.414a2.813 2.813 0 01-3.978 0l-.88-.88a.937.937 0 00-1.326 0z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M5.526 8.886A5.002 5.002cont.
                      0 0110 3c1.352 0 2.603.427 3.64 1.148l1.414-1.414A7.001 7.001 0 0010 1a7.002 7.002 0 00-4.95 2.05l1.414 1.414zM5.526 11.114a5.002 5.002 0 014.95 3.95l-1.414 1.414a7.001 7.001 0 00-6.172-4.95l1.414-1.414a5.002 5.002 0 013.222-1.414zM3.464 14.536A7.001 7.001 0 0010 19a7.002 7.002 0 004.95-2.05l-1.414-1.414a5.002 5.002 0 01-6.172-6.172l-1.414 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox text-teal-500"
              />
              <span className="ml-2 text-gray-700 font-bold">
                Remember me
              </span>
            </label>
          </div>
          <button
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;