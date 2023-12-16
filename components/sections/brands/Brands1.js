import BrandSlider1 from "@/components/slider/BrandSlider1";

export default function Brands1({helperCls}) {
    return (
        <>
            <div id="brands-1" className={`bg-lightgrey brands-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-30 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">OUR TRUSTED PARTNERS</h2>
                                {/* Text */}
                                <p className="p-xl">Embracing collaboration, we proudly present our esteemed partners who share our commitment to excellence and dedication in delivering outstanding coconut pudding products.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <BrandSlider1/>
                        </div>
                    </div>      {/* End row */}
                </div>	    {/* End container */}
            </div>
        </>
    )
}
