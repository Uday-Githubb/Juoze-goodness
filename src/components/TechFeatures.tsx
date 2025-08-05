import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Truck, Smartphone, Zap, Shield, BarChart3, MapPin, Clock } from "lucide-react";
const features = [{
  icon: Brain,
  title: "AI-Powered Recommendations",
  description: "Our machine learning algorithm analyzes your preferences, health goals, and past orders to suggest the perfect juice combinations tailored just for you.",
  tech: "TensorFlow.js",
  color: "from-purple-500 to-pink-500"
}, {
  icon: MapPin,
  title: "Real-Time GPS Tracking",
  description: "Track your delivery in real-time with live GPS updates, estimated arrival times, and driver communication through our advanced logistics system.",
  tech: "WebRTC + GPS API",
  color: "from-blue-500 to-cyan-500"
}, {
  icon: Smartphone,
  title: "Progressive Web App",
  description: "Enjoy a native app experience directly in your browser with offline support, push notifications, and seamless performance across all devices.",
  tech: "PWA + Service Workers",
  color: "from-green-500 to-emerald-500"
}, {
  icon: Zap,
  title: "Lightning Fast Performance",
  description: "Built with cutting-edge technologies ensuring sub-second load times, instant search results, and smooth animations throughout the platform.",
  tech: "React 18 + Vite",
  color: "from-yellow-500 to-orange-500"
}, {
  icon: Shield,
  title: "Blockchain Security",
  description: "Your data and transactions are secured using blockchain technology, ensuring complete transparency and immutable order history.",
  tech: "Web3 Integration",
  color: "from-indigo-500 to-purple-500"
}, {
  icon: BarChart3,
  title: "Advanced Analytics",
  description: "Comprehensive dashboard with nutrition tracking, health insights, and personalized recommendations based on your consumption patterns.",
  tech: "Chart.js + D3.js",
  color: "from-red-500 to-pink-500"
}, {
  icon: Truck,
  title: "Smart Logistics",
  description: "Optimized delivery routes using advanced algorithms, reducing delivery time by 40% while maintaining the highest quality standards.",
  tech: "Route Optimization AI",
  color: "from-teal-500 to-green-500"
}, {
  icon: Clock,
  title: "Predictive Ordering",
  description: "Our AI predicts your juice needs based on consumption patterns, automatically suggesting reorders before you run out.",
  tech: "Predictive ML Models",
  color: "from-violet-500 to-blue-500"
}];
const TechFeatures = () => {
  return <section id="tech-features" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-float"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-xl animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-primary text-primary-foreground border-0">
            <Zap className="h-4 w-4 mr-2" />
            Cutting-Edge Technology
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {" "}
            
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Experience the future of food delivery with our revolutionary platform.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => <Card key={feature.title} className="group relative overflow-hidden border-0 glass hover:shadow-elegant smooth hover:scale-105 animate-fade-in" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 smooth`}></div>
              
              <CardContent className="p-6 relative z-10">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 smooth`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Tech Badge */}
                <Badge variant="outline" className="mb-3 text-xs">
                  {feature.tech}
                </Badge>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary smooth">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent opacity-0 group-hover:opacity-100 smooth"></div>
              </CardContent>
            </Card>)}
        </div>

        {/* Tech Stack Section */}
        
      </div>
    </section>;
};
export default TechFeatures;