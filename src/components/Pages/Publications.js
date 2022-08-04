import React from "react";
import "./Publications.css"
import Copyright from '../Copyright'
import KPHANBack from '../../Images/KPHANBack.png' 
import KPHAN from '../../Images/KPHAN.png' 
import deadroses from '../../Images/deadroses.png'  
import Amazon from '../../Images/Amazon.png'  
import pothi from '../../Images/pothi.png'  

export default function Publications() {

    return (
        <>
            <div className='pub-page'>
                <div className='pub-page-img-sec'>
                    <img src={KPHANBack} alt='' className='pub-page-img'/>
                </div>
                <div className='pub-page-title-sec'>
                    <h1 className='pub-page-sub-title'>Check out my latest release</h1>
                    <h1 className='pub-page-title'>Kuch Pal Hare aur Neele</h1>
                    <div className='pub-buy-sec'>
                        <div>
                            <a href='#buy' className='pub-buy-link'>
                                <button className='pub-buy'> 
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    Buy Now
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pub-page-info'>
                <h1 id="buy" className='pub-books'>Anthologies</h1>
                <div className='pub-book-sec'>
                    <div className='pub-book'>
                        <div className='pub-book-img-sec'>
                                <img src={KPHAN} alt='' className='pub-book-img'/>
                        </div>
                        <div className='pub-book-info-sec'>
                            <h2 className='pub-book-title'> Kuch Pal Hare aur Neele</h2>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Author </h3>
                                <h3 className='pub-book-info'> Archit Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Publisher </h3>
                                <h3 className='pub-book-info'> Jyotir Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Illustrator </h3>
                                <h3 className='pub-book-info'> Disha Narain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Language </h3>
                                <h3 className='pub-book-info'> Hindi (Script: English) </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> About this book </h3>
                                <h3 className='pub-book-desc'> yeh zindagi mein kuch pal khushi laate hai toh kuch gam. 
                                aise hi yeh kitaab unn sabhi palo par roshni daalti hai 
                                jo kuch hare hai toh kuch neele.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='pub-book-buying'>
                        <h1 className='pub-book-buying-title'>Buying Options</h1>
                        <div className='pub-book-buy-link-sec'>
                            <h3 className='pub-book-buy-sub-title'>Ebook Options</h3>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={Amazon} alt='' className='pub-book-buy-img'/>
                                <a href='https://www.amazon.com/dp/B0B3NYJJ4R' 
                                   className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        International
                                    </button>
                                </a>
                                <a href='https://www.amazon.in/dp/B0B3NYJJ4R' 
                                   className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        India
                                    </button>
                                </a>
                            </div>
                            <h3 className='pub-book-buy-sub-title'>Paperback Options</h3>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={Amazon} alt='' className='pub-book-buy-img'/>
                                <a href='https://www.amazon.com/Kuch-Pal-Hare-Aur-Neele/dp/B0B3S1Y4ZV/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' 
                                   className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        International
                                    </button>
                                </a>
                            </div>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={pothi} alt='' className='pub-book-buy-img'/>
                                <a href='https://store.pothi.com/book/archit-jain-kuch-pal-hare-aur-neele/' 
                                   className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        India
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pub-book-sec'>
                    <div className='pub-book'>
                        <div className='pub-book-img-sec'>
                                <img src={deadroses} alt='' className='pub-book-img'/>
                        </div>
                        <div className='pub-book-info-sec'>
                            <h2 className='pub-book-title'> Dead Roses</h2>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Author </h3>
                                <h3 className='pub-book-info'> Archit Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Publisher </h3>
                                <h3 className='pub-book-info'> Jyotir Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Illustrator </h3>
                                <h3 className='pub-book-info'> Ayushi Modi </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Language </h3>
                                <h3 className='pub-book-info'> English </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> About this book </h3>
                                <h3 className='pub-book-desc'> dead roses helps you live the journey 
                                of the hate that stems from a heartbreak until it begins healing 
                                and feels loved again. </h3>
                            </div>
                        </div>
                    </div>
                    <div className='pub-book-buying'>
                        <h1 className='pub-book-buying-title'>Buying Options</h1>
                        <div className='pub-book-buy-link-sec'>
                            <h3 className='pub-book-buy-sub-title'>Ebook Options</h3>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={Amazon} alt='' className='pub-book-buy-img'/>
                                <a href='https://www.amazon.com/dp/B0888KSNRP' className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        International
                                    </button>
                                </a>
                                <a href='https://www.amazon.in/dp/B0888KSNRP' className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        India
                                    </button>
                                </a>
                            </div>
                            <h3 className='pub-book-buy-sub-title'>Paperback Options</h3>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={Amazon} alt='' className='pub-book-buy-img'/>
                                <a href='https://www.amazon.com/Dead-Roses-Archit-Jain/dp/B08FP3WPCQ/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=' className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        International
                                    </button>
                                </a>
                            </div>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={pothi} alt='' className='pub-book-buy-img'/>
                                <a href='https://store.pothi.com/book/archit-jain-dead-roses/' className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        India
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pub-book-sec'>
                    <div className='pub-book'>
                        <div className='pub-book-img-sec'>
                                <img src={deadroses} alt='' className='pub-book-img'/>
                        </div>
                        <div className='pub-book-info-sec'>
                            <h2 className='pub-book-title'> Unheard Voices</h2>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Author </h3>
                                <h3 className='pub-book-info'> Archit Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Publisher & Illustrator </h3>
                                <h3 className='pub-book-info'> Jyotir Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Language </h3>
                                <h3 className='pub-book-info'> English </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> About this book </h3>
                                <h3 className='pub-book-desc'> Sometimes our emotions 
                                have so many stories, our words can’t explain. Unheard Voices
                                are a reflection of these stories giving voice to emotions
                                which we deeply hold but cannot articulate.</h3>
                            </div>
                        </div>
                    </div>
                    <div className='pub-book-buying'>
                        <h1 className='pub-book-buying-title'>Buying Options</h1>
                        <div className='pub-book-buy-link-sec'>
                            <h3 className='pub-book-buy-sub-title'>Ebook Options</h3>
                            <div className='pub-book-buy-link-sub-sec'>
                                <img src={Amazon} alt='' className='pub-book-buy-img'/>
                                <a href='https://www.amazon.com/dp/B0839N65F2' className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        International
                                    </button>
                                </a>
                                <a href='https://www.amazon.in/dp/B0839N65F2' className='pub-book-buy-link' target="_blank">
                                    <button className='pub-book-buy'> 
                                        India
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Copyright/>
        </>
    )
}