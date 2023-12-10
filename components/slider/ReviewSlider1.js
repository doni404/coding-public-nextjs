// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";


export default function ReviewSlider1() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                // centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.block-gallery-pagination'
                }}
                // navigation={{
                //     prevEl: ".prev",
                //     nextEl: ".next",
                // }}
                // breakpoints={{
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 30,
                //     },
                //     575: {
                //         slidesPerView: 2,
                //         spaceBetween: 30,
                //     },
                //     767: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     991: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     1199: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                //     1350: {
                //         slidesPerView: 3,
                //         spaceBetween: 30,
                //     },
                // }}
                className="slides text-center"
                tag={"ul"}
            >
                {/* TESTIMONIAL-1 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-1.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Pudding kelapa ini enak banget! Rasanya pas dan sangat segar. Cocok untuk camilan sore. "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">Siti Jubaidah</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL-2 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-2.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Saya suka teksturnya yang lembut dan rasa kelapa aslinya. Harganya juga oke untuk kualitas seperti ini. "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">Evelyn Linda</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL-3 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-3.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Saya sudah coba banyak pudding, tapi ini yang terenak. Rasa kelapanya kaya dan natural. Recommended! "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">Dewi Sugondo</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL-4 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-4.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Sebagai reseller, saya sangat puas dengan produk coconut pudding ini. Pelanggan saya selalu memberikan feedback positif tentang rasa dan kualitasnya. 
                            Proses pemesanan mudah dan pengiriman cepat, membuat saya bisa melayani pelanggan dengan lebih baik. "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star-half-alt" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">Rina, Reseller</p>
                    </div>
                </SwiperSlide>
                {/* TESTIMONIAL #5 */}
                <SwiperSlide className="review-1" tag="li">
                    <div className="review-1-txt">
                        {/* Testimonial Author Avatar */}
                        <img src="/images/review-author-5.jpg" alt="testimonial-avatar" />
                        {/* Text */}
                        <p>" Pudding kelapa ini laris manis di toko saya. Pelanggan senang dengan rasa autentiknya dan saya senang dengan dukungan yang diberikan oleh tim. 
                            Mereka sangat responsif dan membantu, menjadikan proses jual beli menjadi lancar. Sangat merekomendasikan produk ini untuk dijual! "
                        </p>
                        {/* Rating */}
                        <div className="review-rating">
                            <div className="stars-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                            </div>
                        </div>
                        {/* Testimonial Author */}
                        <p className="testimonial-autor">Ahmad, Reseller</p>
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-pagination block-gallery-pagination" /> */}
        </>
    )
}
