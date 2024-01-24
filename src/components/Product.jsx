import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlices";
import { toast } from "react-hot-toast";

const  Product =({posts})=> {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function addToCart(){
    dispatch(add(posts));
    toast.success("Item Added")
  }
  function removeFromCart(){
    dispatch(remove(posts.id));
    toast.error("Item Removed")
  }

  return (
    <div className="flex flex-col items-center justify-between w-full gap-3 p-4 rounded-xl 
    border-2 border-[#00095] shadow-lg hover:shadow-2xl hover:scale-[1.03]
    md:hover:scale-[1.05] transition ease-in">
      <div>
       <p>{posts.title}</p>
      </div>

      <div>
      <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {posts.description.split(" ").slice(0,10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img src={posts.image} className="h-full w-full" />
      </div>

        <div className="flex justify-between items-center w-full mt-5">
          <div>
          <p className="text-green-600 font-semibold">${posts.price}</p>
        </div>
        
      {
        cart.some((p) => p.id === posts.id) ? 
        (
          <button 
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={removeFromCart}>
            Remove Item
          </button>
        )
        :
        (
          <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={addToCart}>
            Add item
          </button>
        )
      }
    </div>
    </div>
  );
};

export default Product;
