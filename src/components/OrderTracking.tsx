import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  Truck, 
  CheckCircle2, 
  Clock, 
  MapPin,
  Phone,
  MessageCircle
} from "lucide-react";

const OrderTracking = () => {
  const [orderProgress, setOrderProgress] = useState(65);
  const [currentStatus, setCurrentStatus] = useState("In Transit");

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOrderProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 5;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const orderSteps = [
    {
      icon: Package,
      title: "Order Confirmed",
      description: "Your fresh juices are being prepared",
      time: "2:30 PM",
      status: "completed",
    },
    {
      icon: Package,
      title: "Preparation",
      description: "Our team is crafting your juices with care",
      time: "2:45 PM", 
      status: "completed",
    },
    {
      icon: Truck,
      title: "Out for Delivery",
      description: "Your order is on its way to you",
      time: "3:15 PM",
      status: "current",
    },
    {
      icon: CheckCircle2,
      title: "Delivered",
      description: "Enjoy your fresh, healthy juices!",
      time: "4:00 PM (Est.)",
      status: "pending",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-secondary-foreground">
            <Truck className="h-4 w-4 mr-2" />
            Live Tracking
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Real-Time</span>{" "}
            <span className="gradient-text">Order Tracking</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience next-level transparency with our live GPS tracking, 
            real-time updates, and direct communication with your delivery driver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Live Map Section */}
          <Card className="glass border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Live Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Simulated Map */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg relative overflow-hidden mb-6">
                {/* Map Grid Pattern */}
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='hsl(var(--primary))' fill-opacity='0.1'%3E%3Cpath d='M0 40h40v-40h-40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}>
                </div>
                
                {/* Delivery Route */}
                <svg className="absolute inset-0 w-full h-full">
                  <path
                    d="M20 380 Q180 300 360 180"
                    stroke="hsl(var(--primary))"
                    strokeWidth="3"
                    strokeDasharray="10,5"
                    fill="none"
                    className="animate-pulse"
                  />
                </svg>

                {/* Driver Location (Moving) */}
                <div 
                  className="absolute w-4 h-4 bg-secondary rounded-full animate-pulse"
                  style={{ 
                    top: `${50 + Math.sin(Date.now() / 1000) * 10}%`,
                    left: `${50 + Math.cos(Date.now() / 1000) * 15}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="absolute inset-0 bg-secondary/30 rounded-full scale-150 animate-ping"></div>
                </div>

                {/* Your Location */}
                <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent rounded-full">
                  <div className="absolute inset-0 bg-accent/30 rounded-full scale-150 animate-ping"></div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Delivery Progress</span>
                  <span className="text-sm text-muted-foreground">{orderProgress.toFixed(0)}%</span>
                </div>
                <Progress value={orderProgress} className="h-2" />
              </div>

              {/* Driver Info */}
              <div className="glass p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      JD
                    </div>
                    <div>
                      <div className="font-medium">John Doe</div>
                      <div className="text-sm text-muted-foreground">Delivery Driver</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Timeline */}
          <Card className="glass border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Order Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {orderSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center border-2 smooth
                      ${step.status === 'completed' 
                        ? 'bg-primary border-primary text-primary-foreground' 
                        : step.status === 'current'
                        ? 'bg-secondary border-secondary text-secondary-foreground animate-pulse'
                        : 'bg-muted border-muted-foreground/30 text-muted-foreground'
                      }
                    `}>
                      <step.icon className="h-5 w-5" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={`font-medium ${
                          step.status === 'current' ? 'text-secondary' : ''
                        }`}>
                          {step.title}
                        </h4>
                        <Badge 
                          variant={
                            step.status === 'completed' ? 'default' :
                            step.status === 'current' ? 'secondary' : 'outline'
                          }
                          className="text-xs"
                        >
                          {step.time}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Details */}
              <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                <h5 className="font-medium mb-3">Order #FF-2024-001</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Green Power (Medium)</span>
                    <span>$11.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunset Glow (Large)</span>
                    <span>$15.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span>$2.99</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-medium">
                    <span>Total</span>
                    <span className="gradient-text">$30.97</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderTracking;