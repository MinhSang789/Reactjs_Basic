import imgPj1 from '../../asset/images/xwork-1.jpg.pagespeed.ic.-P_sxB_seN.webp'
import imgPj2 from '../../asset/images/xwork-2.jpg.pagespeed.ic.Q2f7kLKqWn.webp'
import imgPj3 from '../../asset/images/xwork-3.jpg.pagespeed.ic.Fm4c11sd7p.webp'
import imgPj4 from '../../asset/images/xwork-4.jpg.pagespeed.ic.AAx_2TLnn9.webp'
import imgPj5 from '../../asset/images/xwork-5.jpg.pagespeed.ic.wj7u8-RD3L.webp'
import imgPj6 from '../../asset/images/xwork-6.jpg.pagespeed.ic.11SwA0AgXc.webp'
const Projects=()=>{
    const project= {
        title:'Our Projects',
        description:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,',
        content:[
            {
                img_url:imgPj1,
                h1:'Branding & Illustration Design',
                p:'Web Design'
            },
            {
                img_url:imgPj2,
                h1:'Branding & Illustration Design',
                p:'Web Design'
            },
            {
                img_url:imgPj3,
                h1:'Branding & Illustration Design',
                p:'Web Design'
            },
            {
                img_url:imgPj4,
                h1:'Branding & Illustration Design',
                p:'Web Design'
            },
            {
                img_url:imgPj5,
                h1:'Branding & Illustration Design',
                p:'Web Design'
            },{
                img_url:imgPj6,
                h1:'Branding & Illustration Design',
                p:'Web Design'
            },
        ]
    }
    return(
        <section className="ftco-section ftco-project" id="projects-section">
            <div className="container-fluid px-md-0">
                <div className="row no-gutters justify-content-center pb-5">
                    <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h1 className="big big-2">{project.title}</h1>
                        <h2 className="mb-4">{project.title}</h2>
                        <p>
                            {project.description}
                        </p>
                    </div>
                </div>
                <div className="row no-gutters">
                    {project.content.map((value,index)=>(
                        <div className="col-md-4">
                            <div
                                className="project img ftco-animate d-flex justify-content-center align-items-center fadeInUp ftco-animated"
                                style={{
                                    backgroundImage:
                                        `url(${value.img_url})`
                                }}
                            >
                                <div className="overlay" />
                                <div className="text text-center p-4">
                                    <h3>
                                        <a href="#">{value.h1}</a>
                                    </h3>
                                    <span>{value.p}</span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}
export default Projects
