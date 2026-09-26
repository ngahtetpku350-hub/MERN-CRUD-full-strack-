import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { create__category, list__category } from '../../api/services/category';
import { toast } from 'react-toastify';

const CreateCateogry = () => {
    const [name,setName] = useState();
    const navigate = useNavigate();
    const [category, setCategory] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const category = await list__category();
            // console.log("API Response:", response);
            setCategory(category.data || []);
          } catch (error) {
            console.error("Failed to fetch Category:", error);
          }
        };
    
        fetchPosts();
      }, []);
    

    const handleSubmit = async (e) => {
          e.preventDefault();
      
          if (!name) {
            toast.warning("Category name is requiired");
            return;
          }

          try {
                const response = await create__category({
                  name,
                });
                toast.success(response.message);
                navigate("/")
              } catch (error) {
                    console.log(error.message)
              }
        };


  return (
    <section className="mx-auto max-w-3xl px-6 py-12">
       <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        {/* Cateogry name */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-semibold text-gray-800"
          >
            Category Name
          </label>

          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter post title"
            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
          />
        </div>
        <button
          // type="submit"
          className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create Cateogyr
        </button>
      </form>
      <div className='id="category"
            className="mb-3 mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-black"'>
              {category.map((category) =>(
                <div className='flex justify-around mt-2 rounded-lg border border-gray-300 bg-transparent p-2 text-sm text-black'>
                 <div>
                  <h1>{category.name}</h1>
                  </div> 
                  <div className='bg-red-400 border border-gray-300 rounded-2xl p-2 justify-end'>
                    <button>Delete</button>
                  </div>
                </div>
              ))}
      </div>
      {/* <select
            id="category"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-black"
          >
            {category.map((cat) => (
              <div><h2>{cat.name}</h2></div>
            ))}
          </select> */}
    </section>
  )
}

export default CreateCateogry
