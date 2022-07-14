import React from "react";
import "./Publications.css"
import Copyright from '../Copyright'
// import PubBack from '../../Images/PubBack.jpeg' 
import book from '../../Images/deadroses.jpg' 

export default function Publications() {
    return (
        <>
            <div className='gallery'>
                <div className='book-section'>
                    <div className='book-img-section'>
                        <img src={book} alt="" className='book-img' />
                    </div>
                    <div className='book-detail-section'>
                        <h2 className='book-title'> Kuch Pal Hare aur Neele </h2>
                        <p className='book-description'>
                            yeh kavithaein kuch woh pal ke baare mein baat karti 
                            hain jo hum sabhi ek na ek din mehsoos karte hain. 
                            yeh kuch woh kahaniyan hai jo sunni aur sunani hai, 
                            par iske liye shabd labzo tak nahi pohonchte. yeh 
                            zindagi mein kuch pal khushi laate hai toh kuch gam. 
                            aise hi yeh kitaab unn sabhi palo par roshni daalti 
                            hai jo kuch hare hai toh kuch neele.
                        </p>
                    </div>
                </div>
                <div className='book-section'>
                    hello
                </div>
                <div className='book-section'>
                    hello
                </div>
            </div>
            {/* <div className='top-col'>
                <img src={PubBack} alt="" className='pub-img' />
            </div> */}
        </>
    )
}