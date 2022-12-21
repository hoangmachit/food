const slideData = [
  {
    index: 0,
    headline: "New Fashion Apparel",
    button: "Shop now",
    src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
  },
  //   {
  //     index: 1,
  //     headline: "In The Wilderness",
  //     button: "Book travel",
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
  //   },
  //   {
  //     index: 2,
  //     headline: "For Your Current Mood",
  //     button: "Listen",
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
  //   },
  //   {
  //     index: 3,
  //     headline: "Focus On The Writing",
  //     button: "Get Focused",
  //     src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
  //   },
];
const Slider = () => {
  return (
    <>
      <div className="slider">
        <ul className="slider__wrapper">
          {slideData &&
            slideData.map((item, index) => {
              return (
                <li key={index} className={`slide`}>
                  <div className="slide__image-wrapper">
                    <img
                      className="slide__image"
                      alt={item.headline}
                      src={item.src}
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
export default Slider;
