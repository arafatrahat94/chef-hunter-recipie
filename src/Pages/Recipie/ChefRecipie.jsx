import React, { useState } from "react";
import { FaHouse, FaThumbsUp } from "react-icons/fa6";
import { useLoaderData, useNavigate } from "react-router-dom";
const customId = "custom-id-yes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DarkmodeButton from "../../Components/DarkmodeButton";
import LazyLoad from "react-lazy-load";

const ChefRecipie = () => {
  const navigate = useNavigate();
  const data = useLoaderData();
  const [disabledStates, setDisabledStates] = useState(
    Array(data.recipes.length).fill(false)
  );
  const handleDisable = (index) => {
    const updatedDisabledStates = [...disabledStates];
    updatedDisabledStates[index] = true;
    setDisabledStates(updatedDisabledStates);

    toast.dark("Added To Favourites", {
      icon: "💢",
      position: "top-center",
      toastId: customId,
    });
  };
  const sendData = (x) => {
    const again = localStorage.getItem("FavouriteRecipie");
    let storedUniqueApplyCart = [];
    if (again) {
      storedUniqueApplyCart = JSON.parse(again);
    }
    storedUniqueApplyCart.push(x);
    localStorage.setItem(
      "FavouriteRecipie",
      JSON.stringify(storedUniqueApplyCart)
    );
  };
  const handehome = () => {
    navigate(-1);
  };
  console.log(data);
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="min-h-screen">
      <div
        onClick={handehome}
        className="absolute ring right-0 ring-pink-600  customO:top-[100px] lg:hidden z-20 text-pink-600 top-[100px] shadow shadow-black backdrop-blur rounded-s-full flex justify-start"
      >
        <div className=" rounded-full ">
          <button className="px-2 py-2 flex items-center justify-center">
            <FaHouse className="flex items-center customO:text-xl" />
          </button>
        </div>
      </div>
      <div>
        {/*  */}
        <div className="absolute  lg:hidden z-20  text-pink-600 top-[375px] shadow shadow-black backdrop-blur rounded-e-full w-20 flex justify-end">
          <div className="sticky  rounded-full ps-1">
            <DarkmodeButton></DarkmodeButton>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid  lg:grid-cols-2 w-10/12 mx-auto">
            <div className="w-[300px]  mx-auto my-6">
              <LazyLoad
                threshold={0.95}
                onContentVisible={() => {
                  console.log("loaded!");
                }}
              >
                <img
                  src={data.chef_picture_sm}
                  className="rounded-xl w-full"
                  alt=""
                />
              </LazyLoad>
            </div>
            <div className="bg-black lg-border-none border border-pink-500 customO:bg-opacity-100 lg:bg-opacity-80 lg:backdrop-blur-lg customO:backdrop-blur-none px-4 pb-2 pt-2 mt-1 rounded-2xl">
              <h1 className=" font-DancingS text-center text-2xl py-2 text-white">
                About Chef
              </h1>
              <hr className="w-9/12 mx-auto mb-3" />
              <h1 className="px-3 font-DancingS text-4xl text-pink-600">
                {data.chef_name}
              </h1>
              <h1 className="px-3 text-justify text-white font-Nunito text-xl">
                {data.bio.slice(0, 130)}.
              </h1>
              <h1
                className="px-3 font-bold text-pink-600 text-2xl font-Nunito
            "
              >
                Experience :{" "}
                <span className="font-DancingS text-white">
                  {data.years_of_experience}+
                </span>
                Year
              </h1>
              <h1
                className="px-3 font-bold text-white text-2xl font-Nunito
            "
              >
                Invented Recipies :{" "}
                <span className="font-DancingS text-pink-600">
                  {data.recipes_count}+
                </span>
              </h1>
              <h1
                className="px-3 flex items-center gap-x-2 font-bold text-white text-2xl font-Nunito
            "
              >
                <FaThumbsUp /> :{" "}
                <span className="font-DancingS text-pink-600">
                  {data.likes}+
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/*
       */}

      <div>
        <h1 className="mt-14 text-xl text-center text-pink-600 font-Nunito font-bold">
          Some Top Recipie
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
                <th>Add To Favourite</th>
              </tr>
            </thead>

            {data.recipes.map((x, index) => (
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
                        onClick={() => handleDisable(index)}
                        className={`bg-pink-600 text-white w-full rounded-lg  py-2 ${
                          disabledStates[index] === true
                            ? "btn-disabled bg-opacity-40"
                            : ""
                        }`}
                      >
                        Add
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
    </div>
  );
};

export default ChefRecipie;
