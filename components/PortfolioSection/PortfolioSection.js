import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import SectionTitle from "../SectionTitle";

const Portfolios = [
  {
    Pimg: "/images/portfolio/Nina-4.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-8.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-5.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-1.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-10.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-7.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-2.jpg",
  },
  {
    Pimg: "/images/portfolio/Nina-11.jpg",
  },
];

// Notes
const PortfolioSection = (props) => {
  return (
    <section
      className={`wpo-portfolio-section section-padding ${props.pSclass}`}
      id="gallery"
    >
      <div className="container">
        <SectionTitle MainTitle={"Sweet Captured Moments"} />
        <div className="sortable-gallery">
          <div className="row">
            <div className="col-lg-12">
              <div className="portfolio-grids gallery-container clearfix">
                <Gallery>
                  {Portfolios.map((portfolio, pitem) => (
                    <div className="grid" key={pitem}>
                      <div className="img-holder">
                        <Item
                          original={portfolio.Pimg}
                          thumbnail={portfolio.Pimg}
                          width="600"
                          height="700"
                        >
                          {({ ref, open }) => (
                            <img
                              ref={ref}
                              onClick={open}
                              src={portfolio.Pimg}
                            />
                          )}
                        </Item>
                      </div>
                    </div>
                  ))}
                </Gallery>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
