const Counter_section =()=>{
    const counter_section=[{
        number:100,
        title:"Award"
    },
        {
            number:1200,
            title:"Complete Projects"
        },
        {
            number:1200,
            title:"Happy Customers  "
        },
        {
            number:500,
            title:"Cups of coffee"
        },
    ]
    return(
        <section
            className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img"
            id="section-counter"
        >
            <div className="container-fluid px-md-5">
                <div className="row d-md-flex align-items-center">
                    {
                        counter_section.map((value,index)=>(
                            <div className="col-md d-flex justify-content-center counter-wrap ftco-animate fadeInUp ftco-animated">
                                <div className="block-18 shadow">
                                    <div className="text">
                                        <strong className="number" data-number={value.number}>
                                            {value.number}
                                        </strong>
                                        <span>{value.title}</span>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>

    )
}
export default Counter_section