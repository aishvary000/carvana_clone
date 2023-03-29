import classes from './Mid_two.module.css';
import img from '../assets/homepage_family_four_sitting_couch_lg_c4389d415f.webp'

const Mid_two = () =>{

    return(
        <>
            <div className={classes.container}>
                <div className={classes["left__content"]}>
                    <div className={classes["left__content--primary"]}>
                    <h4>
                    Shop the way you want - when you want
                    </h4>
                    </div>
                    <div className={classes["left__content--secondary"]}>
                    Find the certified used vehicle you love and get it delivered* (where available) – or visit one of CarBravo's hundreds of showrooms.
                    </div>
                    <button className={classes["left__content--button"]}>
                        Shop Now
                    </button>
                        


                </div>
                <div className={classes["right__content"]}>
                    <img src={img} alt="family sitting together" />
                </div>
            </div>
        </>

    );

}

export default Mid_two;