import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Company: ["History", "About Us", "Blogs"],
    Services: ["Hair Removal", "Anti-Acne Treatment", "Anti-Aging Treatment", "Body Laser", "Facials and Peels", "Slimming and Firming", "Gluta Whitening"],
    Help: ["Find Your Skin", "Data Privacy", "FAQs"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
    { icon: Twitter, href: "#" },
  ];

  return (
    <footer className="bg-green-deep text-accent-foreground">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-8 lg:gap-6">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="mb-2 md:mb-3">
              <img 
                src="https://i.imgur.com/9beP2dq.png" 
                alt="Hilomè Logo" 
                className="h-5 md:h-6 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-accent-foreground/70 text-[10px] md:text-xs leading-relaxed">
              Your trusted partner in achieving radiant, healthy skin.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-xs md:text-sm mb-2 md:mb-3">{title}</h4>
              <ul className="space-y-1 md:space-y-1.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-accent-foreground/70 hover:text-accent-foreground transition-colors text-[10px] md:text-xs"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Follow Us */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-semibold text-xs md:text-sm mb-2 md:mb-3">Follow Us</h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-foreground/10 hover:bg-accent-foreground/20 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className="mt-6 pt-4 border-t border-accent-foreground/20 text-center">
          <p className="text-accent-foreground/50 text-xs">
            © {new Date().getFullYear()} Hilomè. All rights reserved.
          </p>
          <p className="text-accent-foreground/40 text-[10px] mt-1">
            Powered by LogiCode.PH
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
