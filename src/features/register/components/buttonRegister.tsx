import Button from "@/src/components/Button";

const ButtonRegister = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button
          type="submit"
          name="Daftar"
          className="text-white bg-green-600 hover:bg-green-700"
        />
        <Button
          href="/login"
          type="button"
          name="Login"
          className="bg-green-50 text-green-600 hover:bg-green-100"
        />
      </div>
      <div className="flex items-center gap-2">
        <div className="h-0.5 bg-gray-200 flex-1 rounded-2xl"></div>
        <span className="text-md text-slate-600 my-6">atau</span>
        <div className="h-0.5 bg-gray-200 flex-1 rounded-2xl"></div>
      </div>
      <Button
        src="/google-icon.svg"
        type="button"
        name="Masuk dengan Google"
        className="bg-white text-gray-600 border-gray-200 border hover:bg-slate-50 w-full font-bold"
      />
    </>
  );
};

export default ButtonRegister;
