import {useState, useEffect} from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [coinData, setCoinData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://rest.coinapi.io/v1/assets?filter_asset_id=BTC,ETH,USDT,BNB,USDC,XRP,ADA,SOL,LUNA,DOGE",
      {headers: {"X-CoinAPI-Key": "B7CD1DD3-D494-43A4-A467-3B2F9FAF4BAF"}}
    );
    setCoinData(response.data);
  };

  return (
    <div className="App">
      <h1>Top10 Crypto Currency Rates as on Today</h1>
      <h2>(Fetch API data and display using React - Project 2)</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}
      <div className="card-container">
        {coinData &&
          coinData.map((coinData, index) => {
            return (
              <div className="card" key={index}>
                <div className="card-title">
                  <h2>{coinData.name}</h2>
                  <h3>{coinData.asset_id}</h3>
                </div>
                <div className="card-details">
                  <h4 className="price">
                    <strong>
                      Price (USD): {coinData.price_usd.toLocaleString()}
                    </strong>
                  </h4>
                  <p>Date: {coinData.data_end}</p>
                  <p>
                    1 hr Volume: {coinData.volume_1hrs_usd.toLocaleString()}
                  </p>
                  <p>
                    1 day Volume: {coinData.volume_1day_usd.toLocaleString()}
                  </p>
                  <p>
                    1 mth Volume: {coinData.volume_1mth_usd.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
