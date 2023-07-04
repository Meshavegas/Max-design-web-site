import React, { useState, useCallback } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./realisation.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImageMagnify from "react-image-magnify";

// import { imagesCards } from "../data/photo";

const Realisation = ({ imagesCards }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  const CustomCarouselView = ({ data }) => {
    console.log(data);
    return (
      <div className="flex justify-center align-middle h-full ">
        <div className=" text-white z-50">
          <div
            onClick={closeLightbox}
            className="absolute text-right bg-orange md:px-4 md:py-2 px-3 py-1 rounded-full cursor-pointer ml-2"
          >
            X
          </div>

          <img
            src={data.img}
            className=" h-auto object-contain aspect-[4/3] max-w-full"
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* <Gallery photos={imagesCards} onClick={openLightbox} /> */}
      <div className="container">
        {Object.keys(imagesCards).map((e, index) => (
          <div
            key={index}
            className="md:mx-0 mx-2 pl-2 bg-slate-300 mt-2 pb-2 w-full"
            id="impression"
          >
            <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-light border-b-4 pb-0 border-light">
              {e}
            </h1>
            <div className="flex mt-2">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
                className="w-full"
              >
                <Masonry gutter="10px">
                  {imagesCards[e].map((images, i) => (
                    <div key={i}>
                      <img
                        src={images.img}
                        style={{ width: "100%", display: "block" }}
                        onClick={() =>
                          openLightbox(null, { photo: item, index })
                        }
                      />
                    </div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </div>
        ))}
      </div>
      <ModalGateway className="z-50">
        {viewerIsOpen ? (
          <Modal className="z-50">
            {/* <div className="text-2xl">X</div> */}

            <Carousel
              currentIndex={currentImage}
              views={imagesCards.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
              components={{
                View: CustomCarouselView,
              }}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default Realisation;
