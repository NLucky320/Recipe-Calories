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
  fetch('../public/data.json')
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
          <div className="   flex flex-col lg:flex-row justify-between pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {
            recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe} handleCart={handleCart}></Recipes>)
            
          }
           <ToastContainer />
            </div>
            <div>
     
     
    </div>
          <div className="card bg-base-100 shadow-xl p-4 lg:w-[400px] xl:w-[500px]">
                        <h2 className='text-[24px] font-semibold text-[#282828] border-b-2 border-[#28282826]'>Want to cook: {cart.length}</h2>
                        <div className='flex justify-between'>
                            <div>
                                
                            </div>
                            <div>
                                <p>Name</p>
                            </div>
                            <div>
                                <p>Time</p>
                            </div>
                            <div>
                                <p>Calories</p>
                            </div>
                            <div>

                            </div>
                        </div>
                        <div className=''>
                             {
                  cart.map((item,index) => (
                    <div key={index} className='flex justify-between gap-2 space-y-4 bg-[#28282808] p-4 items-center text-center'>
                      <p>{ index+1}</p>
                      <p>{item.recipe_name} </p>
                      <p>{item.preparing_time} min</p>
                      <p>{item.calories} calories</p>
                      
                      <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-[50px] " onClick={() => { handleDelete(item.recipe_id); handleCook(item) }}>Preparing</button>
                    </div>
                  ))}
                            
                        </div>
                         <h2 className='text-[24px] font-semibold text-[#282828] border-b-2 border-[#28282826]'> Currently cooking: {cookingItems.length}</h2>
                        <div className='flex justify-between'>
                            <div>
                                
                            </div>
                            <div>
                                <p>Name</p>
                            </div>
                            <div>
                                <p>Time</p>
                            </div>
                            <div>
                                <p>Calories</p>
                            </div>
                           
                        </div>
                         <div className=''>
                  {cookingItems.map((item, index) => (
                    <div key={index} className='flex justify-between gap-1 bg-[#28282808] p-4'>
                      <div>
                        <p>{index + 1}</p>
                      </div>
                      <div>
                        <p>{item.recipe_name}</p>
                      </div>
                      <div>
                        <p>{item.preparing_time}</p>
                      </div>
                      <div>
                        <p>{item.calories}</p>
                      </div>
                    </div>
                  ))}
                </div>
                        <div className='flex justify-end gap-6'>
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
    
    </>
  )
}

export default App
