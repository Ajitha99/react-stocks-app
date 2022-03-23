import { useState } from "react";

function Stock({symbol,companyName,latestPrice,change}){
    // const [background, setBackground] = useState("#0bdd15");
    const changeVal = {change};

    return(
        <div className="stock-div">
            <div className="stock-div1">
                <h2>{symbol}</h2>
                <h5>{companyName}</h5>
            </div>
            <div className="stock-div2">
                <h3>{latestPrice}</h3>
                <h3><span className= {(changeVal > 0)? 'background-green': 'background-red'} >{change}</span></h3>
            </div>  
        </div>
    )
}

export default Stock;




{/* { ({change} > 0)? background : setBackground('#b82f1c')} */}