import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin, Send, Leaf } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our latest updates and exclusive offers.",
      });
      setEmail("");
    }
  };

  return <footer id="contact" className="bg-gradient-to-b from-muted/20 to-primary/5 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-border/50">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Leaf className="h-4 w-4 mr-2" />
              Stay Fresh
            </Badge>
            <h3 className="text-3xl font-bold mb-4">
              Get <span className="gradient-text">Fresh Updates</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for exclusive offers, new juice launches, 
              and health tips delivered straight to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email"
                placeholder="Enter your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass border-white/20" 
                required
              />
              <Button type="submit" className="group">
                Subscribe
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 smooth" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold gradient-text mb-4">FreshFlow</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Revolutionizing healthy living through premium vegetable juices 
                delivered fresh to your door with cutting-edge technology.
              </p>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["Menu", "About Us", "Health Benefits", "Nutrition Guide", "Delivery Areas", "Corporate Orders"].map(link => <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary smooth">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-3">
                {["Help Center", "Order Tracking", "Returns & Refunds", "Contact Support", "FAQ", "Shipping Info"].map(link => <li key={link}>
                    <a href="#" className="text-muted-foreground hover:text-primary smooth">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    123 Fresh Avenue<br />
                    Health District, HD 12345
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+1234567890" className="text-sm text-muted-foreground hover:text-primary smooth">+91 9811905747</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:hello@freshflow.com" className="text-sm text-muted-foreground hover:text-primary smooth">in.uday.work@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 FreshFlow. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary smooth">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;