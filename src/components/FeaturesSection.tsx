import { Check, Plane, Factory, Container, CircleDot } from "lucide-react";

const features = [
  "Government Approved Development",
  "Located Near Khatu Shyam Ji",
  "Direct Bangon Highway Connectivity",
  "Green Corridor Development",
  "Well Planned Township Infrastructure",
  "Long-Term Investment Potential",
  "Community-focused Development",
];

const connectivity = [
  { icon: Plane, label: "Jaipur Domestic Airport" },
  { icon: Factory, label: "RIICO Industrial Hub" },
  { icon: Container, label: "Container Depot" },
  { icon: CircleDot, label: "Ring Road Access" },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-accent text-accent-foreground">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-gold-light mb-3">Advantages</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
          Why Choose Dishapuram
        </h2>
        <div className="w-16 h-0.5 bg-primary mx-auto" />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Features list */}
        <div className="space-y-4">
          {features.map((f) => (
            <div key={f} className="flex items-center gap-4 bg-brown-light/40 rounded-sm p-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="font-body text-sm md:text-base text-accent-foreground/90">{f}</span>
            </div>
          ))}
        </div>

        {/* Connectivity */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-accent-foreground mb-8">
            Nearby Connectivity
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {connectivity.map((c) => (
              <div
                key={c.label}
                className="border border-accent-foreground/15 rounded-sm p-6 text-center hover:border-primary/50 transition-colors"
              >
                <c.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <span className="font-body text-sm text-accent-foreground/80">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
