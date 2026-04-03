import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer data-testid="footer" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4"><img src="/images/logo.webp" alt="Navkar Enterprises" /></h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-facebook"
                className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-twitter"
                className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-linkedin"
                className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="social-instagram"
                className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-link-${link.name.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:navkarenterprise71@gmail.com"
                  data-testid="footer-email"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  navkarenterprise71@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919702624623"
                  data-testid="footer-phone"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 97026 24623
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground whitespace-pre-line text-sm">
                  115/ NAGDEVI STREET ,<br />
                  ROOM NO. - 13 ,<br />
                  MUMBAI - 400003
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Mon - Sat:</span>
                <br />
                9:00 AM - 6:00 PM
              </li>
              <li>
                <span className="font-medium text-foreground">Sunday:</span>
                <br />
                Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center md:text-left">
          <p className="text-muted-foreground">
            © {currentYear} Navkar Enterprises. All rights reserved. | Premium Bearing Supplier & Stockist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;