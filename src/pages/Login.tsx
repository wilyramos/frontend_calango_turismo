import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="flex items-center justify-center p-6 bg-gray-100">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              required
              className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
