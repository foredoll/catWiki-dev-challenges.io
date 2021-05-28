import axios from "axios";
import { useState, useEffect } from "react";
import Breedsdiscover from "../components/Home/Breedsdiscover";
import Header from "../components/Home/Header";
import WhyShould from "../components/Home/WhyShould";
import "./Home.scss";

const Home = () => {
   const [cats, setCats] = useState("");
   const [isLoading, setIsLoading] = useState(true);
   const fetchCats = async () => {
      try {
         const response = await axios
            .get("https://api.thecatapi.com/v1/breeds", {
               headers: {
                  "x-api-key": "2635e2e2-9140-447d-85d6-430108ca84bf",
                  limit: "4",
               },
            })
            .then((cat) => {
               setCats(cat);
               setIsLoading(false);
            });
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      fetchCats();
   }, []);
   return (
      <div>
         {isLoading ? (
            <div className="loadingContainer">
               <img alt="loading" src="loading.gif" />
            </div>
         ) : (
            <div>
               <Header />
               <Breedsdiscover cats={cats} />
               <WhyShould />
            </div>
         )}
      </div>
   );
};

export default Home;
