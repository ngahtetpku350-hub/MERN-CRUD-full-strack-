import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { postDelete } from '../../api/services/post'
import { toast } from 'react-toastify'

const PostDelete = () => {
const Navigate = useNavigate()
  const {id} = useParams()
  console.log(id)
  const handelDelete = async () =>{
    await postDelete(id)

    toast.success("Delete successfully")
    Navigate('/posts')
  }
  return (
    <div className='flex border rounded-2xl border-black justify-center align-center bg-black h-auto '>
      <div className='bg-white p-4 rounded-2xl border border-black p-7'>
            <div className='bg-amber-400 text-center m-4'>
                <h2>Confirm Delete</h2>
            </div>
               <div>
                <button className='bg-white p-3 text-black rounded-2xl'> Cancel </button>
                <button onClick={handelDelete} className='bg-red-600 p-3 text-black rounded-2xl'> Confirm Delete</button>
              </div>

           
      </div>
    </div>
  )
}

export default PostDelete
