
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipes = ({ recipe, handleCart }) => {
    // console.log(recipe)
    return (   
                <div className=' h-full border-2 border-[#282828CC]'>
                    
                        <div className="card bg-[#FFF]  border border-solid border-[#878787] text-left h-full">
               
                <div className="p-4 ">
                    <div className="w-full ">
                       
                                <img src={ recipe.recipe_image} alt="food" className="rounded-xl object-cover w-full h-full" />
                          
                         </div>
                                <h3>{recipe.recipe_name} </h3>
                    <p className="text-[#878787]">{recipe.short_description}</p>
                    <div className="text-[#878787]" ><hr  /></div>
                 
                    <h3>Ingredients: { recipe.ingredients.length}</h3>
                    <ul className="text-[#878787]">
                         {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
                                </ul>
                               <div className="text-[#878787]" ><hr  /></div>
                                <div className='flex justify-between text-[#282828CC]'>
                                    <div className='flex justify-between gap-2'>
                                        <p><IoMdTime /></p>
                            <p>{ recipe.preparing_time}</p>
                                    </div>
                                    <div className='flex justify-between gap-2'>
                                        <p> <AiOutlineFire /></p>
                                        <p>{recipe.calories} </p>
                                    </div>
                                </div>
                               <button className="btn bg-[#0BE58A] btn-primary text-[#150B2B] rounded-[50px]  w-[170px] hover:bg-black hover:text-white border-none" onClick={()=>{handleCart(recipe)}}>Want to Cook</button>
                            </div>
                        </div>
                    </div>      
              
        
    );
};

export default Recipes;