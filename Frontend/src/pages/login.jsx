export default function LoginPage() {
    return (
      <div className="flex h-screen">
        {/* Left Section (Login) */}
        <div className="w-1/3 bg-white flex flex-col justify-center items-center p-10 shadow-lg rounded-lg">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 20v-9m0 0l-10-5m10 5l10-5"></path>
              </svg>
            </div>
          </div>
  
          <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
  
          {/* Social Login */}
          <div className="flex space-x-4 mb-6">
            <button className="flex items-center border border-indigo-500 px-4 py-2 rounded-lg shadow bg-transparent text-indigo-500 hover:bg-indigo-500 hover:text-white transition">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Google
            </button>
            <button className="flex items-center border border-blue-500 px-4 py-2 rounded-lg shadow bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white transition">
              <img src="https://www.svgrepo.com/show/303114/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
              Facebook
            </button>
          </div>
  
          <div className="w-full border-b mb-4"></div>
  
          {/* Input Fields */}
          <div className="w-full">
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="mail@example.com"
              className="w-full px-4 py-2 border border-indigo-500 rounded-lg mt-2 focus:ring-2 focus:ring-indigo-300"
            />
  
            <label className="block text-gray-700 mt-4">Password</label>
            <input
              type="password"
              placeholder="Min. 8 characters"
              className="w-full px-4 py-2 border border-indigo-500 rounded-lg mt-2 focus:ring-2 focus:ring-indigo-300"
            />
          </div>
  
          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center w-full mt-4 text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-indigo-500">Reset password?</a>
          </div>
  
          {/* Sign In Button */}
          <button className="w-full bg-indigo-500 text-white py-2 rounded-lg mt-6 hover:bg-indigo-600 transition">
            Sign In
          </button>
  
          {/* Sign Up Link */}
          <p className="mt-4 text-sm">
            Don't have an account? <a href="#" className="text-indigo-500">New Account</a>
          </p>
        </div>
  
        {/* Right Section (Illustration) */}
        <div className="w-2/3 flex justify-center items-center bg-gray-100">
          <img
            src="/images/login.jpg"
            alt="Illustration"
            className="w-2/3"
          />
        </div>
      </div>
    );
  }
  