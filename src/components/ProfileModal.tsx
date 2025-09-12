import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  ShoppingBag, 
  Star, 
  Gift,
  Crown,
  Calendar
} from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const [activeTab, setActiveTab] = useState("profile");

  // Sample user data
  const sampleUser = {
    name: "Priya Sharma",
    email: "priya.sharma@email.com",
    phone: "+91 9876543210",
    location: "Mumbai, Maharashtra",
    memberSince: "January 2024",
    totalOrders: 47,
    favoriteJuices: 12,
    loyaltyPoints: 2450,
    membershipTier: "Gold Member",
  };

  const recentOrders = [
    { id: "JZ001", juice: "Green Power", date: "2024-01-15", amount: 399, status: "Delivered" },
    { id: "JZ002", juice: "Purple Majesty", date: "2024-01-12", amount: 499, status: "Delivered" },
    { id: "JZ003", juice: "Sunset Glow", date: "2024-01-08", amount: 449, status: "Delivered" },
  ];

  const favoriteJuices = [
    { name: "Green Power", orders: 15 },
    { name: "Iron Warrior", orders: 12 },
    { name: "Sunset Glow", orders: 8 },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">My Profile</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Profile Header */}
          <div className="glass p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                  {sampleUser.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl font-bold">{sampleUser.name}</h2>
                  <Badge className="bg-accent text-accent-foreground">
                    <Crown className="h-3 w-3 mr-1" />
                    {sampleUser.membershipTier}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Member since {sampleUser.memberSince}
                  </div>
                  <div className="flex items-center gap-1">
                    <Gift className="h-4 w-4" />
                    {sampleUser.loyaltyPoints} Points
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{sampleUser.totalOrders}</div>
                <div className="text-sm text-muted-foreground">Total Orders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">{sampleUser.favoriteJuices}</div>
                <div className="text-sm text-muted-foreground">Favorite Juices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold gradient-text">₹12,450</div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2">
            <Button
              variant={activeTab === "profile" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("profile")}
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
            <Button
              variant={activeTab === "orders" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("orders")}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Orders
            </Button>
            <Button
              variant={activeTab === "favorites" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab("favorites")}
            >
              <Heart className="h-4 w-4 mr-2" />
              Favorites
            </Button>
          </div>

          {/* Tab Content */}
          <div className="overflow-y-auto max-h-64">
            {activeTab === "profile" && (
              <Card className="glass border-0">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>{sampleUser.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>{sampleUser.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{sampleUser.location}</span>
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === "orders" && (
              <div className="space-y-3">
                {recentOrders.map((order) => (
                  <Card key={order.id} className="glass border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{order.juice}</div>
                          <div className="text-sm text-muted-foreground">
                            Order #{order.id} • {order.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">₹{order.amount}</div>
                          <Badge className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="space-y-3">
                {favoriteJuices.map((juice, index) => (
                  <Card key={juice.name} className="glass border-0">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-primary">#{index + 1}</span>
                          </div>
                          <div>
                            <div className="font-medium">{juice.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Ordered {juice.orders} times
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-accent fill-current" />
                          <span className="text-sm font-medium">Favorite</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;