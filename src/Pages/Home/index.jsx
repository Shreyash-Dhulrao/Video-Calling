import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import icon from '../../assets/Images/Zegocloud_Icon.png'
import Instagram from '../../assets/Images/Instagram.svg?react'
import Github from '../../assets/Images/Github.svg?react'
import Linkedin from '../../assets/Images/Linkedin.svg?react'

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
      <div className='flex justify-center flex-col'>
        <div className=' justify-center flex'>
        <img src={icon} alt="" className='w-1/3'/>
        </div>
        <div className=' justify-center flex'>
          <h1 className='font-Noto  lg:text-3xl md:text-2xl text-xl'>Video Calling App</h1>
        </div>
      </div>
      <div className='gap-3 w-full flex flex-col items-center'>
      <input type="text" value={value} onChange={(e)=>setvalue(e.currentTarget.value)} placeholder='Create new meeting' className='md:w-1/3 w-3/4 px-5 py-3 outline-none border font-Noto' />
      {isTrue ? ( <p className='text-red-400 md:w-1/3 w-3/4 text-start'>Enter Some Text Above..</p>) : (<></>)}
      <button onClick={handleSubmit} className='md:w-1/3 w-3/4 px-5 py-3 outline-none border-none  bg-blue-500/75 text-white rounded-md hover:bg-blue-500'>Create</button>
      </div>
      <div className='bg-zinc-800 text-white w-full flex flex-col items-center gap-2 absolute bottom-0 p-3'>
        <h3 className='font-Noto text-lg tracking-wide'>Developed by <strong>Shreyash Dhulrao</strong></h3>
        <div className='flex gap-3'>
        <Link to="https://www.instagram.com/shreyash.dhulrao?igsh=aGM3NjUzbGVseXN2">
          <Instagram className="w-8 h-8 rounded-lg"/>
        </Link>
        <Link to="https://github.com/Shreyash-Dhulrao">
          <Github className="w-8 h-8 rounded-lg"/>
        </Link>
        <Link to="https://www.linkedin.com/in/shreyash-dhulrao-47b519228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ">
          <Linkedin className="w-8 h-8 rounded-lg"/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Homepage
