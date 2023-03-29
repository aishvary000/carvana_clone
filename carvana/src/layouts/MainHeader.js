import fav from '../SVG/heart-outlined.svg'
import menu from '../SVG/menu.svg'
import classes from './MainHeader.module.css' 

const MainHeader = () => {

    return(
        <>
            <div className={classes.container}>
                <div className="logo">
                    <img src="https://www.carbravo.com/s3/uploads/US/Car_Bravo_Logo_7714028d5c.svg" alt="logo"/>
                </div>
                <ul className={`${classes.nav} ${classes["nav__items"]}`}>
                        <li className={classes["nav__item"]}><a href="#">Search Cars</a></li>
                        <li className={classes["nav__item"]}><a href="#">How it works</a></li>
                        <li className={classes["nav__item"]}><a href="#">Sell your car</a></li>
                        <li className={classes["nav__item"]}><a href="#">Ownership</a> </li>
                </ul>
                <div className={`${classes.nav} ${classes["nav__right"]}`}>
                    <img src={fav} alt="favorites" />
                    <div className={classes["nav__right__text"]}>
                        My Account
                    </div>
                    <img src={menu} alt="menu" />
                    
                </div>
            </div>
        </>
    )

}
export default MainHeader;