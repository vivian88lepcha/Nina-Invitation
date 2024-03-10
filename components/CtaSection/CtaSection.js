import React from 'react'
import Link from 'next/link'


const CtaSection = (props) => {
    return(
        <div className="wpo-cta-section">
            <div className="conatiner-fluid">
                <div className="wpo-cta-item">
                    <h2>Lets Celebrate Your Love</h2>
                    <Link href="/home" className="theme-btn-s2">Join With Us</Link>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;