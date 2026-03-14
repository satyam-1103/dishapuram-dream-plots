import { Home, Trees, Store, Building } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Plots",
    desc: "Premium residential plots designed for peaceful and modern living in a well-planned community.",
  },
  {
    icon: Trees,
    title: "Farmhouse Plots",
    desc: "Spacious farmhouse plots perfect for weekend homes and nature living away from the city.",
  },
  {
    icon: Store,
    title: "Commercial Shops",
    desc: "Commercial spaces for business opportunities within the thriving township ecosystem.",
  },
  {
    icon: Building,
    title: "Township Infrastructure",
    desc: "Well-developed township with wide roads, electricity, water supply, and green planning.",
  },
];

const infra = ["Wide Roads (30ft, 40ft, 60ft)", "Electricity Supply", "Water Supply", "Plantation & Green Spaces", "Community-focused Planning"];

const ServicesSection = () => (
  <section id="services" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">Our Offerings</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          What We Offer
        </h2>
        <div className="gold-divider mb-6" />
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          A complete township experience with premium plots and world-class infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((s) => (
          <div
            key={s.title}
            className="group bg-card border border-border rounded-sm p-8 text-center transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
          >
            <div className="w-14 h-14 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Infrastructure strip */}
      <div className="bg-secondary rounded-sm p-8 md:p-10">
        <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">Township Infrastructure</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {infra.map((i) => (
            <span key={i} className="font-body text-sm bg-card border border-border rounded-sm px-5 py-2.5 text-foreground">
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
