import ButtonRegister from "./components/buttonRegister";
import FormRegister from "./components/formRegister";

const Register = () => {
  return (
    <>
      <div className="bg-[#fffdf3] w-full flex flex-row items-center py-9">
        <div className="max-w-lg md:w-lg min-w-xs bg-white mx-auto md:p-9 p-5 border border-gray-200 rounded-xl lg:py-6">
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
