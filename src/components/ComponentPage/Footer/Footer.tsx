import React from "react";


const footer_link=[
    {
        title:'Links',
        content:[
            {
                icon:"icon-long-arrow-right mr-2",
                info:'Home',
                path:'/',
            },
            {
                icon:"icon-long-arrow-right mr-2",
                info:'About',
                path:'/#about-section',
            },
            {
                icon:"icon-long-arrow-right mr-2",
                info:'Service',
                path:'/#service-section',
            },
            {
                icon:"icon-long-arrow-right mr-2",
                info:'Projects',
                path:'/#projects-section',
            },
            {
                icon:"icon-long-arrow-right mr-2",
                info:'Contact',
                path:'/#contact-section',
            }
        ]
    },
    {
        title: 'Services',
        content: [
            {
                icon: "icon-long-arrow-right mr-2",
                info: 'Web Design',
                path: '',
            },
            {
                icon: "icon-long-arrow-right mr-2",
                info: 'Web Development',
                path: '',
            },
            {
                icon: "icon-long-arrow-right mr-2",
                info: 'Business Strategy',
                path: '',
            },
            {
                icon: "icon-long-arrow-right mr-2",
                info: 'Data Analysis',
                path: '',
            },
            {
                icon: "icon-long-arrow-right mr-2",
                info: 'Graphic Design',
                path: '',
            }
        ]
    }
    ]
const Footer=()=>{
    return(
        <footer className="ftco-footer ftco-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">About</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="ftco-animate fadeInUp ftco-animated">
                                    <a href="#">
                                        <span className="icon-twitter" />
                                    </a>
                                </li>
                                <li className="ftco-animate fadeInUp ftco-animated">
                                    <a href="#">
                                        <span className="icon-facebook" />
                                    </a>
                                </li>
                                <li className="ftco-animate fadeInUp ftco-animated">
                                    <a href="#">
                                        <span className="icon-instagram" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {footer_link.map((value,index)=>(
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-4">
                                <h2 className="ftco-heading-2">{value.title}</h2>
                                <ul className="list-unstyled">
                                    {value.content.map((value)=>(
                                        <li>
                                            <a href={value.path}>
                                                <span className={value.icon} />
                                                {value.info}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    ))}



                    <div className="col-md">
                        <div className="ftco-footer-widget mb-4">
                            <h2 className="ftco-heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li>
                                        <span className="icon icon-map-marker" />
                                        <span className="text">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon icon-phone" />
                                            <span className="text">+2 392 3929 210</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="icon icon-envelope" />
                                            <span className="text">info@yourdomain.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>
                            Copyright ©2022 All rights reserved | This template is made with{" "}
                            <i className="icon-heart color-danger" aria-hidden="true" /> by{" "}
                            <a href="https://colorlib.com" target="_blank">
                                Colorlib
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer