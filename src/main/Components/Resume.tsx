import compile = WebAssembly.compile;

const Resume=()=>{
    const resume=[
        {
            name:'Education',
            content:[
                {
                    time:'2014-2015',
                    title:'Bachelor of Science in Computer Science',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Computer Processing Systems/Computer Software',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Diploma in Computer',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Art & Creative Director',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },

            ]
        },
        {
            name:'Experience',
            content:[
                {
                    time:'2014-2015',
                    title:'Software Developer',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Web Designer',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Web Marketing',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Art & Creative Director',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Wordpress Developer',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2017-2018',
                    title:'UI/UX Designer',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
            ]
        }
        ,
        {
            name:'Awards',
            content:[
                {
                    time:'2014-2015',
                    title:'Top 10 Web Developer',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Top 5 LeaderShip Exellence Winner',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Top 4 Web Tester',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },
                {
                    time:'2014-2015',
                    title:'Art & Creative Director',
                    subtitle:'Cambridge University',
                    description:'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
                },

            ]
        },
        {
            name:'Skills',
            content:[]
        }
    ]
    const skill=[
        {
            category:'circle',
            content:[{
                title:'CSS',
                percent:90,
                lastweek:28,
                lastmonth:60
            },
                {
                    title:'HTML',
                    percent:80,
                    lastweek:28,
                    lastmonth:60
                },
                {
                    title:'jQuery',
                    percent:75,
                    lastweek:28,
                    lastmonth:60
                },
            ]
        },
        {
            category:'line',
            content:[{
                title:'Photoshop',
                percent:90

            },
                {
                    title:'jQuery',
                    percent:85

                },
                {
                    title:'HTML5',
                    percent:95

                },
                {
                    title:'SCSS3',
                    percent:90

                },
                {
                    title:'Wordpress',
                    percent:70

                },
                {
                    title:'SEO',
                    percent:80

                },
            ]
        }
    ]
    return(
        <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <nav id="navi">
                            <ul>
                                {
                                    resume.map((value,index)=>(
                                        <li>
                                            <a href={`#page-${index+1}`} className="">
                                                {value.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-9">
                        {
                            resume.map((value,index)=>(
                                <div id={`page-${index+1}`} className="page">
                                    <h2 className="heading">{value.name}</h2>
                                    {
                                        value.content.map((value,index)=>(
                                            <div className="resume-wrap d-flex ftco-animate fadeInUp ftco-animated">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span className="flaticon-ideas" />
                                                </div>
                                                <div className="text pl-3">
                                                    <span className="date">{value.time}</span>
                                                    <h2>{value?.title}</h2>
                                                    <span className="position">{value.subtitle}</span>
                                                    <p>
                                                        {value.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        {
                            skill.map((value,index)=>{
                                if(value.category=="circle"){
                                    return(
                                        <div className="row progress-circle mb-5">
                                            {value.content.map((value2:any,index)=>(
                                                <div className="col-lg-4 mb-4">
                                                    <div className="bg-white rounded-lg shadow p-4">
                                                        <h2 className="h5 font-weight-bold text-center mb-4">{value2.title}</h2>
                                                        <div className="progress mx-auto" data-value={value2.percent}>
                                              <span className="progress-left">
                                                <span
                                                    className="progress-bar border-primary"
                                                    style={{ transform: `rotate(${(value2.percent-50)*3.6}deg)` }}
                                                />
                                              </span>
                                                            <span className="progress-right">
                                                <span
                                                    className="progress-bar border-primary"
                                                    style={{ transform: "rotate(180deg)" }}
                                                />
                                              </span>
                                                            <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                                                                <div className="h2 font-weight-bold">
                                                                    {value2.percent}<sup className="small">%</sup>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row text-center mt-4">
                                                            <div className="col-6 border-right">
                                                                <div className="h4 font-weight-bold mb-0">{value2.lastweek}%</div>
                                                                <span className="small text-gray">Last week</span>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="h4 font-weight-bold mb-0">{value2.lastmonth}%</div>
                                                                <span className="small text-gray">Last month</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        )
                                }
                                if(value.category=='line')
                                    return (
                                        <div className="row">
                                            {value.content.map((value2,index)=>(
                                                <div className="col-md-6 animate-box">
                                                    <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                                                        <h3>{value2.title}</h3>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar color-1"
                                                                role="progressbar"
                                                                aria-valuenow={value2.percent}
                                                                aria-valuemin={0}
                                                                aria-valuemax={100}
                                                                style={{ width: `${value2.percent}%` }}
                                                            >
                                                                <span>{value2.percent}%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Resume