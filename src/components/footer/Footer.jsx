import React from 'react'

const Footer = () => {
    return (
        <div className="dizme_tm_section">
            <div className="dizme_tm_copyright">
                <div className="container text-center" style={{ textAlign: 'center' }}>
                    <div className="inner">
                        <div className="left wow fadeInUp" data-wow-duration="1s">
                            <p >Developed with love by <span className='orangeText'> <b> Shoaib </b></span> &copy; {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer