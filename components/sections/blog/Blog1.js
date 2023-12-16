import Link from "next/link";

export default function Blog1({helperCls}) {
    return (
        <>
            <section id="blog-1" className={`wide-60 blog-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="section-title mb-60 text-center">
                                {/* Title 	*/}
                                <h2 className="h2-xl red-color">CODING<br className="break" /> EVENTS</h2>
                                {/* Text */}
                                <p className="p-xl">Celebrate with our coconut pudding! Ideal for events, our catering service makes your occasions memorable. Reserve now for a sweet addition to your celebrations.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* BLOG POSTS HOLDER */}
                    <div className="row">
                        {/* BLOG POST #1 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/blog/blog-1.jpg" alt="blog-post-image" />
                                    </div>
                                </div>
                                {/* BLOG POST TITLE */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-lg coffee-color"><Link href="/single-post">D'Kambodja & Anne Avantie: Seni dan Rasa</Link></h5>
                                    {/* Post Text */}
                                    <p className="grey-color">Kolaborasi estetik dengan Anne Avantie dalam kreasi puding kelapa kami.</p>
                                </div>
                            </div>
                        </div>	{/* END  BLOG POST #1 */}
                        {/* BLOG POST #2 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/blog/blog-2.jpg" alt="blog-post-image" />
                                    </div>
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-lg coffee-color"><Link href="/single-post">Coconut Pudding di Loko Cafe Yogyakarta</Link></h5>
                                    {/* Post Text */}
                                    <p className="grey-color">Menikmati Sensasi Kuliner Puding Kelapa, Favorit Pengunjung di Loko Cafe Yogyakarta</p>
                                </div>
                            </div>
                        </div>	{/* END  BLOG POST #2 */}
                        {/* BLOG POST #3 */}
                        <div className="col-md-6 col-lg-4">
                            <div className="blog-post">
                                {/* BLOG POST IMAGE */}
                                <div className="blog-post-img">
                                    <div className="hover-overlay">
                                        <img className="img-fluid" src="/images/blog/blog-3.jpg" alt="blog-post-image" />
                                    </div>
                                </div>
                                {/* BLOG POST TEXT */}
                                <div className="blog-post-txt">
                                    {/* Post Title */}
                                    <h5 className="h5-lg coffee-color"><Link href="/single-post">Ayo Nongkrong di Angkringan Jogja!</Link></h5>
                                    {/* Post Text */}
                                    <p className="grey-color">Temukan Kenikmatan Puding Kelapa Autentik di Sudut Kota</p>
                                </div>
                            </div>
                        </div>	{/* END  BLOG POST #3 */}
                    </div>	{/* END BLOG POSTS HOLDER */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
