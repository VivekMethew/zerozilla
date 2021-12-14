import React, { useState, useEffect } from "react";
import { getCategories } from "../api/product.api";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";

const ProductView = () => {
  const [data, setData]: any = useState(null);
  const { prodId }: any = useParams();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    await getCategories("/products/" + prodId)
      .then((data: any) => {
        setData(data?.data);
        console.log(data?.data);
      })
      .catch((error: Error) => {
        console.log("Error :", error);
      });
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="pt-4">
        <div className="bg-yellow-200 p-2 h-96">
          <div className="flex justify-self-auto">
            <div className="w-1/2">
              <img src={data?.image} className="w-full h-80" alt="item" />
            </div>
            <div className="w-1/2 p-2">
              <h1 className="text-lg text-gray-800">{data?.title}</h1>
              <h1 className="text-lg text-gray-600 font-bold">
                {data?.category}
              </h1>
              <p className="text-gray-400">{data?.rating?.rate}</p>
              <p className="text-green-700">Rs. {data?.price}</p>
              <p className="text-base">{data?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductView;
