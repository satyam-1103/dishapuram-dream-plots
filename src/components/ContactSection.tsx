import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", plotSize: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm interested in Dishapuram Plots.%0AName: ${form.name}%0APhone: ${form.phone}%0APlot Size: ${form.plotSize}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918076945627?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-accent text-accent-foreground">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.25em] text-gold-light mb-3">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-4">
            Book Your Site Visit
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
              { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
              { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              { key: "plotSize", label: "Plot Size Interested", type: "text", placeholder: "e.g. 100 sq. yards" },
            ].map((f) => (
              <div key={f.key}>
                <label className="font-body text-xs uppercase tracking-wider text-accent-foreground/70 mb-1.5 block">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full bg-brown-light/40 border border-accent-foreground/15 rounded-sm px-4 py-3 font-body text-sm text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:border-primary transition-colors"
                  required={f.key !== "email"}
                />
              </div>
            ))}
            <div>
              <label className="font-body text-xs uppercase tracking-wider text-accent-foreground/70 mb-1.5 block">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Any specific requirements..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-brown-light/40 border border-accent-foreground/15 rounded-sm px-4 py-3 font-body text-sm text-accent-foreground placeholder:text-accent-foreground/30 focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-sm font-body text-sm font-semibold uppercase tracking-wider hover:bg-gold-dark transition-colors"
            >
              <Send className="w-4 h-4" />
              Schedule Site Visit
            </button>
          </form>

          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-accent-foreground mb-6">Contact Information</h3>
              <div className="space-y-4">
                <p className="font-body text-sm text-accent-foreground/80 font-semibold">
                  Melius 888 Estate Advisors LLP
                </p>
                <a href="tel:+918076945627" className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">+91 8076945627</span>
                </a>
                <a href="tel:+919891804100" className="flex items-center gap-3 text-accent-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">+91 9891804100</span>
                </a>
                <div className="flex items-center gap-3 text-accent-foreground/70">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm">info@dishapurumplots.com</span>
                </div>
                <div className="flex items-start gap-3 text-accent-foreground/70">
                  <MapPin className="w-4 h-4 text-primary mt-0.5" />
                  <span className="font-body text-sm">Near Khatu Shyam Ji, Bangon Highway, Rajasthan</span>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-sm overflow-hidden border border-accent-foreground/15 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56925.78!2d75.0!3d27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzAwLjAiTiA3NcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) sepia(0.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dishapuram Plots Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
