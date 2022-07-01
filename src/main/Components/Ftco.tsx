import ftcImg from '../../asset/images/xbg_1.jpg.pagespeed.ic.4dZ7CYM3I2.webp'
const Ftco=()=>{
    const ftco={
        imgurl:ftcImg,
        description:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
    }
    return(
        <section
            className="ftco-section ftco-hireme img"
            style={{
                backgroundImage: `url(${ftco.imgurl})`
            }}
        >
            <div className="overlay" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 ftco-animate text-center fadeInUp ftco-animated">
                        <h2>
                            I'm <span>Available</span> for freelancing
                        </h2>
                        <p>
                            {ftco.description}
                        </p>
                        <p className="mb-0">
                            <a href="#" className="btn btn-primary py-3 px-5">
                                Hire me
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Ftco
