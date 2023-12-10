import Link from "next/link";

export default function Promo10({helperCls}) {
    return (
        <>
            <section id="promo-10" className={`bg-03 promo-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* PROMO TEXT */}
                        <div className="col-md-6 col-lg-5">
                            <div className="pbox-10-txt white-color">
                                {/* Text */}
                                <h2>COCONUT DELIGHTS</h2>
                                {/* Text */}
                                <p className="p-md">Experience the exquisite fusion of creamy coconut and rich flavors in our coconut pudding product, a delightful treat for the senses.
                                </p>
                                {/* Call Button */}
                                <h4>Order Now: <span className="yellow-color"><Link href="https://api.whatsapp.com/send?phone=6281938606662&text=Hi%20min-Co%20%F0%9F%99%8C%2C%20%0ASaya%20mau%20tanya-tanya%20tentang%20%F0%9F%A5%A5%F0%9F%8D%83%20nih.">0819-3860-6662</Link></span></h4>
                            </div>
                        </div>
                        {/* PROMO IMAGE */}
                        <div className="col-md-6 col-lg-7">
                            <div className="pbox-10-img rel">
                                {/* Image */}
                                <img className="img-fluid" src="/images/promo-10-img.png" alt="promo-image" />
                                {/* Price Badge */}
                                <div className="red-badge price-badge-md bg-fixed">
                                    <div className="badge-txt white-color">
                                        <h5 className="h5-xl">Special</h5>
                                        <h4 className="h4-xl">Offer</h4>
                                        <span className="item-code">*Partner only</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
