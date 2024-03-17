import { useEffect, useState } from "react";
import Banner from "./assets/components/Banner/Banner";
import Navbar from "./assets/components/Navbar/Navbar";
import Recipes from "./assets/components/Recipes/Recipes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [cookingItems, setCookingItems] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  // console.log(recipes)

  const handleCart = (recipe) => {
    // console.log('recipe added')
    const isAdded = cart.find((item) => item.recipe_id == recipe.recipe_id);
    // console.log(isAdded)

    if (!isAdded) {
      setCart([...cart, recipe]);
    } else {
      toast("already added!");
    }
  };

  const handleDelete = (id) => {
    // console.log(id)
    const newCart = cart.filter((item) => item.recipe_id != id);
    //   console.log(newCart)
    setCart(newCart);
  };

  const handleCook = (recipe) => {
    setCookingItems([...cookingItems, recipe]);
    // Update total time and total calories
    setTotalTime((prevTime) => prevTime + parseInt(recipe.preparing_time));
    setTotalCalories(
      (prevCalories) => prevCalories + parseInt(recipe.calories),
    );
  };
  return (
    <>
      <div className=" mx-auto max-w-[1320px] space-y-4 p-4 ">
        <Navbar></Navbar>
        <Banner></Banner>
        <div className="space-y-6 text-center lg:pt-[70px]">
          <h2 className="text-[40px] font-semibold text-[#150B2B]">
            Our Recipes
          </h2>
          <p className="mx-auto leading-6 text-[#150B2B99] lg:w-[823px]">
            Whether you are planning a simple weeknight meal or preparing for a
            special occasion, a trip to the grocery store is always an adventure
            filled with endless possibilities for culinary creations.
          </p>
          <div className="   flex flex-col justify-between gap-4 pt-6 lg:flex-row">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {recipes.map((recipe) => (
                <Recipes
                  key={recipe.id}
                  recipe={recipe}
                  handleCart={handleCart}
                ></Recipes>
              ))}
              <ToastContainer />
            </div>
            <div></div>
            <div className="">
              <div className="card border border-solid border-[#28282833C] bg-[#FFF] py-4 shadow-xl lg:w-[450px]">
                <h2 className="border-b-2 border-[#28282826] text-[24px] font-semibold text-[#282828]">
                  Want to cook: {cart.length}
                </h2>
                <div className="-mt-4 px-16 pb-4 text-[#878787]">
                  <hr />
                </div>

                <div className="overflow-hidden">
                  <table className="table border-collapse bg-[#28282808] text-[#878787]">
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
                          <td className="hidden md:flex">
                            {" "}
                            <button
                              className="btn rounded-[50px] border-none bg-[#0BE58A]  text-[#150B2B] hover:bg-black hover:text-white md:px-4"
                              onClick={() => {
                                handleDelete(item.recipe_id);
                                handleCook(item);
                              }}
                            >
                              Preparing
                            </button>
                          </td>
                        </tr>
                        {/* Render a separate row for the button on mobile devices */}
                        <tr className="md:hidden">
                          <td colSpan="5" className="text-center">
                            <button
                              className="btn rounded-[50px] border-none bg-[#0BE58A] px-12 text-[#150B2B] hover:bg-black hover:text-white"
                              onClick={() => {
                                handleDelete(item.recipe_id);
                                handleCook(item);
                              }}
                            >
                              Preparing
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
                <div>
                  <h2 className="border-b-2 border-[#28282826] text-[24px] font-semibold text-[#282828]">
                    {" "}
                    Currently cooking: {cookingItems.length}
                  </h2>
                </div>
                <div className="-mt-4 px-16 pb-4 border-[#878787]">
                  <hr />
                </div>
                <div className="overflow-hidden">
                  <table className="table border-collapse bg-[#28282808] text-[#878787]">
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
                    {cookingItems.map((item, index) => (
                      <tbody key={index} className="text-[14px] md:text-[16px]">
                        <tr className="">
                          <th>{index + 1}</th>
                          <td>{item.recipe_name} </td>
                          <td>{item.preparing_time.slice(0, 2)}</td>
                          <td>{item.calories.slice(0, 3)}</td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>

                <div className="flex justify-end gap-6 px-2 text-[#282828CC] font-medium ">
                  <div>
                    <p>
                      Total Time =
                      <br />
                      {totalTime} minutes
                    </p>
                  </div>
                  <div>
                    <p>
                      Total Calories =
                      <br />
                      {totalCalories} calories
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
