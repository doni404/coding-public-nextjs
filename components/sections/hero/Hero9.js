import Link from "next/link";

export default function Hero9({helperCls}) {
    return (
        <>
            <section id="hero-9" className={`bg-03 hero-section ${helperCls ? helperCls : ""}`}>
                <div className="bg-fixed bg-inner division">
                    {/* HERO TEXT */}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="hero-9-txt text-center white-color">
                                    {/* Title */}
                                    <h2>COCONUT PUDDING DELIGHT</h2>
                                    {/* Text */}
                                    <p className="p-xl">Enjoy the gentle taste of coconut in a smooth, creamy pudding that's perfect for any time.
                                    </p>
                                    {/* Button */}
                                    {/* <Link href="/menu-3" className="btn btn-lg btn-meat tra-white-hover">Order Now</Link> */}
                                    <Link href="https://api.whatsapp.com/send?phone=6281938606662&text=Hi%20min-Co%20%F0%9F%99%8C%2C%20%0ASaya%20mau%20tanya-tanya%20tentang%20%F0%9F%A5%A5%F0%9F%8D%83%20nih." className="btn btn-lg btn-meat tra-white-hover">Order Now</Link>
                                </div>
                            </div>
                        </div>	 {/* End row */}
                    </div>	 {/* END HERO TEXT */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
