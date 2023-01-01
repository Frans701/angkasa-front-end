import { useEffect, useState } from "react";
import "./Notif.css";
import { getAllNotifications } from "../redux/actions/notifAction";

const Notif = ({ notif }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <>
      <div className="bell flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={() => {setOpen(!open)}}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        {!open&&
        <div className="icon"></div>}
        
        {open && (
          <div className="notif flex flex-col bg-gray-100 p-4 w-72 shadow-lg absolute top-12">
            <div>
              <ul>
                {notif.map((data) => (
                  <li
                    onClick={() => setOpen(false)}
                    className="p-2 text-md cursor-pointer rounded hover:bg-blue-200"
                    key={data.id}>{data.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="flex justify-center">
              <p className="p-2 text-xs mt-5 cursor-pointer rounded hover:bg-blue-200">
                Delete All
              </p>
            </div> */}
          </div>
        )}
      </div>
    </>
  );
};
export default Notif;
