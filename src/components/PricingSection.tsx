import { ArrowRight } from "lucide-react";

const PricingSection = () => (
  <section id="pricing" className="section-padding bg-card">
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <p className="font-body text-sm uppercase tracking-[0.25em] text-primary mb-3">Investment</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          Pricing Plans
        </h2>
        <div className="gold-divider" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        {/* BSP Card */}
        <div className="border border-border rounded-sm p-8 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">Basic Sale Price</p>
          <p className="font-display text-4xl font-bold text-foreground mb-1">₹10,000</p>
          <p className="font-body text-sm text-muted-foreground">per sq. yard</p>
        </div>

        {/* Plot Sizes - Featured */}
        <div className="border-2 border-primary rounded-sm p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-body text-xs font-semibold px-4 py-1 rounded-sm uppercase tracking-wider">
            Most Popular
          </span>
          <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">Plot Sizes</p>
          <p className="font-display text-4xl font-bold text-foreground mb-1">100+</p>
          <p className="font-body text-sm text-muted-foreground">sq. yards onwards</p>
          <p className="font-body text-xs text-muted-foreground mt-2">Custom sizes available</p>
        </div>

        {/* PLC Card */}
        <div className="border border-border rounded-sm p-8 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">Corner Plot PLC</p>
          <p className="font-display text-4xl font-bold text-foreground mb-1">₹100</p>
          <p className="font-body text-sm text-muted-foreground">per sq. yard extra</p>
        </div>
      </div>

      {/* Payment Plan */}
      <div className="max-w-2xl mx-auto">
        <h3 className="font-display text-2xl font-semibold text-foreground text-center mb-8">Payment Plan</h3>
        <div className="space-y-4">
          {[
            { stage: "Booking", payment: "10%", desc: "Secure your plot" },
            { stage: "Within 30 Days", payment: "80%", desc: "Complete major payment" },
            { stage: "At Registry", payment: "10%", desc: "Final settlement" },
          ].map((s, i) => (
            <div key={s.stage} className="flex items-center gap-4 bg-secondary rounded-sm p-5">
              <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-body text-sm font-bold flex-shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <p className="font-body text-sm font-semibold text-foreground">{s.stage}</p>
                <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
              </div>
              <p className="font-display text-2xl font-bold text-primary">{s.payment}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors"
          >
            Reserve Your Plot
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default PricingSection;
