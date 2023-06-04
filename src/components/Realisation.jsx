import React, { useState, useCallback } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "./realisation.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImageMagnify from "react-image-magnify";
// import Modal from "react-modal";
import { imagesCards } from "../data/photo";

const Realisation = () => {
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
        <Zoom>
          <img src={data.src} className=" h-full object-contain	" />
        </Zoom>
      </div>
    );
  };

  return (
    <div>
      {/* <Gallery photos={imagesCards} onClick={openLightbox} /> */}
      <div className="container">
        <div className="pl-4 bg-orange w-full">
          <h1 className="decoration-double font-bold text-xl md:text-2xl lg:text-4xl text-white border-b-4 pb-0 border-light">
            Shooting
          </h1>
          <div className="h-50 flex mt-2 w-full overflow-x-auto">
            {imagesCards.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => openLightbox(null, { photo: item, index })}
                  className="mr-1 w-100"
                >
                  <img
                    src={item.src}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pl-4 bg-light mt-2">
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-white border-b-4 pb-0 border-orange">
            Carte de visite
          </h1>
          <div className="h-50 flex mt-2">
            {imagesCards.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => openLightbox(null, { photo: item, index })}
                  className="mr-1 w-100"
                >
                  <img
                    src={item.src}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pl-4 bg-orange mt-2 pb-2">
          <h1 className="font-bold text-xl md:text-2xl lg:text-4xl text-white border-b-4 pb-0 border-light">
            Impression
          </h1>
          <div className="flex mt-2">
            {imagesCards.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => openLightbox(null, { photo: item, index })}
                  className="mr-1 w-100"
                >
                  <img
                    src={item.src}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ModalGateway className="z-50">
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox} className="z-50">
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

      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
        className="w-full"
      > 
      <Masonry gutter="10px">
        {images.map((image, i) => (
          <div key={i}>
            <img
              src={image}
              style={{ width: "100%", display: "block" }}
              onClick={() => openLightbox(i)}
            />
          </div>
        ))}
      </Masonry>
      {/* </ResponsiveMasonry> 
      {lightboxImage && (
        <div id="lightbox">
          <span className="close" onClick={closeLightbox}>
            &times;
          </span>
          <img src={lightboxImage} alt="Image en grand" />
          <div className="lightbox-nav">
            <button onClick={goToPrevImage} disabled={currentIndex === 0}>
              Prev
            </button>
            <button
              onClick={goToNextImage}
              disabled={currentIndex === images.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      )}
      */}
    </div>
  );
};

export default Realisation;
