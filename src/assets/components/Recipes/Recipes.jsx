import React from 'react';
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";

const Recipes = ({ recipe }) => {
    console.log(recipe)
    return (   
                <div className='h-full lg:w-[300px] xl:w-[350px]'>
                    
                        <div className="card bg-[#FFF] shadow-xl text-left h-full">
                            <figure className="">
                                <img src={ recipe.recipe_image} alt="food" className="rounded-xl object-cover w-full h-full" />
                            </figure>
                            <div className="card-body ">
                                <h3>{recipe.recipe_name} </h3>
                    <p>{ recipe.short_description}</p>
                    <h3>Ingredients: { recipe.ingredients.length}</h3>
                    <ul>
                         {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
                                </ul>
                            
                                <div className='flex justify-between '>
                                    <div className='flex justify-between gap-2'>
                                        <p><IoMdTime /></p>
                            <p>{ recipe.preparing_time}</p>
                                    </div>
                                    <div className='flex justify-between gap-2'>
                                        <p> <AiOutlineFire /></p>
                                        <p>{recipe.calories} </p>
                                    </div>
                                </div>
                               <button className="btn bg-[#0BE58A] btn-primary text-[#150B2B] rounded-[50px] px-6 w-[170px]" >Want to Cook</button>
                            </div>
                        </div>
                    </div>      
              
        
    );
};

export default Recipes;