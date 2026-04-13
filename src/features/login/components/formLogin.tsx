import Link from "next/link";

const FormLogin = () => {
  return (
    <>
      <div className="mt-9 mb-6 flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="text-md text-slate-700">
            E-Mail <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border block w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus:border-green-600 focus:outline focus:outline-green-600"
          />
        </div>
        <div>
          <label htmlFor="password" className="text-md text-slate-700">
            Password <span className="text-red-600">*</span>
          </label>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border block w-full rounded-md border-gray-400 px-3 py-2.5 text-md focus:border-green-600 focus:outline focus:outline-green-600"
            />
          </div>
        </div>
        <Link href="youtube.com" className="text-right block mt-2">
          Lupa Password?
        </Link>
      </div>
    </>
  );
};

export default FormLogin;
