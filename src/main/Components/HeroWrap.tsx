
const HeroWrap=()=>{

    const heroInfo={
        sayhello:'Hey! I am',
        name:'Ronaldo Fredrickson'
    }
    return(
        <section className="hero-wrap js-fullheight" style={{ height: 800 ,paddingBottom:150}} id="hero">
            <div className="overlay" />
            <div className="container">
                <div
                    className="row no-gutters slider-text js-fullheight justify-content-center align-items-center"
                    style={{ height: 800 }}
                >
                    <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
                        <div className="text text-center">
                            <span className="subheading">{heroInfo.sayhello}</span>
                            <h1>{heroInfo.name}</h1>
                            <h2>
                                I'm a
                                <span
                                    className="txt-rotate"
                                    data-period={2000}
                                    data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'
                                >
              <span className="wrap">Web Designer.</span>
            </span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default HeroWrap