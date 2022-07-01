

const Services=()=>{
    const service= {
        nameSection: 'Services',
        desSection:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        item:[
            {
                icon:'flaticon-analysis',
                title:'Web Design',
                description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },{
                icon:'flaticon-flasks',
                title:'Phtography',
                description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },{
                icon:'flaticon-ideas',
                title:'Web Developer',
                description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },{
                icon:'flaticon-innovation',
                title:'App Developing',
                description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },{
                icon:'flaticon-ux-design',
                title:'Branding',
                description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            },{
                icon:'flaticon-idea',
                title:'Product Strategy',
                description:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
            }

        ]
    }
    return(
        <section className="ftco-section" id="services-section">
            <div className="container-fluid px-md-5">
                <div className="row justify-content-center py-5 mt-5">
                    <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h1 className="big big-2">{service.nameSection}</h1>
                        <h2 className="mb-4">{service.nameSection}</h2>
                        <p>
                            {service.desSection}
                        </p>
                    </div>
                </div>
                <div className="row">
                    {service.item.map((value,index)=>(
                        <div className="col-md-4 text-center d-flex ftco-animate fadeInUp ftco-animated">
                            <a href="#" className={`services-1 shadow`}>
                              <span className="icon">
                                <i className={value.icon} />
                              </span>
                                <div className="desc">
                                    <h3 className="mb-5">{value.title}</h3>
                                    <p>
                                        {value.description}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default Services