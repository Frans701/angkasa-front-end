import React, { useRef, useState, useEffect } from "react";
import Buttom from "./Buttom";
import FormInput from "./FormInput";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { getFlight } from "../redux/actions/FlightAction";
import { useSearchParams, Link } from "react-router-dom";
import Select from "react-select";
import axios from "./axios";

function FormChart({ token }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  let flightId = searchParams.get("flightId");
  let passenger = searchParams.get("passenger");
  let seatClass = searchParams.get("class");
  const { flight } = useSelector((state) => state.flight);
  const [filteredItems, setFilteredItems] = useState(null);
  const [data, setData] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    dispatch(getFlight(flightId));
    // const filteredArray = flight.class.filter(
    //   (flight) => flight.type === `${seatClass}`
    // );
    // setFilteredItems(filteredArray);
  }, [dispatch]);

  const [values, setValues] = useState({
    username: "",
    email: "",
    fullName: "",
    email: "",
    phone: "",
    fullNamePassenger: "",
    type: "",
    number: "",
  });

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: "4px 16px",
    }),
    control: (provided, state) => ({
      ...provided,
      padding: "4px 16px",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  const options = [
    { value: "BCA", label: "BCA" },
    { value: "Mandiri", label: "Mandiri" },
  ];

  // console.log(options);

  const contacts = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Example: Kurt Cobain",
      errorMsg: "Name 3-16 and and shouldn't include any special character",
      label: "Full Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Example: kurt@gmail.com",
      errorMsg: "It should be valid email address",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "tel",
      placeholder: "Example: 082172xxxx",
      errorMsg: "It should be valid Phone",
      label: "Phone",
      required: true,
    },
  ];

  const passengers = [
    {
      id: 1,
      name: "fullNamePassenger",
      type: "text",
      placeholder: "Example: Kurt Cobain",
      errorMsg: "Name 3-16 and and shouldn't include any special character",
      label: "Full Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "type",
      type: "text",
      placeholder: "Example: 0837283909xxxxxx",
      errorMsg: "It should be valid ID",
      label: "ID",
      required: true,
    },
    {
      id: 3,
      name: "number",
      type: "text",
      placeholder: "Example: 082172xxxx",
      errorMsg: "It should be valid number",
      label: "number",
      required: true,
    },
  ];

  // console.log(username);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(selectedOption.value);
  // console.log(seatClass);
  // console.log(passenger);
  // console.log(flightId);
  // console.log(values);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.post(
      "https://angkasa-api-staging.km3ggwp.com/api/orders",
      {
        flightId: [flightId],
        totalPassengers: parseInt(passenger),
        contact: {
          fullName: values.fullName,
          email: values.email,
          phone: values.phone,
        },
        passengers: [
          {
            fullName: values.fullNamePassenger,
            type: values.type,
            number: values.number,
          },
        ],
        paymentMethod: selectedOption.value,
        class: seatClass,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setData(result.data.data);
  };

  console.log(data);

  return (
    <>
      <div className="flex xl:flex-row flex-col gap-[24px] mt-[32px] items-start">
        <form
          className="w-full flex-col gap-[24px] flex"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white w-full gap-[8px]">
            <h3 className="text-2xl font-semibold">Orderer Details</h3>
            {contacts.map((input) => {
              return (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              );
            })}
          </div>

          <div className="flex flex-col px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white w-full gap-[8px]">
            <h3 className="text-2xl font-semibold">Passenger Details</h3>
            {passengers.map((input) => {
              return (
                <>
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                </>
              );
            })}
            <h4>Payment Method</h4>
            <Select
              styles={customStyles}
              options={options}
              onChange={handleChange}
            />
          </div>
          <Buttom>Submit</Buttom>
        </form>
        <div className="flex flex-col items-start gap-[16px] xl:px-[40px] px-[24px] py-[24px] rounded-lg drop-shadow-lg bg-white xl:w-[800px] ">
          <h1 className="text-2xl font-semibold">Penerbangan</h1>

          <div>{flight?.airplane?.airline?.name}</div>
          <div className="flex xl:flex-row flex-col justify-between xl:items-center w-full items-start gap-[16px] xl:gap-0 border-b-2 pb-[16px]">
            <div className="flex flex-row gap-[16px] xl:items-center">
              <div className="">
                <img
                  className="w-[80px] border p-[8px] rounded-lg"
                  src={flight?.airplane?.airline?.logo}
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-[8px] items-start">
                <h1 className="font-bold text-xl">{flight?.std?.hours}</h1>
                <span className="text-lg">{flight?.fromAirport?.iata}</span>
              </div>
              <div className="flex flex-row items-center w-[100px]">
                <div className="flex flex-col items-center gap-[8px] w-full">
                  <span className="text-sm text-gray-300">
                    {flight?.estimated}
                  </span>
                  <span className="border-b-2 w-full"></span>
                  <span className="text-sm text-gray-300">Langsung</span>
                </div>
                <div>
                  <PaperAirplaneIcon className="h-6 w-6 text-gray-300" />
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start">
                <h1 className="font-bold text-xl">{flight?.sta?.hours}</h1>
                <span className="text-lg">{flight?.toAirport?.iata}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full items-center">
            <h5 className="font-semibold xl:text-xl">Total Pembayaran</h5>
            <h5 className="font-semibold xl:text-2xl text-blue-500">
              {/* {filteredItems.map((item) => (
                <p key={item.id}>{item.price.formatted}</p>
              ))} */}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormChart;
