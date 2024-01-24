import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () =>{
    const API_URL = "https://fakestoreapi.com/products";

    const [loading, setloading] = useState(false);
    const [posts, setposts] = useState([]);

    async function fetchProductData(){
      setloading(true)

      try{
        const res = await fetch(API_URL)
        const data = await res.json()
        setposts(data)
      }
      catch{
        console.log("Error")
        setposts([])
      }
      setloading(false)
    }

    useEffect(()=>{
      fetchProductData()
    },[])

  return (
    <div>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? 
        (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]">
          {
          posts.map((posts) => (
            <Product key={posts.id} posts={posts}/>
          ))
          }
        </div>)
        :
        <div className="w-screen h-screen flex justify-center items-center">
          <p  className="font-bold"> NO DATA FOUND</p>
        </div>
      }
    </div>
  )
}

export default Home
