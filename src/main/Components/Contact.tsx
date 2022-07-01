import contactImg from '../../asset/images/xabout.jpg.pagespeed.ic.-j2kfNwXDg.webp'
const Contact=()=>{
    const contact={
        img:contactImg,
        section:'contact',
        description:'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia',
        item:[
            {
                icon:'icon-map-signs',
                title:'Address',
                info:'198 West 21th Street, Suite 721 New York NY 10016'
            },
            {
                icon:'icon-phone2',
                title:'Contact Number',
                info:'1235 2355 98'
            },
            {
                icon:'icon-paper-plane',
                title:'Email Address',
                info:'info@yoursite.com'
            },
            {
                icon:'icon-map-signs',
                title:'Website',
                info:'yoursite.com'
            },
        ]
    }
    const contactform={

    }
    return(
        <section
            className="ftco-section contact-section ftco-no-pb"
            id="contact-section">
            <div className="container">
                <div className="row justify-content-center mb-5 pb-3">
                    <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
                        <h1 className="big big-2">Contact</h1>
                        <h2 className="mb-4">{contact.section}</h2>
                        <p>
                            {contact.description}
                        </p>
                    </div>
                </div>
                <div className="row d-flex contact-info mb-5">
                    {
                        contact.item.map((value, index) => (
                            <div className="col-md-6 col-lg-3 d-flex ftco-animate fadeInUp ftco-animated">
                                <div className="align-self-stretch box text-center p-4 shadow">
                                    <div className="icon d-flex align-items-center justify-content-center">
                                        <span className={value.icon} />
                                    </div>
                                    <div>
                                        <h3 className="mb-4">{value.title}</h3>
                                        <p>{value.info}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="row no-gutters block-9">
                    <div className="col-md-6 order-md-last d-flex">
                        <form action="#" className="bg-light p-4 p-md-5 contact-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
            <textarea
                name=""
                id=""
                cols={30}
                rows={7}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
            />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    defaultValue="Send Message"
                                    className="btn btn-primary py-3 px-5"
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div
                            className="img"
                            style={{
                                backgroundImage:
                                    `url(${contact.img})`
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact