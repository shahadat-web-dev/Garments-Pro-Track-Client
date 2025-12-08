const ImageSpotlightSection = () => {
  const images = [
    {
      src: "https://i.ibb.co.com/0pxjL3WR/jeff-tumale-5s-YQ1u-D4p-HU-unsplash-1.jpg",
      alt: "Left Image",
    },
    {
      src: "https://i.ibb.co.com/QFVf9X2L/lachlan-dempsey-6-VPEOdp-FNAs-unsplash-1.jpg",
      alt: "Middle Image",
    },
    {
      src: "https://i.ibb.co.com/rR7kcSM9/gregory-hayes-h5cd51-KXm-RQ-unsplash-1.jpg",
      alt: "Right Image",
    },
  ];

  return (
    <section className="py-24 how-works relative">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 items-end justify-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl cursor-pointer transform transition-transform duration-500 hover:scale-105 w-full h-112"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSpotlightSection;
