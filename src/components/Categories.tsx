import React, { useState } from "react";
import useGetCategories from "../hooks/useGetCategories";

interface Props {}

const Categories = (props: Props) => {
  const { categories, loading }: any = useGetCategories();
  const [selectedCategory, setSelectedCategory]: any = useState([]);

  console.log(selectedCategory);

  const handleHover = (category: any) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div
        className="flex sticky top-0 z-50 bg-white items-center  py-5 overflow-x-auto scrollbar-thin 
    scrollbar-thumb-black scrollbar-track-gray-200"
      >
        {categories.map((category: any) => (
          <div
            className="cursor-pointer p-3 hover:bg-gray-200 flex 
          items-center justify-center text-center text-sm"
            onClick={() => handleHover(category)}
            key={category.id}
          >
            <h3 className="w-[150px]">{category.name}</h3>
          </div>
        ))}
      </div>

      {selectedCategory?.children_data?.length !== 0 ? (
        <div className="flex flex-wrap bg-gray-50 h-auto my-5">
          {selectedCategory?.children_data?.map((data: any) => (
            <div className="p-2 cursor-pointer">
              <h3 className="w-[200px] text-center">{data.name}</h3>
              <hr className="border border-gray-200" />
              {data.children_data?.map((cData: any) => (
                <div className="flex hover:bg-gray-200 cursor-pointer justify-center">
                  <h3 className="w-[100px] my-2 text-center">{cData.name}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center mt-5 ">No Children data</div>
      )}
    </>
  );
};

export default Categories;
