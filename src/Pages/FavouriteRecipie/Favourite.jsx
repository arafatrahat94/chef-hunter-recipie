import React, { useEffect, useState } from "react";
import DarkmodeButton from "../../Components/DarkmodeButton";
import { FaHouse } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Favourite = () => {
  const [recipie, setRecipie] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("FavouriteRecipie"));
    setRecipie(data);
  }, []);

  const sendData = (x) => {
    const filter = recipie.filter((d) => d !== x);
    setRecipie(filter);
    localStorage.setItem("FavouriteRecipie", JSON.stringify(filter));
  };
  const navigate = useNavigate();
  const handehome = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen">
      <div className="absolute ring ring-pink-600 ring-s-0 customO:top-[90px] lg:hidden z-20 text-pink-600 right-0 top-[90px] shadow shadow-black backdrop-blur rounded-s-full w-14 flex justify-end">
        <div className=" rounded-full ps-1">
          <DarkmodeButton></DarkmodeButton>
        </div>
      </div>
      <div
        onClick={handehome}
        className="absolute ring right-0 ring-pink-600  customO:top-[150px] lg:hidden z-20 text-pink-600 top-[150px] shadow shadow-black backdrop-blur rounded-s-full flex justify-start"
      >
        <div className=" rounded-full ">
          <button className="px-2 py-2 flex items-center justify-center">
            <FaHouse className="flex items-center customO:text-xl" />
          </button>
        </div>
      </div>
      {recipie.length > 0 ? (
        <>
          <div>
            <h1 className="mt-14 text-xl text-center text-pink-600 font-Nunito font-bold">
              Favourite Recipies
            </h1>
            <div className="overflow-x-auto border border-pink-500 rounded-xl w-11/12 mx-auto mb-14">
              <table className="table">
                {/* head */}
                <thead className="text-xl text-pink-600 font-Nunito font-bold">
                  <tr>
                    <th></th>
                    <th>Recipie Name</th>
                    <th>Ingredient</th>

                    <th className="text-center border border-pink-500">
                      cooking method
                    </th>
                    <th>Remove</th>
                  </tr>
                </thead>

                {recipie?.map((x, index) => (
                  <>
                    <tbody key={index}>
                      {/* row 1 */}
                      <tr>
                        <th></th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div>
                              <div className="font-bold">
                                <h1>{x.recipe_name}</h1>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          {x.ingredients.map((xx) => (
                            <>
                              <li>{xx}</li>
                            </>
                          ))}
                        </td>
                        <td className="w-[400px] text-justify">
                          {x.cooking_method}
                        </td>
                        <th onClick={() => sendData(x)}>
                          <button
                            className={`bg-pink-600 text-white w-full rounded-lg  py-2 `}
                          >
                            Remove
                          </button>
                        </th>
                      </tr>
                      {/* row 2 */}
                    </tbody>
                  </>
                ))}
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <h1 className="mt-14 text-xl text-center text-pink-600 font-Nunito font-bold">
            You Have not added recipie yet
          </h1>
        </>
      )}
    </div>
  );
};

export default Favourite;
