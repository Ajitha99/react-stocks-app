import Stocks from "./Stocks";

function Header(){
    return(
        <div className="main-header">
            <header>STOCKS</header>
            <Stocks />
            <input type="text" placeholder="Search"></input> 
        </div>
        
    )
}

export default Header;