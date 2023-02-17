import React from 'react'

export const Input = ({label, ...props}) => {
  return ( 
    <div className='input__container'>
        <label htmlFor="">{label}</label>
{
  
}
         <input {...props}/>
     </div>

     
  )
}
