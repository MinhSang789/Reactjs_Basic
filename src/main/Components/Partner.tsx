import logo1 from '../../asset/images/xpartner-1.png.pagespeed.ic.b7FlbbQVdf.webp'
import logo2 from '../../asset/images/xpartner-2.png.pagespeed.ic.4tCtqXfPLh.webp'
import logo3 from '../../asset/images/xpartner-3.png.pagespeed.ic.K6b-CsdlC4.webp'
import logo4 from '../../asset/images/xpartner-4.png.pagespeed.ic.DaTQYymmyu.webp'
import logo5 from '../../asset/images/xpartner-5.png.pagespeed.ic.A4xeUmT9Fd.webp'


const Partner=()=>{
    const listlogo=[
        logo1,logo2,logo3,logo4,logo5
    ]
    return(
        <section className="ftco-section ftco-partner">
            <div className="container">
                <div className="row">

                    {listlogo.map((arr,index)=>(
                        <div className="col-sm ftco-animate fadeInUp ftco-animated">
                            <a href="#" className="partner">
                                <img
                                    src={arr}
                                    className="img-fluid"
                                    alt="Colorlib Template"
                                />
                            </a>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}
export default Partner