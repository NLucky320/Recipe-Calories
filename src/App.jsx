import { useEffect, useState } from "react"
import Banner from "./assets/components/Banner/Banner"
import Navbar from "./assets/components/Navbar/Navbar"
import Recipes from "./assets/components/Recipes/Recipes"





function App() {

const [recipes, setRecipes]=useState([])

useEffect(() => {
  fetch('../public/data.json')
    .then(res => res.json())
  .then(data=>setRecipes(data))
}, [])
  // console.log(recipes)
  
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
            recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe}></Recipes>)
            
          }
          
            </div>
          <div className="card bg-base-100 shadow-xl p-4 lg:w-[400px] xl:w-[500px]">
                        <h2 className='text-[24px] font-semibold text-[#282828] border-b-2 border-[#28282826]'>Want to cook: <span>01</span></h2>
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
                        <div className='flex justify-between gap-1 bg-[#28282808] p-4'>
                            <div>
                               <p>1</p>
                            </div>
                            <div>
                                <p>chicken</p>
                            </div>
                            <div>
                                <p>40</p>
                            </div>
                            <div>
                                <p>400</p>
                            </div>
                            <div>
                                <button className="btn bg-[#0BE58A] text-[#150B2B] rounded-[50px] " >Preparing</button>
                            </div>
                        </div>
                         <h2 className='text-[24px] font-semibold text-[#282828] border-b-2 border-[#28282826]'>Currently cooking: <span>01</span></h2>
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
                        <div className='flex justify-between gap-1 bg-[#28282808] p-4'>
                            <div>
                               <p>1</p>
                            </div>
                            <div>
                                <p>chicken</p>
                            </div>
                            <div>
                                <p>40</p>
                            </div>
                            <div>
                                <p>400</p>
                            </div>
                            
                        </div>
                        <div className='flex justify-end gap-6'>
                            <div><p>Total Time =
                                <br /><span>0</span> minutes</p>
                            </div>
                            <div>
                                <p>
                                    Total Calories =
                                    <br /><span>0</span> calories</p>
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
