import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-Shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 25,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "TopWear",
      size: "M",
      color: "Yellow",
      quantity: 1,
      price: 40,
      image: "https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div className="space-y-4">
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
        >
          {/* Product Left Side */}
          <div className="flex items-start sm:items-center gap-4">
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-28 sm:w-28 sm:h-32 object-cover rounded-xl border border-gray-300"
            />

            {/* Product Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Size:{" "}
                <span className="font-medium text-gray-700">
                  {product.size}
                </span>{" "}
                | Color:{" "}
                <span className="font-medium text-gray-700">
                  {product.color}
                </span>
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 mt-3">
                <button className="border cursor-pointer border-gray-300 rounded-md w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition">
                  -
                </button>
                <span className="font-medium text-gray-700">
                  {product.quantity}
                </span>
                <button className="border cursor-pointer border-gray-300 rounded-md w-8 h-8 flex items-center justify-center text-lg font-bold hover:bg-gray-100 transition">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Product Price and Delete */}
          <div className="flex flex-row sm:flex-col items-center sm:items-end gap-3 mt-4 sm:mt-0">
            <p className="text-lg font-semibold text-gray-900">
              ${product.price.toLocaleString()}
            </p>
            <button className="text-red-600 cursor-pointer hover:text-red-700 transition">
              <RiDeleteBin3Line className="h-6 w-6" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
