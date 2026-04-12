import ButtonLogin from "./components/buttonLogin";
import FormLogin from "./components/formLogin";

const Login = () => {
  return (
    <>
      <div className="bg-[#fffdf3] w-full h-screen flex flex-row items-center">
        <div className="max-w-lg w-lg min-w-xs bg-white mx-auto p-9 border border-gray-200 rounded-xl">
          <div className="text-center mb-8 flex-col flex gap-2.5">
            <h2 className="font-semibold text-3xl text-black">Masuk Ke Akun</h2>
            <p className="text-md text-gray-600">
              Yuk, lanjutin belajarmu di videobelajar
            </p>
          </div>
          <form action="">
            <FormLogin />
            <ButtonLogin />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
