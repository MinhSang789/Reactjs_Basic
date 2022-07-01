import img from '../../asset/images/xabout.jpg.pagespeed.ic.-j2kfNwXDg.webp'
const about={
    background_url:img,
    title:'About Me',
    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    info:[
        {
            title:'Name:',
            content:'Ronaldo Fredrickson'
        },
        {
            title:'Date of birth:',
            content:'November 28, 1989'
        },
        {
            title:'Address:',
            content:'San Francisco CA 97987 USA'
        },
        {
            title:'Zip code:',
            content:'1000'
        },
        {
            title:'Email:',
            content:'ronaldo@gmail.com'
        },
        {
            title:'Phone:',
            content:'+1-2234-5678-9-0'
        }
    ],
    project: 120
}

const About=()=>{
    return(
        <section
            className="ftco-about img ftco-section ftco-no-pt ftco-no-pb"
            id="about-section"

        >
            <div className="container"
            style={{paddingTop:80}}>
                <div className="row d-flex no-gutters">
                    <div className="col-md-6 col-lg-6 d-flex">
                        <div className="img-about img d-flex align-items-stretch">
                            <div className="overlay" />
                            <div
                                className="img d-flex align-self-stretch align-items-center"
                                style={{
                                    backgroundImage: `url(${about.background_url})`
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 pl-md-5 py-5">
                        <div className="row justify-content-start pb-3">
                            <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                                <h2 className="mb-4">{about.title}</h2>
                                <p>
                                    {about.description}
                                </p>
                                <ul className="about-info mt-4 px-md-0 px-2">
                                    {
                                        about.info.map((value,index)=>(
                                            <li className="d-flex" key={index}>
                                                <span>{value.title}</span> <span>{value.content}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="counter-wrap ftco-animate d-flex mt-md-3 fadeInUp ftco-animated">
                            <div className="text">
                                <p className="mb-4">
              <span className="number" data-number={about.project}>
                  {about.project}
              </span>
                                    <span>Project complete</span>
                                </p>
                                <p>
                                    <a href="#" className="btn btn-primary py-3 px-3">
                                        Download CV
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About