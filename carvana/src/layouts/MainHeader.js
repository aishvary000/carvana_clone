import './MainHeader.css'
import fav from '../SVG/heart-outlined.svg'
import menu from '../SVG/menu.svg' 

const MainHeader = () => {

    return(
        <>
            <div className="container">
                <div className="logo">
                    <img src="https://www.carbravo.com/s3/uploads/US/Car_Bravo_Logo_7714028d5c.svg" alt="logo"/>
                </div>
                <ul className='nav nav__items'>
                        <li className="nav__item"><a href="#">Search Cars</a></li>
                        <li className="nav__item"><a href="#">How it works</a></li>
                        <li className="nav__item"><a href="#">Sell your car</a></li>
                        <li className="nav__item"><a href="#">Ownership</a> </li>
                </ul>
                <div className="nav nav__right">
                    <img src={fav} alt="favorites" />
                    <div className="nav__right__text">
                        My Account
                    </div>
                    <img src={menu} alt="menu" />
                    
                </div>
            </div>
        </>
    )

}
export default MainHeader;