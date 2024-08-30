import React from 'react'
import { useContext } from 'react'
import UseContatex from '../contates/UseContates.JSX'

const Navbar = () => {
  
  const { fetchdatabyid } = useContext(UseContatex);

  return (
    <div className='text-center my-4 flex flex-wrap justify-center gap-4'>
    <button onClick={()=> fetchdatabyid("nature")} type="button" className="btn btn-outline-primary mx-2 sm:mx-4">Nature</button>
    <button onClick={()=> fetchdatabyid("science")} type="button" className="btn btn-outline-light mx-2 sm:mx-4">Science</button>
    <button onClick={()=> fetchdatabyid("computer")} type="button" className="btn btn-outline-warning mx-2 sm:mx-4">Computer</button>
    <button onClick={()=> fetchdatabyid("buildings")} type="button" className="btn btn-outline-danger mx-2 sm:mx-4">Buildings</button>
    <button onClick={()=> fetchdatabyid("feelings")} type="button" className="btn btn-outline-warning mx-2 sm:mx-4">Feelings</button>
    <button onClick={()=> fetchdatabyid("food")} type="button" className="btn btn-outline-info mx-2 sm:mx-4">Food</button>
    <button onClick={()=> fetchdatabyid("places")} type="button" className="btn btn-outline-light mx-2 sm:mx-4">Places</button>
    <button onClick={()=> fetchdatabyid("backgrounds")} type="button" className="btn btn-outline-info mx-2 sm:mx-4">Backgrounds</button>
</div>

  )
}

export default Navbar