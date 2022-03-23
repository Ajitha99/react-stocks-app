import { useState } from "react";

function Stock({symbol,companyName,latestPrice,change}){

    return(
        <div className="stock-div">
            <div className="stock-div1">
                <h2>{symbol}</h2>
                <h5>{companyName}</h5>
            </div>
            <div className="stock-div2">
                <h3>{latestPrice}</h3>
                {/* <h3><span className= {change > 0 ? 'background-green': 'background-red'} >{change}</span></h3> */}
                <h3><button className= {change > 0 ? 'background-green': 'background-red'} >{change}%</button></h3>
            </div>  
        </div>
    )
}

export default Stock;

{/* <h3><span className= {((Math.sign(changeVal) === 1) && (Math.sign(changeVal) === 0)) ? 'background-green': 'background-red'} >{change}</span></h3> */}

