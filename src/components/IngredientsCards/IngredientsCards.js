import React from "react";
import "./IngredientsCards.css";
import { ReactComponent as ArrowLeft } from "assets/images/arrow-left.svg";
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";
import IngredientsCard from "components/IngredientsCard/IngredientsCard";
import ingredientImg from "assets/images/ingredient-img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

function IngredientsCards({ data }) {
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	return (
		<div className="ingredients-cards-wrapper">
			<div className="ingredients-header">
				<p className="fs-25px weight-5">{data.name}</p>
				<div className="ingredients-header-line">
					<div className="ingredients-header-btns">
						<div ref={navigationPrevRef} className="rounded-btn">
							<ArrowLeft />
						</div>
						<div ref={navigationNextRef} className="rounded-btn bg-blue">
							<ArrowRight />
						</div>
					</div>
				</div>
			</div>

			<div className="ingredients-cards">
				<Swiper
					// style={{ border: "2px solid red" }}
					slidesPerView={4}
					spaceBetween={10}
					navigation={{
						prevEl: navigationPrevRef.current,
						nextEl: navigationNextRef.current,
					}}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = navigationPrevRef.current;
						swiper.params.navigation.nextEl = navigationNextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					breakpoints={{
						1000: {
							slidesPerView: 4,
						},
						800: {
							slidesPerView: 3,
						},
						630: {
							slidesPerView: 3,
						},
						500: {
							slidesPerView: 2,
						},
						300: {
							slidesPerView: 1.5,
						},
					}}
				>
					{data.list.map((item, index) => (
						<SwiperSlide>
							<IngredientsCard img={item.logo} data={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default IngredientsCards;
