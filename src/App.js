import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config"
import { onValue, ref } from "firebase/database"

function App() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    onValue(ref(db, 'shoes'), (snapshot) => {
      let records = [];

      snapshot.forEach(shoe => {
        let keyName = shoe.key;
        let data = shoe.val();

        records.push({"key": keyName, "data": data});
      });
      setShoes(records);
    });
  }, []);

	return(
    <div className="container">
      {shoes.map((shoe, index) => {
        return (
          <div className="card" key={index}>
              <div className="card-header">
                  <img src={shoe.data.image} alt="rover" />
              </div>
              <div className="card-body">
                <div className="shoe-name">
                  {
                    shoe.data.size === "BOYS" &&
                    <p className="tag tag-teal">BOYS</p>
                  }
                  {
                    shoe.data.size === "MEN" &&
                    <p className="tag tag-red">MEN</p>
                  }
                  {
                    shoe.data.size === "WOMEN" &&
                    <p className="tag tag-purple">WOMEN</p>
                  }
                  <h2 className="title">{shoe.data.name.toUpperCase()}</h2>
                  <h3 className="shoe-skus">{shoe.data.skus}</h3>
                </div>
                <p className="center-bold shoe-price">{shoe.data.price}</p>
                <div className="cope-details-container">
                  {
                    shoe.data.launch_date !== "NO LAUNCH" &&
                    <div className="cope-details">
                      <p className="bold">Launch Date</p>
                      <p>{shoe.data.launch_date}</p>
                    </div>
                  }
                  {
                    shoe.data.launch_date !== "NO LAUNCH" &&
                    <div className="cope-details">
                      <p className="bold">Launch Type</p>
                      <p>{shoe.data.launch_type}</p>
                    </div>
                  }
                  {
                    shoe.data.launch_date !== "NO LAUNCH" &&
                    <div className="cope-details">
                      <p className="bold">Start Time</p>
                      <p>{shoe.data.start_time}</p>
                    </div>
                  }
                  {
                    shoe.data.launch_type === "DAN" &&
                    <div className="cope-details">
                      <p className="bold">Duration</p>
                      <p>{shoe.data.duration}</p>
                    </div>
                  }
                  {
                    shoe.data.publish_date !== "NO PUBLISH" &&
                    <div className="cope-details">
                      <p className="bold">Publish Date</p>
                      <p>{shoe.data.publish_date}</p>
                    </div>
                  }
                  {
                    shoe.data.release_date !== "NO RELEASE" &&
                    <div className="cope-details">
                      <p className="bold">Release Date</p>
                      <p>{shoe.data.release_date}</p>
                    </div>
                  }
                </div>
                {
                  shoe.data.stock !== "NO STOCK BITCHES" &&
                  <div className="stock-container">
                    <p className="stock-title">Stock</p>
                    <div className="stock-list">
                    {
                      Array.from(shoe.data.stock).map((stock, index) => {
                        if (stock[0] === "LOW")
                        {
                          return (
                            <div className="stock" key={index}>
                              <p className="low bold">{stock[1]}</p>
                            </div>
                          )
                        }
                        else if (stock[0] === "MEDIUM")
                        {
                          return (
                            <div className="stock" key={index}>
                              <p className="medium bold">{stock[1]}</p>
                            </div>
                          )
                        }
                        else if (stock[0] === "HIGH")
                        {
                          return (
                            <div className="stock" key={index}>
                              <p className="high bold">{stock[1]}</p>
                            </div>
                          )
                        }
                        else
                        {
                          return (
                            <div className="stock" key={index}>
                              <p className="oos bold">{stock[1]}</p>
                            </div>
                          )
                        }                        
                      })
                    }
                    </div>
                  </div>    
                }   
                {
                  shoe.data.stock === "NO STOCK BITCHES" &&
                  <div className="stock-container">
                    <p className="stock-title">
                      NO STOCK TQ
                    </p>
                  </div>
                }      
                <p className="center-bold">Made In {shoe.data.made_in}</p>
                <div className="lft-container">
                  <p className="last-fetch-time">API Last Update</p>
                  <p className="last-fetch-time">{shoe.data.last_fetch_time}</p>
                </div>
              </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
