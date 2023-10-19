
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { FaRegWindowClose } from "react-icons/fa";

const CartItem = ({item}) => {
  const { title, description, image, price } = item;
  const dispatch = useDispatch();
  
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Remove Item")
  }

  return (
    <section className="w-10/12 flex flex-col justify-center items-center md:flex-row md:justify-center md:items-center gap-10 mb-5 p-5 rounded-lg shadow-md shadow-slate-200">
      <div className="w-[80%]">
        <img className="w-full h-fit" src={image} alt="img" />
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div>
          <h1 className="text-sm md:text-xl">{title}</h1>
          <p className="opacity-50 text-xs md:text-xl">
            {description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-green-600">${price}</span>

          <button className="text-sm flex flex-col items-center" onClick={removeFromCart}>
            <FaRegWindowClose className="text-red-600 w-[20px] h-[20px]"/>
            <span className="text-red-500 text-xs sm:text-sm ">Remove</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
