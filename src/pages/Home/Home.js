import React from "react";
import "./Home.css";
import IngredientsCards from "components/IngredientsCards/IngredientsCards";
import Loader from "components/Loader";
import Wrapper from "HOC/Wrapper/Wrapper";
import { ReactComponent as ArrowRight } from "assets/images/arrow-right.svg";
import CookingProcessCard from "components/CookingProcessCard/CookingProcessCard";
import Accordion from "components/Accordion/Accordion";
// import { Link } from "react-router-dom";
import cusineIcon from "assets/images/cusine-icon.png";
import CircleCard from "components/CircleCard/CircleCard";
// import indiaFlag from "assets/images/india-flag.png";
// import italyFlag from "assets/images/italy-flag.png";
import categoryIcon from "assets/images/category-icon.png";
import courseIcon from "assets/images/course-icon.png";
// import beaf from "assets/images/beaf.png";
import clock from "assets/images/clock.png";
import fire from "assets/images/fire.png";
import cookBook from "assets/images/cook-book.png";
import cookerHat from "assets/images/cooker-hat.png";
// import biryani from "assets/images/biryani.png";
// import dish from "assets/images/dish.png";
// import dish2 from "assets/images/dish-2.png";
import TitleBar from "components/TitleBar/TitleBar";
import OverViewCard from "components/OverViewCard/OverViewCard";
import RecipeCard from "components/RecipeCard/RecipeCard";
import MixtureCard from "components/MixtureCard/MixtureCard";
import { connect } from "react-redux";
import { singleProductApi } from "../../redux/action";
import { useEffect } from "react";
import { useState } from "react";
// import { useParams } from "react-router-dom";

function Home({ singleProductApi, single_product }) {
  const [currentStep, setCurrentStep] = useState(0);
  // const { id } = useParams();

  useEffect(() => {
    singleProductApi(100024);
  }, [singleProductApi]);

  return (
    <>
      {(Object.keys(single_product).length && (
        <Wrapper
          bodyStyles={{
            padding: "15px 1.875rem",
            paddingLeft: "clamp(15px , 2.35vw , 31px)",
            paddingRight: "clamp(15px , 2.35vw , 31px)",
            marginTop: "72px",
          }}
        >
          {/* section 1 */}
          <div className="food-items-wrapper mb-80">
            <div className="food-items-left">
              <p className="light-black fs-48px weight-7 mb-20">
                {single_product.name}
              </p>
              <p className="light-black fs-18px weight-4 mb-15 ln-28px">
                {single_product.description}
                {/* <Link to="/" className="read-more-btn">
									Read more
								</Link> */}
              </p>

              <div className="food-item-cards">
                <div className="food-item-card">
                  <div className="mb-20">
                    <div className="mb-15">
                      <TitleBar
                        img={<img src={cusineIcon} alt="" />}
                        title="Cusine"
                      />
                    </div>

                    <div className="row gap-10px ">
                      {single_product.cuisine.map((prev, i) => {
                        return (
                          <a target="blank" href={prev.link}>
                            <CircleCard
                              key={i}
                              content={<img src={prev.logo} alt="" />}
                              title={
                                <p className="fs-16px weight-4 light-black">
                                  {prev.name}
                                </p>
                              }
                              style={{
                                background:
                                  "radial-gradient(50% 50% at 50% 50%, rgba(255, 152, 17, 0.1) 0%, rgba(109, 165, 68, 0.1) 100%)",
                              }}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  {/*  */}

                  <div className="mb-10">
                    <div className="mb-15">
                      <TitleBar
                        img={<img src={categoryIcon} alt="" />}
                        title="Category"
                      />
                    </div>

                    <div className="row gap-10px ">
                      {single_product.category.list.map((prev, i) => {
                        return (
                          <a
                            key={i}
                            target="blank"
                            href={prev.link}
                            className="dark"
                          >
                            <CircleCard
                              content={<p className="fs-16px">{prev.name}</p>}
                              style={{ border: "2px solid #C2C9EE" }}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>

                  {/*  */}
                  <div className="mb-10">
                    <div className="mb-15">
                      <TitleBar
                        img={<img src={courseIcon} alt="" />}
                        title="Course"
                      />
                    </div>

                    <div className="row gap-10px mb-10">
                      {single_product.course.list.map((prev, i) => {
                        return (
                          <a target="blank" key={i} href={prev.link}>
                            <CircleCard
                              content={<img src={prev.logo} alt="" />}
                              title={
                                <p className="fs-16px weight-4 light-black">
                                  {prev.name}
                                </p>
                              }
                              style={{ border: "1.5px solid #E9B699" }}
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="food-item-card">
                  <div className="mb-15">
                    <TitleBar title="Overview" />
                  </div>
                  <div className="overview-cards mb-40">
                    <OverViewCard
                      img={clock}
                      title="Total Time"
                      subtitle={single_product.total_time}
                    />
                    <OverViewCard
                      img={fire}
                      title="Total Time"
                      subtitle={single_product.total_time}
                    />
                  </div>
                  {/*  */}
                  <div className="mb-15">
                    <TitleBar
                      img={<img src={cookBook} alt="" />}
                      title="Recipe Link"
                    />
                  </div>
                  <RecipeCard img={cookerHat} title="Restaurant" />
                </div>
              </div>
            </div>
            <div className="food-items-right">
              <div className="biryani-img">
                <img
                  src={single_product.logo}
                  style={{ width: "250px" }}
                  alt=""
                />
              </div>
              <div className="mixture-wrapper">
                <MixtureCard
                  mixtureItems={[
                    single_product?.data_card?.logo_1,
                    single_product?.data_card?.logo_2,
                  ]}
                  data={single_product.data_card}
                />
              </div>
            </div>
          </div>

          {/* section 2 */}
          <div className="mb-80">
            <p className="light-black fs-35px weight-7 mb-15">Ingredients</p>
            {(single_product.ingredientsList.length &&
              single_product.ingredientsList.map((prev, i) => {
                return <IngredientsCards data={prev} />;
              })) ||
              ""}
          </div>

          {/* section 3 */}
          <div className="mb-80">
            <p className="light-black fs-35px weight-7 ">Cooking Process</p>
            {single_product.instructions.map((prev, i) => {
              return (
                <>
                  {currentStep === i && (
                    <div className="cooking-process-wrapper">
                      <div className="cooking-process-header">
                        <p className="fs-25px weight-5 light-black">
                          {prev.method}
                        </p>

                        <div
                          onClick={() => {
                            if (
                              currentStep + 1 !==
                              single_product.instructions.length
                            ) {
                              setCurrentStep(currentStep + 1);
                            }
                          }}
                          className="cooking-process-btn fs-15px weight-7"
                        >
                          <div>
                            {currentStep + 1}/
                            {single_product.instructions.length}
                          </div>
                          Next Step
                          <ArrowRight />
                        </div>
                      </div>

                      <div className="cooking-process-body">
                        {prev.steps.map((cardData, index) => (
                          <CookingProcessCard
                            key={index}
                            order={index}
                            data={cardData}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </div>

          {/* section 4 */}
          {single_product.faq !== null && (
            <div className="mb-80">
              <p className="black fs-35px weight-7 mb-15">FAQ</p>

              <div className="faq-accordions">
                {single_product.faq.map((prev, i) => {
                  return <Accordion data={prev} />;
                })}
              </div>
            </div>
          )}
        </Wrapper>
      )) || <Loader />}
    </>
  );
}

const mapStatetoProps = (state) => {
  return {
    single_product: state.singleProductRed.single_product,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    singleProductApi: function (id) {
      dispatch(singleProductApi(id));
    },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Home);
