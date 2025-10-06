import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/500/500?random=1",
    },
    {
      name: "Casual Sneakerss",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/500/500?random=2",
    },
  ],
  totalPrice: 195,
};
const Checkout = () => {
  const navigate = useNavigate();
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* Left Section */}
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="user@email.com"
              className="w-full p-2 border rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                required
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-black cursor-pointer text-white py-3 rounded"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
      {/* Right Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
        {/* Heading */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
          Order Summary
        </h3>

        {/* Product List */}
        <div className="divide-y divide-gray-200 mb-6">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4"
            >
              {/* Left side - Image + Info */}
              <div className="flex items-start sm:items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover rounded-lg border border-gray-200"
                />

                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Size:{" "}
                    <span className="font-medium text-gray-700">
                      {product.size}
                    </span>
                  </p>
                  <p className="text-gray-500 text-sm">
                    Color:{" "}
                    <span className="font-medium text-gray-700">
                      {product.color}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right side - Price */}
              <p className="text-lg sm:text-xl font-semibold text-gray-900 mt-2 sm:mt-0">
                ${product.price?.toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between items-center text-base">
            <p>Subtotal</p>
            <p className="font-medium">${cart.totalPrice?.toLocaleString()}</p>
          </div>
          <div className="flex justify-between items-center text-base">
            <p>Shipping</p>
            <p className="font-medium text-green-600">Free</p>
          </div>

          <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between items-center text-lg font-semibold text-gray-900">
            <p>Total</p>
            <p>${cart.totalPrice?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
