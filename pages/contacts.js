import Layout from "@/components/layout/Layout";
import Banner2 from "@/components/sections/banner/Banner2";
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Layout
                pageId={"contacts-page"}
                activePage={"Contact Us"}
                pageTitle={"Contact Us"}
                headerStyle={1}
                footerStyle={2}
            >

                <section id="contacts-5" className="wide-80 contacts-section division">
                    <div className="container">
                        {/* CONTACT INFO
					============================================= */}
                        <div className="row">
                            <div className="col-xl-10 offset-xl-1">
                                <div className="row">
                                    {/* LOCATION */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Location</h5>
                                            {/* Address */}
                                            <p className="p-md">Puri Surya Jaya,</p>
                                            <p className="p-md">Valencia icon EE5/41,</p>
                                            <p className="p-md">Gedangan, Sidoarjo</p>
                                            <p className="p-md">Jawa Timur</p>
                                        </div>
                                    </div>
                                    {/* QUICK CONTACTS */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Working Hours</h5>
                                            {/* Text */}
                                            <p className="p-md">Weekday: 8:00AM - 8:00PM</p>
                                            <p className="p-md">Weekend: 6:00AM - 9:00PM</p>
                                        </div>
                                    </div>
                                    {/* WORKING HOURS */}
                                    <div className="col-md-4">
                                        <div className="cbox-5">
                                            {/* Title */}
                                            <h5 className="h5-lg">Follow Us</h5>
                                            {/* Title */}
                                            <p className="p-md">Stay updated with our latest news and offers!</p>
                                            <ul className="foo-socials text-center clearfix">
                                                {/* <li><Link href="#" className="ico-facebook"><i className="fab fa-facebook-f" /></Link></li> */}
                                                {/* <li><Link href="#" className="ico-twitter"><i className="fab fa-twitter" /></Link></li> */}
                                                <li><Link href="https://www.instagram.com/coconutpudding.official/" className="ico-instagram"><i className="fab fa-instagram" /></Link></li>
                                                {/* <li><Link href="#" className="ico-youtube"><i className="fab fa-youtube" /></Link></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END CONTACT INFO */}
                        {/* GOOGLE MAP
					============================================= */}
                        <div className="row">
                            <div className="col-md-12">
                                <div id="gmap">
                                    <div className="google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d548.7700424724325!2d112.7464787334659!3d-7.3948506009199075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1702149131877!5m2!1sen!2sid" width={600} height={450} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                                    </div>
                                </div>
                            </div>
                        </div>	{/* END GOOGLE MAP */}
                        {/* SECTION TITLE */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="section-title mb-40 text-center">
                                    {/* Title 	*/}
                                    <h2 className="h2-xl">Get in Touch</h2>
                                    {/* Text */}
                                    <p className="p-xl">Reach out for inquiries, feedback, or just to say hello. 
                                    Our team is ready to assist you with any questions or support you may need.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* CONTACT FORM */}
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="form-holder">
                                    <form name="contactform" className="row contact-form">
                                        {/* Form Input */}
                                        <div className="col-md-12 col-lg-6">
                                            <input type="text" name="name" className="form-control name" placeholder="Your Name*" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12 col-lg-6">
                                            <input type="email" name="email" className="form-control email" placeholder="Email Address*" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <input type="text" name="subject" className="form-control subject" placeholder="What's this about?" />
                                        </div>
                                        {/* Form Textarea */}
                                        <div className="col-md-12">
                                            <textarea name="message" className="form-control message" rows={6} placeholder="Your Message ..." defaultValue={""} />
                                        </div>
                                        {/* Form Button */}
                                        <div className="col-md-12 mt-5 text-right">
                                            <button type="submit" className="btn btn-md btn-red tra-red-hover submit">Send Message</button>
                                        </div>
                                        {/* Form Message */}
                                        <div className="col-md-12 contact-form-msg text-center">
                                            <div className="sending-msg"><span className="loading" /></div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>  {/* END CONTACT FORM */}
                    </div>	   {/* End container */}
                </section>	{/* END CONTACTS-5 */}

                <Banner2 helperCls="bg-yellow" />
            </Layout>
        </>
    )
}