import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);
  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment Successful");
  };

  const handleDelete = (item) => {
    const filteredcart = carts.filter((c) => c.id !== item.id);
    setCarts(filteredcart);
    toast.error("Item deleted!");
  };

  return (
    <div className=" container mx-auto lg:w-8/12 bg-gray-100 py-7 px-5 rounded-xl my-10">
      <div>
        {" "}
        <h2 className="text-2xl font-bold">Your Cart:</h2>
      </div>

      {carts.length === 0 ? (
        <div className="flex flex-col justify-center items-center p-20 ">
          {" "}
          <p>Your cart is empty!!</p>
          <p>Looks like you haven’t added anything yet.</p>
        </div>
      ) : (
        <div>
          {carts.map((item) => (
            <div
              key={item.id}
              className="m-2.5 border  border-gray-300 rounded-xl p-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <div className="border border-gray-300 rounded-full w-[60px] h-[60px] flex items-center justify-center">
                  <img src={item.icon} alt="Icon Image" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{item.name} </h1>
                  <p className="text-[16px] font-bold opacity-65">
                    ${item.price}
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(item)}
                className="btn btn-ghost text-red-600 font-bold cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-between items-center mt-10">
        <p className="opacity-65 font-semibold">Total:</p>
        <p className=" text-2xl font-bold pr-2.5">${totalPrice}</p>
      </div>
      <button
        onClick={handlePayment}
        className="btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]  rounded-full text-white font-bold mt-5 p- "
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
