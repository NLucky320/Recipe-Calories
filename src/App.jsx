import { useEffect, useState } from "react"
import Banner from "./assets/components/Banner/Banner"
import Navbar from "./assets/components/Navbar/Navbar"
import Recipes from "./assets/components/Recipes/Recipes"
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [recipes, setRecipes] = useState([])
   const [cart, setCart]=useState([])
   const [cookingItems, setCookingItems] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);


useEffect(() => {
  fetch('/data.json')
    .then(res => res.json())
  .then(data=>setRecipes(data))
}, [])
  // console.log(recipes)
  

  const handleCart = recipe => {
    // console.log('recipe added')
    const isAdded = cart.find(item => item.recipe_id == recipe.recipe_id);
    // console.log(isAdded)
    
     if (!isAdded) {
       setCart([...cart, recipe]);
    }
    else{
     toast("already added!")
    }
    
 }

  const handleDelete = id => {
    // console.log(id)
    const newCart = cart.filter(item => item.recipe_id != id);
    //   console.log(newCart)
    setCart(newCart)
  }

  const handleCook = recipe => {
   
      setCookingItems([...cookingItems, recipe]);
    // Update total time and total calories
    setTotalTime(prevTime => prevTime + parseInt(recipe.preparing_time));
    setTotalCalories(prevCalories => prevCalories + parseInt(recipe.calories));
   
  }
  return (
    <>
     
      <div className=" max-w-[1320px] mx-auto space-y-4 p-4 ">
         <Navbar></Navbar>
        <Banner></Banner>
        <div className="text-center lg:pt-[70px] space-y-6">
           <h2 className='text-[40px] font-semibold text-[#150B2B]'>Our Recipes</h2>
            <p className='text-[#150B2B99] lg:w-[823px] mx-auto leading-6'>Whether you are planning a simple weeknight meal or preparing for a special occasion, a trip to the grocery store is always an adventure filled with endless possibilities for culinary creations.</p>
          <div className="   flex flex-col lg:flex-row justify-between pt-6 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {
            recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe} handleCart={handleCart}></Recipes>)
            
          }
           <ToastContainer />
            </div>
            <div>
     
     
    </div>
            <div className="">
               <div className="lg:w-[450px] py-4 card bg-[#FFF] shadow-xl border border-solid border-[#28282833C]">
                <h2 className='text-[24px] font-semibold text-[#282828] border-b-2 border-[#28282826]'>Want to cook: {cart.length}</h2>
   <div className="text-[#878787] px-16 pb-4 -mt-4" ><hr  /></div>

<div className="overflow-hidden">
  <table className="table text-[#878787] bg-[#28282808] border-collapse">
    {/* head */}
    <thead>
      <tr className="bg-white">
        <th></th>
        <th>Name</th>
        <th>Time</th>
                        <th>Calories</th>
                         <th></th>
      </tr>
    </thead>
  {cart.map((item, index) => (
  <tbody key={index} className="text-[14px] md:text-[16px]">
    <tr>
      <th>{index + 1}</th>
      <td>{item.recipe_name}</td>
      <td>{item.preparing_time}</td>
        <td>{item.calories}</td>
        <td className="hidden md:flex" >  <button className="btn bg-[#0BE58A] md:px-4 text-[#150B2B]  rounded-[50px] hover:bg-black hover:text-white border-none" onClick={() => { handleDelete(item.recipe_id); handleCook(item) }}>Preparing</button></td>
    </tr>
    {/* Render a separate row for the button on mobile devices */}
    <tr className="md:hidden">
      <td colSpan="5" className="text-center">
        <button className="btn bg-[#0BE58A] px-12 text-[#150B2B] rounded-[50px] hover:bg-black hover:text-white border-none" onClick={() => { handleDelete(item.recipe_id); handleCook(item) }}>Preparing</button>
        </td>
       
      </tr>
       
  </tbody>
))}

  </table>
                </div>
                <div>
                     
                         <h2 className='text-[24px] font-semibold text-[#282828] border-b-2 border-[#28282826]'> Currently cooking: {cookingItems.length}</h2>
                </div>
                   <div className="text-[#878787] px-16 pb-4 -mt-4" ><hr  /></div>
                <div className="overflow-hidden">
  <table className="table text-[#878787] bg-[#28282808] border-collapse">
    {/* head */}
    <thead className="">
      <tr className="bg-white">
        <th></th>
        <th>Name</th>
        <th>Time</th>
                        <th>Calories</th>
                         
      </tr>
    </thead>
  
                      {/* row 1 */}
                       {cookingItems.map((item,index) => (
                    <tbody key={index} >
                        
                                   <tr className="">
        <th>{index+1}</th>
        <td>{item.recipe_name} </td>
        <td>{item.preparing_time.slice(0,2)}</td>
        <td>{item.calories.slice(0,3)}</td>
       
      </tr>
               
      
    </tbody>))}
  </table>
                </div>       
                            
                        <div className='flex justify-end gap-6 text-[#282828CC] px-2'>
                            <div><p>Total Time =
                                <br />{totalTime} minutes</p>
                            </div>
                            <div>
                                <p>
                                    Total Calories =
                                    <br />{totalCalories} calories</p>
                            </div>
                        </div>
                  </div>
         </div>
          </div>
       </div>
     </div>
    
    </>
  )
}

export default App
