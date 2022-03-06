import { useEffect,useState } from "react";
import React from "react";
import Table from 'react-bootstrap/Table'
import {CountryCurrencySelector} from './CountryCurrencySelector'



export const CoinList=()=>{
  const[coins,setCoins]=useState(null);
  const[loading, setLoading]=useState(false);
  const[error,setError]=useState(null);

  useEffect(()=>{


    setLoading(true);
    fetch(`https://api.coinlore.net/api/tickers/`, {
        "method": "GET",
        headers: {
          'Content-Type': 'application/json',
           'Content-Type': 'application/x-www-form-urlencoded',
        }
    }).then(response=>response.json()).then((c)=>setCoins(c.data)).then(()=>{setLoading(false)}).then(console.log(coins)).catch(setError);
    
   

  },[error]);

  //appropriate state would yield appropriate call
if(loading) return (<></>);
if(!coins) return null
if(coins)
return(

    <>

<CountryCurrencySelector/>

    <Table striped bordered hover variant="dark">



  <thead>
    <tr>
     
      <th>Coin</th>
      <th>Rank</th>
      <th>Price in USD</th>
      <th>Price in BTC</th>
      <th>Percentage Change 7 days</th>
    </tr>
  </thead>
  <tbody>
    

    {coins.map((data,key)=>(

<tr key={key}>
      <td>{data.name}</td>
      <td>{data.rank}</td>
      <td>{data.price_usd}</td>
      <td>{data.price_btc}</td>
      <td>{data.percent_change_7d}</td>

      
      
      </tr>
  

            
))}
     
  </tbody>
</Table>
</>
);





}