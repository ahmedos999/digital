import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {ReactTyped} from "react-typed";


export default function Main() {
    const [title,setTitle] = useState('-') 

    const containerVariants = {
        hidden:{
          y:"100",
          opacity:0
        },
        visible:{
          y:0,
          opacity:1
        }
      }
    useEffect(()=>{
        setTimeout(()=>{
          setTitle("-The Digital Marketing Agency is a leading digital marketing agency based in Al Ain, Abu Dhabi, UAE specializing in delivering innovative and results-driven solutions to help businesses thrive in the digital landscape")
        },1000)
      },[])
  return (
    <div className='main'>
        <motion.div
        variants={containerVariants} initial="hidden" animate="visible" transition={{delay:0.2, duration:0.5, stiffness:2000}}
        className='title'>
        Digital Marketing <br/>Agency Business
Plan
        </motion.div>
        <div className='bref'>
        <ReactTyped strings={[title]} typeSpeed={5}></ReactTyped>
        </div>
    </div>
  )
}
