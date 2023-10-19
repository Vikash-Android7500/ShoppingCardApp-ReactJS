import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CardItem from "../components/CartItem";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  },[cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full flex flex-col items-center md:w-[50%]">
            {cart.map((item, index) => {
              return <CardItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="w-full md:fixed md:left-[75%] md:bottom-0 p-5 flex flex-col gap-y-10 bg-[#f1f3f6] border-2 border-s-teal-100">
            <div>
              <h3 className="text-xl ms:text-2xl text-green-600">Your Cart</h3>
              <h1 className="text-orange-400">Summary</h1>
              <span className="text-lg sm:text-xl text-cyan-600">
                Total item: {cart.length}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-base text-green-600">
                Total Amount: ${totalAmount}
              </span>
              <Link to={"/"}>
                <button className="text-sm rounded-md border-2  border-x-green-900 px-4 py-1 hover:bg-green-300 active:bg-green-500 shadow-md animate-pulse">
                  Checkout Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-y-5 mt-5">
          <h1 className="text-red-600 text-2xl">Card Empty</h1>

          <FaCartArrowDown fontSize={48} color="green" />

          <Link to={"/"}>
            <button className="rounded-md border-2  border-x-green-900 px-4 py-1 hover:bg-green-200 active:bg-green-500 shadow-md">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default Cart;