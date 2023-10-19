import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state);

  return (
    <div className="mx-5 mt-2 rounded-full bg-slate-800 shadow-lg shadow-slate-400">
      <div className="flex flex-row justify-around">
        <NavLink to="/">
          <div className="text-center">
            <FaHome
              fontSize={42}
              color="#90EE90"
              className="hover:scale-50 duration-500 transition-all"
            />
            <span className="text-white text-xs">Home</span>
          </div>
        </NavLink>

        <div className="flex flex-row gap-5 justify-center items-center">
          {/* <NavLink to="/">
            <p className="text-white hover:text-green-300">Home</p>
          </NavLink> */}

          <NavLink to="/cart">
            <div className="flex flex-col justify-center items-center">
              {cart.length > 0 && (
                <span
                  className="bg-green-600 text-xs font-bold w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
              <FaShoppingCart
                fontSize={34}
                color="white"
                className="hover:scale-50 duration-500 transition-all"
              />
              <span className="text-white text-xs">CardItems</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
