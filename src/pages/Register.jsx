import loginIMG from "../assets/loginIMG.png";
function Register() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-gray-100 flex flex-col justify-center">
        <form className="max-w-[425px] w-full mx-auto bg-white p-4">
          <div>
            <h1 className="text-center font-bold text-2xl py-6">ANGKASA</h1>
          </div>
          <div className="flex flex-col py-2">
            <label>Nomor Ponsel atau Email</label>
            <input className="border p-2" type="text" />
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2" type="password" />
          </div>
          <div className="flex flex-col py-2">
            <label>Konfirmasi Password</label>
            <input className="border p-2" type="password" />
          </div>
          <button className="border w-full my-5 py-2 bg-yellow-300 text-blue-600 font-bold">
            Buat Akun
          </button>
          <div className="flex justify-center">
            <p>Sudah memiliki akun?</p>
          </div>
        </form>
      </div>
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginIMG} alt="" />
      </div>
    </div>
  );
}

export default Register;
