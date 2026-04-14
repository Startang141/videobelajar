import ButtonRegister from "./components/buttonRegister";
import FormRegister from "./components/formRegister";

const Register = () => {
  return (
    <>
      <div className="bg-[#fffdf3] w-full md:h-screen h-[130vh] flex flex-row items-center">
        <div className="max-w-lg md:w-lg min-w-xs bg-white mx-auto p-9 border border-gray-200 rounded-xl">
          <div className="text-center mb-8 flex-col flex gap-2.5">
            <h2 className="font-semibold text-3xl text-black">
              Pendaftaran Akun
            </h2>
            <p className="text-md text-gray-600">
              Yuk, daftarkan akunmu sekarang juga!
            </p>
          </div>
          <form action="">
            <FormRegister />
            <ButtonRegister />
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
