import { useState } from "react";
import { ArrowRight, Download, ShieldCheck, MapPin, Building2, Home, Send } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import brochure from "@/assets/Dishapuram Brochure.pdf";

const highlights = [
  { icon: ShieldCheck, text: "Government Approved Project" },
  { icon: MapPin, text: "Excellent Highway Connectivity" },
  { icon: Building2, text: "Well Planned Township" },
  { icon: Home, text: "Residential & Commercial Plots" },
];

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", plotSize: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm interested in Dishapuram Plots.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AEmail: ${encodeURIComponent(form.email)}%0APlot Size: ${encodeURIComponent(form.plotSize)}`;
    window.open(`https://wa.me/918076945627?text=${msg}`, "_blank");
  };

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
      <div className="relative z-10 container mx-auto px-4 py-28 md:py-32">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Left - Text Content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-gold-light mb-6 opacity-0 animate-fade-in-up">
              Dishapuram Buildtech Presents
            </p>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-in-up animation-delay-200">
              Invest in Your Future at
              <br />
              <span className="text-gradient-gold">Dishapuram Plots</span>
            </h1>

            <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-8 opacity-0 animate-fade-in-up animation-delay-400">
              Government Approved Mixed Land Use Plots & Farmhouses Near Khatu Shyam Ji
            </p>

            {/* Highlight Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10 opacity-0 animate-fade-in-up animation-delay-600">
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-6 opacity-0 animate-fade-in-up animation-delay-600">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-all duration-300 shadow-soft"
              >
                Book Your Plot Now
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={brochure}
                target="_blank"
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

          {/* Right - Enquiry Form */}
          <div className="lg:col-span-2 opacity-0 animate-fade-in-up animation-delay-400">
            <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-sm p-6 md:p-8">
              <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground mb-1 text-center">
                Get Instant Quote
              </h3>
              <p className="font-body text-xs text-primary-foreground/60 text-center mb-6 uppercase tracking-wider">
                Free site visit • No obligation
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { key: "plotSize", label: "Plot Size Interested", type: "text", placeholder: "e.g. 100 sq. yards" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="font-body text-[11px] uppercase tracking-wider text-primary-foreground/70 mb-1 block">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm px-4 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary transition-colors"
                      required={f.key !== "email"}
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3.5 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors mt-2"
                >
                  <Send className="w-4 h-4" />
                  Book Free Site Visit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
