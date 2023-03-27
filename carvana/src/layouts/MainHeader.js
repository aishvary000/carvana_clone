import './MainHeader.css'
import favourite from '../assets/fav.svg'

const MainHeader = () => {

    return(
        <>
            <div className="container">
                <div className="logo">
                    <img src="https://www.carbravo.com/s3/uploads/US/Car_Bravo_Logo_7714028d5c.svg" alt="car_pic" className="logo__image" />
                    
                </div>
                <div className="nav nav--center">
                    <ul className='nav__items'>
                        <li className="nav__item">Search Cars</li>
                        <li className="nav__item">How it works</li>
                        <li className="nav__item">Sell your car</li>
                        <li className="nav__item">Ownership</li>
                    </ul>
                </div>
                <div className="nav nav--right">
                    <div className="nav--right__text">
                        My Account
                    </div>
                    
                </div>
            </div>
        </>
    )

}
export default MainHeader;