import Link from "next/link";

export default function Footer2() {
    return (
        <>
            <footer id="footer-2" className="footer division">
                <div className="container">
                    <div className="footer-2-holder text-center">
                        <div className="row">

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-info mb-30">

                                    <h5 className="h5-md">Location</h5>

                                    <p>Puri Surya Jaya,</p>
                                    <p>Valencia icon EE5/41,</p>
                                    <p>Gedangan, Sidoarjo</p>
                                    <p>Jawa Timur</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-info mb-30">

                                    <h5 className="h5-md">Working Hours</h5>

                                    <p>Weekday: 8:00AM - 8:00PM</p>
                                    <p>Weekend: 6:00AM - 9:00PM</p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-contacts mb-30">

                                    <h5 className="h5-md">Order Now</h5>
                                    <p>Choose our delightful coconut pudding today, a treat for every moment!</p>
                                    <p className="mt-5"><span className="yellow-color"><Link href="https://api.whatsapp.com/send?phone=6281938606662&text=Hi%20min-Co%20%F0%9F%99%8C%2C%20%0ASaya%20mau%20tanya-tanya%20tentang%20%F0%9F%A5%A5%F0%9F%8D%83%20nih.">+62-819-3860-6662</Link></span></p>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="footer-socials-links mb-30">

                                    <h5 className="h5-md">Follow Us</h5>

                                    <p>Stay updated with our latest news and offers!</p>

                                    <ul className="foo-socials text-center clearfix">
                                        {/* <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li> */}
                                        {/* <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li> */}
                                        <li><Link href="https://www.instagram.com/coconutpudding.official/" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                        {/* <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li> */}

                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bottom-footer">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-10 offset-lg-1">

                                    <ul className="bottom-footer-list clearfix">
                                        <li><p className="last-li">© {new Date().getFullYear()} Coconut Pudding. All Rights Reserved</p></li>
                                        {/* <li><p className="first-li"><Link href="#">About Us</Link></p></li> */}
                                        {/* <li><p><Link href="#">Gift Cards</Link></p></li>
                                        <li><p><Link href="#">Terms Of Use</Link></p></li>
                                        <li><p className="last-li"><Link href="#">Privacy Policy</Link></p></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
