
export default function About3({ icon, helperCls, newImg }) {
    return (
        <>
            <section id="about-3" className={`wide-60 about-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        {/* ABOUT IMAGE */}
                        <div className="col-md-5 col-lg-6">
                            <div className="about-3-img text-center mb-40">
                                <img className="img-fluid" src={`/images/${newImg ? newImg : "about-01-img.png"}`} alt="about-image" />
                            </div>
                        </div>
                        {/* ABOUT TEXT */}
                        <div className="col-md-7 col-lg-6">
                            <div className="about-3-txt mb-40">

                                {icon ?
                                    <>
                                        {/* Title */}
                                        <h2 className="h2-sm coffee-color">NOTHING UNITES FRIENDS LIKE DELICIOUS COCONUT PUDDING</h2>
                                        {/* Text */}
                                        <p className="p-md grey-color">Always open to delight, where the first taste leads to a smile. A smooth, tropical blend that invites warmth and joy. Find pleasure in the creamy sweetness that draws together smiles, creating cherished memories with each spoonful of coconut pudding. A dessert that unites hearts in shared moments of bliss.
                                        </p>
                                        {/* Icons List */}
                                        <div className="abox-2-wrapper ico-70">
                                            <div className="row text-center">
                                                {/* ABOUT BOX #1 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-coconut" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Coconut Flesh</h6>
                                                    </div>
                                                </div>
                                                {/* ABOUT BOX #2 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-jelly" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Chewy Pudding</h6>
                                                    </div>
                                                </div>
                                                {/* ABOUT BOX #3 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-water" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Coconut Water</h6>
                                                    </div>
                                                </div>
                                                {/* ABOUT BOX #4 */}
                                                <div className="col-sm-3">
                                                    <div className="abox-2">
                                                        {/* Icon */}
                                                        <div className="abox-2-ico grey-color"><span className="flaticon-sugar" /></div>
                                                        {/* Text */}
                                                        <h6 className="h6-lg">Natural Sweetness</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>	{/* End Icons List */}

                                    </>
                                    :
                                    <>

                                        {/* Title */}
                                        <h2 className="h2-sm">NOTHING UNITES FRIENDS LIKE DELICIOUS COCONUT PUDDING</h2>
                                        {/* Text */}
                                        <p className="p-md">Always open to delight, where the first taste leads to a smile. A smooth, tropical blend that invites warmth and joy. Find pleasure in the creamy sweetness that draws together smiles, creating cherished memories with each spoonful of coconut pudding. A dessert that unites hearts in shared moments of bliss.
                                        </p>
                                        {/* List */}
                                        {/* <ul className="txt-list">
                                            <li className="list-item">
                                                <p className="p-md">Fringilla risus, luctus mauris orci auctor purus euismod pretium
                                                    purus pretium ligula rutrum tempor sapien
                                                </p>
                                            </li>
                                            <li className="list-item">
                                                <p className="p-md">Quaerat sodales sapien euismod purus blandit</p>
                                            </li>
                                            <li className="list-item">
                                                <p className="p-md">Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales
                                                    sapien undo pretium a purus mauris
                                                </p>
                                            </li>
                                        </ul> */}
                                    </>}

                            </div>
                        </div>	{/* END ABOUT TEXT */}
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
