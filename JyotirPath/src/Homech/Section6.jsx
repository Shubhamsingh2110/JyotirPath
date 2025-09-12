const SimpleGrid = () => {
  const images = [
    {
      src: "https://i.pinimg.com/736x/09/07/11/090711f285451ec7db392675b47bc9ee.jpg",
      alt: "The Moon tarot card XVIII on round stone with marble background",
    },
    {
      src: "https://i.pinimg.com/736x/a0/bf/a1/a0bfa16a5a65738d974b7c0de8164797.jpg",
      alt: "Scattered tarot deck with natal chart and gemstones",
    },
    {
      src: "https://i.pinimg.com/736x/2a/6b/1e/2a6b1e8a909d0af52162ed04162d3dfa.jpg",
      alt: "Person performing pendulum chakra healing over woman lying down",
    },
    {
      src: "https://i.pinimg.com/1200x/6d/a0/88/6da0887c8703b94ce6b6158226692b68.jpg",
      alt: "Woman doing tarot card reading at spiritual table with crystals, candles, and plants",
    },
    {
      src: "https://i.pinimg.com/736x/52/a4/ef/52a4efd117f8d24b5c6db7dd20da0e65.jpg",
      alt: "Hand placing chakra stones on drawn silhouette with singing bowl",
    },
    {
      src: "https://i.pinimg.com/1200x/d7/9e/ee/d79eee9929b28f1bba1437fe7132ea96.jpg",
      alt: "Crystals and gemstones like amethyst and green aventurine on wood with blurred nature background",
    },
  ]

  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white p-2"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-64 md:h-72 lg:h-96 object-cover object-center rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SimpleGrid
