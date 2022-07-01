import blogImg1 from '../../asset/images/ximage_1.jpg.pagespeed.ic.-B0UTb4vQO.webp'
import blogImg2 from '../../asset/images/ximage_2.jpg.pagespeed.ic.hPYaVjNW0H.webp'
import blogImg3 from '../../asset/images/ximage_3.jpg.pagespeed.ic.XJ5IolSvSy.webp'

const Blog=()=>{
    const blog={
        title:'Our Blog',
        description:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        content:[
            {
                imgurl:blogImg1,
                nameblog:'Why Lead Generation is Key for Business Growth',
                date:'Sept. 12, 2019',
                user:'Admin',
                icon:'icon-chat',
                post_number:3,
                des:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
                ,href:""
            },
            {
                imgurl:blogImg2,
                nameblog:'Why Lead Generation is Key for Business Growth',
                date:'Sept. 12, 2019',
                user:'Admin',
                icon:'icon-chat',
                post_number:3,
                des:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
                ,href:""
            },
            {
                imgurl:blogImg3,
                nameblog:'Why Lead Generation is Key for Business Growth',
                date:'Sept. 12, 2019',
                user:'Admin',
                icon:'icon-chat',
                post_number:3,
                des:"A small river named Duden flows by their place and supplies it with the necessary regelialia."
                ,href:""
            }
        ]
    }
    return(
        <section className="ftco-section" id="blog-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-5">
                    <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h1 className="big big-2">Blog</h1>
                        <h2 className="mb-4">{blog.title}</h2>
                        <p>
                            {blog.description}
                        </p>
                    </div>
                </div>
                <div className="row d-flex">
                    {blog.content.map((value, index) => (
                        <div className="col-md-4 d-flex ftco-animate fadeInUp ftco-animated">
                            <div className="blog-entry justify-content-end">
                                <a
                                    href={value.href}
                                    className="block-20"
                                    style={{
                                        backgroundImage:
                                            `url(${value.imgurl})`
                                    }}
                                ></a>
                                <div className="text mt-3 float-right d-block">
                                    <h3 className="heading">
                                        <a href={value.href}>
                                            {value.nameblog}
                                        </a>
                                    </h3>
                                    <div className="d-flex align-items-center mb-3 meta">
                                        <p className="mb-0">
                                            <span className="mr-2">{value.date}</span>
                                            <a href="#" className="mr-2">
                                                {value.user}
                                            </a>
                                            <a href="#" className="meta-chat">
                                                <span className={value.icon} /> 3
                                            </a>
                                        </p>
                                    </div>
                                    <p>
                                        {value.des}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>

    )
}
export default Blog