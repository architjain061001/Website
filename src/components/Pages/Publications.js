import React from "react";
import "./Publications.css"
import Copyright from '../Copyright'
import KPHAN from '../../Images/KPHAN.png' 
import deadroses from '../../Images/deadroses.jpg'  
// import bookshelf from '../../Images/bookshelf.jpeg'  

export default function Publications() {

    return (
        <>
            <div className='pub-page'>
                <div className='pub-page-img-sec'>
                    <img src={KPHAN} alt='' className='pub-page-img'/>
                </div>
                <div className='pub-page-title-sec'>
                    <h1 className='pub-page-sub-title'>Check out my latest release</h1>
                    <h1 className='pub-page-title'>Kuch Pal Hare aur Neele</h1>
                    <div className='pub-buy-sec'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div>
                            <a href='/contact-me' className='pub-buy-link'>
                                <button className='pub-buy'> 
                                    Amazon.com
                                </button>
                            </a>
                            <a href='/contact-me' className='pub-buy-link'>
                                <button className='pub-buy'> 
                                    Amazon.in
                                </button>
                            </a>
                            <a href='/contact-me' className='pub-buy-link'>
                                <button className='pub-buy'> 
                                    Pothi
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pub-page-info'>
                <h1 className='pub-books'>Anthologies</h1>
                <div className='pub-book-sec'>
                    <div className='pub-book'>
                        <div className='pub-book-img-sec'>
                                <img src={deadroses} alt='' className='pub-book-img'/>
                        </div>
                        <div className='pub-book-info-sec'>
                            <h2 className='pub-book-title'> Dead Roses</h2>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Author: </h3>
                                <h3 className='pub-book-info'> Archit Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Publisher: </h3>
                                <h3 className='pub-book-info'> Jyotir Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Illustrator: </h3>
                                <h3 className='pub-book-info'> Ayushi Modi </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> About this book: </h3>
                                <h3 className='pub-book-desc'> dead roses helps you live the journey 
                                of the hate that stems from a heartbreak until it begins healing 
                                and feels loved again. </h3>
                            </div>
                            <div className='pub-book-buy-sec'>
                                <a href='/contact-me' className='pub-book-buy-link'>
                                    <button className='pub-book-buy'> 
                                        Amazon.com
                                    </button>
                                </a>
                                <a href='/contact-me' className='pub-book-buy-link'>
                                    <button className='pub-book-buy'> 
                                        Amazon.in
                                    </button>
                                </a>
                                <a href='/contact-me' className='pub-book-buy-link'>
                                    <button className='pub-book-buy'> 
                                        Pothi
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='pub-book'>
                        <div className='pub-book-img-sec'>
                                <img src={deadroses} alt='' className='pub-book-img'/>
                        </div>
                        <div className='pub-book-info-sec'>
                            <h2 className='pub-book-title'> Dead Roses</h2>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Author: </h3>
                                <h3 className='pub-book-info'> Archit Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Publisher: </h3>
                                <h3 className='pub-book-info'> Jyotir Jain </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> Illustrator: </h3>
                                <h3 className='pub-book-info'> Ayushi Modi </h3>
                            </div>
                            <div className='pub-book-owner'>
                                <h3 className='pub-book-sub-title'> About this book: </h3>
                                <h3 className='pub-book-desc'> dead roses helps you live the journey 
                                of the hate that stems from a heartbreak until it begins healing 
                                and feels loved again. </h3>
                            </div>
                            <div className='pub-book-buy-sec'>
                                <a href='/contact-me' className='pub-book-buy-link'>
                                    <button className='pub-book-buy'> 
                                        Amazon.com
                                    </button>
                                </a>
                                <a href='/contact-me' className='pub-book-buy-link'>
                                    <button className='pub-book-buy'> 
                                        Amazon.in
                                    </button>
                                </a>
                                <a href='/contact-me' className='pub-book-buy-link'>
                                    <button className='pub-book-buy'> 
                                        Pothi
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