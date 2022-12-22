import React from "react";
import { useState } from "react";
import  { useNavigate } from "react-router-dom";
import { createAirplanes } from "../../../redux/actions/airplanesActions";

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [airline_id, setAirline_id] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [error, setError] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      toast.error("Nama Pesawat is required");
      return;
    }
    if (type === "") {
      toast.error("type is required");
      return;
    }
    if (capacity === "") {
      toast.error("capacity is required");
      return;
    }
    if (airline_id === "") {
      toast.error("Nama maskapai is required");
      return;
    }
    if (name !== "" && type !== "") {
      const body = {
        name,
        type,
        capacity,
        airline_id,
      };
      const createAirplanesStatus = await createAirplanes(body, setError);
      if (createAirplanesStatus) {
        toast.success("Berhasil Menambah Data Pesawat");
        return navigate("/airport");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="main-container d-flex">
        <div className="sidebar" id="side_nav">
          <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
            <h1 className="fs-4">
              <span className="text-white text-center control-terbang">
                <img src={LogoAdmin} alt="" width="100px" />
              </span>
            </h1>
          </div>
          <ul className="list-unstyled px-2">
            <li
              className="beruang px-3 py-2 d-block"
              onClick={(e) => {
                e.preventDefault();
                navigate("/dashboard");
              }}
            >
              <i className="fal fa-home bear"></i> Dashboard
            </li>
            <li className="beruang px-3 py-2">
              <i className="fal fa-user-headset bear"></i> Admin
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/maskapai");
              }}
            >
              <i className="fal fa-plane-departure bear"></i> Maskapai
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/airplanes");
              }}
            >
              <i className="fal fa-solar-panel bear"></i> Airplanes
            </li>
            <li
              className="beruang px-3 py-2"
              onClick={(e) => {
                e.preventDefault();
                navigate("/airport");
              }}
            >
              <i class="fal fa-place-of-worship bear"></i> Airport
            </li>
          </ul>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container">
              <div className="d-flex justify-content-between d-block">
                <img
                  src={Logo}
                  alt=""
                  width="100px"
                  class="navbar-brand fs-4 px-2 py-0"
                />
              </div>
              <button
                className="navbar-toggler p-0 border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="fal fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item nav-link  phone d-md-none yui">
                    Dashboard
                  </li>
                  <li className="nav-item nav-link phone d-md-none yui">
                    Admin
                  </li>
                  <li
                    className="nav-item nav-link phone d-md-none yui"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/maskapai");
                    }}
                  >
                    Maskapai
                  </li>
                  <li className="nav-item nav-link phone d-md-none yui">
                    Airport
                  </li>
                  <li className="nav-item nav-link phone">
                    <button className="btn btn-danger btn-sm">
                      <i className="fal fa-power-off text-light"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="dashboard-content px-3 pt-4 my-content">
            <div className="card">
              <div className="card-header">
                <div className="card-title text-center">Tambahkan Maskapai</div>
                <div className="ms-3">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/airplanes");
                    }}
                  >
                    Back
                  </button>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={(e) => onSubmit(e)}>
                  <div className="row mb-3">
                    <div className="col-lg-3">
                      <label className="form-label">Nama Pesawat</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Masukkan Nama Pesawat"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Type Pesawat</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Masukkan Type Pesawat"
                        onChange={(e) => setType(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Capacity</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Jumlah Pesawat"
                        onChange={(e) => setCapacity(e.target.value)}
                      />
                      <br />
                    </div>
                    <div className="col-lg-3">
                      <label className="form-label">Nama Maskapai</label>
                    </div>
                    <div className="col-lg-9">
                      <input
                        type="text"
                        className="form-control"
                        name="airline"
                        placeholder="Masukkan Nama Maskapai"
                        onChange={(e) => setAirline_id(e.target.value)}
                      />
                      <h6 className="err">{error}</h6>
                      <br />
                    </div>
                    <div className="text-end">
                      <React.Fragment>
                        <button
                          className="btn btn-success btn-sm"
                          type="submit"
                        >
                          Submit
                        </button>
                      </React.Fragment>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );

export default createAirplanes;