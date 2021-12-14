import React, { useState, useEffect } from "react";
import { getCategories } from "../api/product.api";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";

const ProductList = () => {
  const [data, setData]: any = useState([]);
  const { catName }: any = useParams();

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    await getCategories("/products/category/" + catName)
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
      <div className="p-2">
        <h1 className="text-lg">Product/Category/{catName}</h1>
        <div className="grid grid-cols-2 gap-4 mt-3">
          {data.map((item: any, index: Number) => (
            <Link to={`/products/${item.id}`}>
              <div className="bg-yellow-200 p-2">
                <div className="flex justify-self-auto">
                  <div className="w-1/2">
                    <img src={item.image} className="w-full h-72" alt="item" />
                  </div>
                  <div className="w-1/2 p-2">
                    <h1 className="text-lg text-gray-800">{item.title}</h1>
                    <h1 className="text-lg text-gray-600">{item.category}</h1>
                    <p className="text-gray-400">{item.rating.rate}</p>
                    <p className="text-green-700">Rs. {item.price}</p>
                    <p className="text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
