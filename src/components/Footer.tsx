const Footer = () => (
  <footer className="bg-accent text-accent-foreground border-t border-accent-foreground/10 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="font-display text-lg font-semibold text-accent-foreground mb-2">Dishapuram Buildtech</p>
      <p className="font-body text-xs text-accent-foreground/50 mb-4">
        Marketed by Melius 888 Estate Advisors LLP
      </p>
      <p className="font-body text-xs text-accent-foreground/40">
        © {new Date().getFullYear()} Dishapuram Plots. All rights reserved. | RERA Registered
      </p>
    </div>
  </footer>
);

export default Footer;
