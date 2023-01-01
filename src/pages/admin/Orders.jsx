import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
// import axios from "../../components/axios";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Buttom from "../../components/Buttom";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../redux/actions/authAction";

function Orders() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);
  const [reFetch, setReFetch] = useState(false);
  // const ORDER_URL ='/orders'
  const URL = process.env.REACT_APP_SERVER_URL || "https://angkasa-api-staging.km3ggwp.com/api";
  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get(
        // "https://angkasa-api-staging.km3ggwp.com/api/orders?page=1&limit=10",
        // `${ORDER_URL}?page=1&limit=10`,
        `${URL}/orders?page=1&limit=10`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOrders(res.data.data.orders);
    };
    fetchOrders();
    setReFetch(false);
    dispatch(getMe());
  }, [reFetch, token]);

  const onClickStatus = async (id) => {
    const { status } = await axios.put(
      // `https://angkasa-api-staging.km3ggwp.com/api/orders/accept/${id}`,
      // `${ORDER_URL}/accept/${id}`,
      `${URL}/orders/accept/${id}`,
      {
        id: id,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (status === 200 || 204) {
      setReFetch(true);
    }
  };

  return (
    <>
      {user?.role === "ADMIN" ? (
        <>
          <Navbar />
          <div className="px-[24px] xl:px-[80px]">
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle my-[40px]">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Code
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            Payment Method
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      {orders.map((order, index) => {
                        return (
                          <>
                            <tbody
                              key={order.id}
                              className="divide-y divide-gray-200"
                            >
                              <tr>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                  {index + 1}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {order.code}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {order.status}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                  {order.paymentMethod}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <Buttom
                                    onPress={(e) => {
                                      e.preventDefault();
                                      onClickStatus(order.id);
                                    }}
                                  >
                                    Active
                                  </Buttom>
                                </td>
                              </tr>
                            </tbody>
                          </>
                        );
                      })}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default Orders;
