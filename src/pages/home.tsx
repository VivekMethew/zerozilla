import React, { useState, useEffect } from "react";
import { getCategories } from "../api/product.api";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData]: any = useState([]);

  useEffect(() => {
    getCatories();
  }, []);

  const getCatories = async () => {
    await getCategories("/products/categories")
      .then((data: any) => {
        setData(data?.data);
        console.log("DATA", data);
      })
      .catch((error: Error) => {
        console.log("Error :", error);
      });
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className="p-4">
        <h1 className="font-bold text-xl uppercase pb-4">Product categories</h1>
        <ul>
          {data?.map((item: any, index: number) => (
            <li>
              <Link to={`/product/categories/${item}`} className="text-xl">
                <span className="font-bold">{index + 1} .</span>{" "}
                <span className="capitalize">{item}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Home;
