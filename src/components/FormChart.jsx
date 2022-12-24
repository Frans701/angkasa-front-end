import React, { useRef, useState, useEffect } from "react";
import Buttom from "./Buttom";
import FormInput from "./FormInput";
import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useDispatch, useSelector } from "react-redux";
import { getFlight } from "../redux/actions/FlightAction";
import { useSearchParams, Link } from "react-router-dom";
import Select from "react-select";
import axios from "./axios";
import { PlusSmallIcon } from "@heroicons/react/24/solid";

function FormChart({ token }) {
  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  let flightId = searchParams.get("flightId");
  let passenger = searchParams.get("passenger");
  let seatClass = searchParams.get("class");
  const { flight, price } = useSelector((state) => state.flight);
  const [filteredItems, setFilteredItems] = useState(null);
  const [data, setData] = useState(null);

  const [selectedOptionBank, setSelectedOptionBank] = useState(null);
  const [selectedOptionType, setSelectedOptionType] = useState(null);

  useEffect(() => {
    dispatch(getFlight(flightId, seatClass));
  }, [dispatch]);

  console.log(data);

  const [values, setValues] = useState({
    email: "",
    fullName: "",
    email: "",
    phone: "",
    fullNamePassenger: "",
    number: "",
    typeID: "",
  });

  console.log(values);
  console.log(selectedOptionType);
  console.log(selectedOptionBank);

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

  const paymentMethod = [
    { value: "Bank Indonesia (BI)", label: "Bank Indonesia (BI)" },
    {
      value: "Bank Negara Indonesia (BNI)",
      label: "Bank Negara Indonesia (BNI)",
    },
    {
      value: "Bank Rakyat Indonesia (BRI)",
      label: "Bank Rakyat Indonesia (BRI)",
    },
    {
      value: "Bank Tabungan Negara (BTN)",
      label: "Bank Tabungan Negara (BTN)",
    },
    {
      value: "Bank Mandiri",
      label: "Bank Mandiri",
    },
    {
      value: "Bank Central Asia (BCA)",
      label: "Bank Central Asia (BCA)",
    },
    {
      value: "Bank CIMB Niaga",
      label: "Bank CIMB Niaga",
    },
  ];

  const type = [
    { value: "KTP", label: "KTP" },
    {
      value: "Passport",
      label: "Passport",
    },
  ];

  // console.log(options);

  const contacts = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Example: Kurt Cobain",
      errorMsg: "Please enter a valid full name",
      label: "Full Name",
      pattern: "^[A-Za-z]+ [A-Za-z]+$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Example: kurt@gmail.com",
      errorMsg: "It should be valid email address",
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
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
      errorMsg: "Please enter a valid full name",
      label: "Full Name",
      required: true,
      pattern: "^[A-Za-z]+ [A-Za-z]+$",
    },
    {
      id: 2,
      name: "number",
      type: "text",
      placeholder: "Example: 082172xxxx",
      errorMsg: "It should be valid number",
      label: "Number",
      required: true,
    },
  ];

  const typeID = {
    id: 1,
    name: "typeID",
    type: "text",
    placeholder: "Enter your identity",
    errorMsg: "It should be valid",
    label: "",
    required: true,
  };

  // console.log(username);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
            type: selectedOptionType.value,
            number: values.number,
          },
        ],
        paymentMethod: selectedOptionBank.value,
        class: seatClass,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setData(result.data);
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

          <div className="flex flex-col px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white w-full gap-[8px] relative z-10">
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
            <div className="flex flex-col my-[8px] gap-[4px]">
              <h4>KTP/Passport</h4>
              <Select
                styles={customStyles}
                options={type}
                onChange={(selectedOptionType) => {
                  setSelectedOptionType(selectedOptionType);
                }}
              />
              <FormInput
                key={typeID.id}
                {...typeID}
                value={values[typeID.name]}
                onChange={onChange}
              />
            </div>

            <div className="flex flex-col my-[8px] gap-[4px]">
              <h4>Payment Method</h4>
              <Select
                styles={customStyles}
                options={paymentMethod}
                onChange={(selectedOptionBank) => {
                  setSelectedOptionBank(selectedOptionBank);
                }}
              />
            </div>
          </div>

          <div className="flex flex-col px-[40px] py-[24px] rounded-lg drop-shadow-lg bg-white w-full gap-[8px]">
            <Buttom>Submit</Buttom>
          </div>
        </form>
        <div className="flex flex-col items-start gap-[16px] xl:px-[40px] px-[24px] py-[24px] rounded-lg drop-shadow-lg bg-white xl:w-[800px] w-full">
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
              {price[0]?.price.formatted}
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default FormChart;
