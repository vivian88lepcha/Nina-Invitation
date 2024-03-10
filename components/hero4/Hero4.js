import Image from 'next/image'
import React from 'react'
import LocationMap from '../Modal1'
import shape1 from '/public/images/slider/flower1.png'
import shape2 from '/public/images/slider/flower2.png'


const Hero4 = (props) => {
    return (
        <section className="static-hero-s3">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="wpo-event-item">
                                    <div className="wpo-event-text">
                                        <h2>Alexander & Jenny</h2>
                                        <p>We Are Getting Married Nov 22,2023</p>
                                        <ul>
                                            <li>Monday, 25 Sep, 2023 <br/>
                                                1:00 PM – 4:30 PM</li>
                                            <li>Estern Star Plaza, Road 123, USA</li>
                                            <li><LocationMap /></li>
                                        </ul>
                                    </div>
                                    <div className="shape-1"><Image src={shape1} alt="" /></div>
                                    <div className="shape-2"><Image src={shape2} alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero4;