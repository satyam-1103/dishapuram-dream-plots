import { ArrowRight, Download, ShieldCheck, MapPin, Building2, Home } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: ShieldCheck, text: "Government Approved Project" },
  { icon: MapPin, text: "Excellent Highway Connectivity" },
  { icon: Building2, text: "Well Planned Township" },
  { icon: Home, text: "Residential & Commercial Plots" },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Dishapuram Premium Plotted Township"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-gold-light mb-6 opacity-0 animate-fade-in-up">
          Dishapuram Buildtech Presents
        </p>

        <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-200">
          Invest in Your Future at
          <br />
          <span className="text-gradient-gold">Dishapuram Plots</span>
        </h1>

        <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-400">
          Government Approved Mixed Land Use Plots & Farmhouses Near Khatu Shyam Ji
        </p>

        {/* Highlight Badges */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 opacity-0 animate-fade-in-up animation-delay-600">
          {highlights.map((h) => (
            <div
              key={h.text}
              className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-sm px-4 py-2"
            >
              <h.icon className="w-4 h-4 text-gold-light" />
              <span className="font-body text-xs md:text-sm text-primary-foreground/90">{h.text}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 opacity-0 animate-fade-in-up animation-delay-600">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-all duration-300 shadow-soft"
          >
            Book Your Plot Now
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Brochure
          </a>
        </div>

        <p className="font-body text-xs text-primary-foreground/50 tracking-wider">
          Marketed by Melius 888 Estate Advisors LLP
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
