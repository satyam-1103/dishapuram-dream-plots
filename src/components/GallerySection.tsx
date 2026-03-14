import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const images = [
  { src: gallery1, alt: "Premium residential plots at Dishapuram" },
  { src: gallery2, alt: "Wide tree-lined roads in Dishapuram Township" },
  { src: gallery3, alt: "Farmhouse plots with lush green surroundings" },
  { src: gallery4, alt: "Commercial spaces in Dishapuram Township" },
];

const GallerySection = () => (
  <section id="gallery" className="section-padding bg-secondary">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">Visual Tour</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Project Gallery
        </h2>
        <div className="gold-divider" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img) => (
          <div key={img.alt} className="group overflow-hidden rounded-sm">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
