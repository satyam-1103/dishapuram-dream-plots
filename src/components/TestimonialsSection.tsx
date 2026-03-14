import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Jaipur",
    text: "Dishapuram Plots is the best investment I've made. The township planning and green spaces are exceptional. Highly recommended for anyone looking for long-term value.",
  },
  {
    name: "Priya Gupta",
    location: "Delhi",
    text: "The proximity to Khatu Shyam Ji and excellent highway connectivity made this an easy decision. The team at Melius 888 was incredibly helpful throughout.",
  },
  {
    name: "Amit Verma",
    location: "Mumbai",
    text: "A government-approved project with modern infrastructure — that's rare to find at this price. The farmhouse plots are perfect for our weekend getaway plans.",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">Testimonials</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          What Our Investors Say
        </h2>
        <div className="gold-divider" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-secondary rounded-sm p-8">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
