import { useEffect, useState } from 'react';
import axios from 'axios';
import {CLIENT_URL,TOKEN} from '../Services/constants.js'
import Stock from './Stock.js';


function Stocks(){

    const [stockData , setStockData] = useState([]);
    const orgArray = ['ndaq','spy','fb','snap']

    useEffect(()=>{

        const fetchData = async () =>{
            try {
                const response = await axios.all(orgArray.map((company) => {

                    return axios.get(`${CLIENT_URL}${company}${TOKEN}`)
                }))
                
                setStockData(response);
                //console.log(stockData);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();

    },[])

 return(
        <div className="stocks-main-div">
            {
                stockData.map((obj, index) =>{
                   return <Stock 
                          symbol= {obj.data.symbol}
                          companyName = {obj.data.companyName}  
                          latestPrice = {obj.data.latestPrice}
                          change = {obj.data.change}  
                          key = {index}   
                   />

                })
            }
        </div>
    )
}

export default Stocks;
