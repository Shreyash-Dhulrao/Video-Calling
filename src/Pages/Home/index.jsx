import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
    const [value, setvalue] = useState("")
    const [isTrue , setisTrue] = useState(false)
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault
        if(value.length === 0 ){
            setisTrue(true)
            return
        }
        navigate(`/room/${value}`)
    }
  return (
    <div className=' flex flex-col m-5 items-center justify-center gap-3'>
      <input type="text" value={value} onChange={(e)=>setvalue(e.currentTarget.value)} placeholder='Create new meeting' className='md:w-1/3 w-3/4 px-5 py-3 outline-none border ' />
      {isTrue ? ( <p className='text-red-400 md:w-1/3 w-3/4 text-start'>Enter Some Text Above..</p>) : (<></>)}
      <button onClick={handleSubmit} className='md:w-1/3 w-3/4 px-5 py-3 outline-none border-none  bg-blue-500/75 text-white rounded-md hover:bg-blue-500'>Join</button>
    </div>
  )
}

export default Homepage
