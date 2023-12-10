import Link from "next/link";

export default function Banner2({helperCls}) {
    const scrollToId = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            // No element found then go to top first and then scroll to id
            window.location.href = `/#${id}`;
        }
    }

    return (
        <>
            <section id="banner-2" className={`bg-scroll banner-section division ${helperCls ? helperCls : ""}`}>
                <div className="container">
                    <div className="row">
                        {/* BANNER TEXT */}
                        <div className="col-md-10 offset-md-1">
                            <div className="banner-2-txt text-center white-color">
                                {/* Text */}
                                <p className="p-xl">We put 100% of love and dedication into our dishes</p>
                                {/* Title */}
                                <h2>CRAFTED WITH PASSION</h2>
                                {/* Button */}
                                <Link href="#reviews-1" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToId('reviews-1');
                                }} className="btn btn-lg btn-salmon tra-white-hover">SEE CUSTOMER STORIES</Link>
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>
        </>
    )
}
