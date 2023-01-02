import Navbar from "../components/Navbar";
import avatar from "../assets/loginIMG.png";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../redux/actions/authAction";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Buttom from "../components/Buttom";
import Modal from "../components/Modal";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState(user.fullname);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    setReFetch(false);
    dispatch(getMe());
  }, [reFetch]);

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap bg-gray-100 h-screen w-full items-center justify-center">
        <div className="bg-white w-full max-w-[980px] h-[480px] rounded-md overflow-hidden shadow-md">
          <div className="grid grid-cols-7 gap-x-4 p-2">
            <div className="col-span-3">
              <h1>Edit Profil</h1>
              <form>
                <label className="block items-center py-1.5">
                  <span className="block text-base font-medium  text-slate-700">
                    Name
                  </span>
                  <input
                    value={user.fullname}
                    className="peer ... border p-2 w-full"
                  />
                </label>

                <label className="block items-center py-1.5">
                  <span className="block text-base font-medium  text-slate-700">
                    Username
                  </span>
                  <input
                    value={user.username}
                    className="peer ... border p-2 w-full"
                  />
                </label>

                <label className="block items-center py-1.5">
                  <span className="block text-base font-medium  text-slate-700">
                    Email
                  </span>
                  <input
                    value={user.email}
                    className="peer ... border p-2 w-full"
                  />
                </label>
              </form>
              <Buttom onPress={() => setShow(true)}>Edit Profil</Buttom>
            </div>
            <div className="flex col-span-4 items-center justify-center">
              <div>
                <h2>Foto Profil</h2>
                <img src={avatar} alt="avatar" className="h-96 rounded-full" />
                <p className="flex justify-center" id={user.fullname}>
                  John Doe
                </p>
              </div>
            </div>
          </div>
        </div>
        <Modal onClose={handleClose} visible={show} />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
