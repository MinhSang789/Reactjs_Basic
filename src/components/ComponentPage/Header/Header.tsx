import React, {useState} from "react";
const Header=()=>{
    interface navLinkInterface{
        title:string
        ,path:string
    }
    const navLinksInit:navLinkInterface[]=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/#about-section'
        },
        {
            title:'Resume',
            path:'/#resume-section'
        },
        {
            title:'Services',
            path:'/#services-section'
        },
        {
            title:'Projects',
            path:'/#projects-section'
        },
        {
            title:'My Blog',
            path:'/#blog-section'
        },
        {
            title:'Contact',
            path:'/#contact-section'
        }
    ]

    const [active,setActive]=useState(0)

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target scrolled awake"
            id="ftco-navbar"
        >
            <div className="container">
                <a className="navbar-brand" href="/">
                    <span>R</span>onaldo
                </a>
                <button
                    className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="oi oi-menu" /> Menu
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav nav ml-auto">
                        {
                            navLinksInit.map((value,index)=>(
                                <li className={`nav-item
                                    ${(active===index)?'active':''}`
                                }
                                    key={index}>
                                    <a href={value.path} className="nav-link"
                                        onClick={()=>{
                                            setActive(index)
                                        }}
                                    >
                                        <span>{value.title}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header