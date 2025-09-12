import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Plus, Trash2 } from "lucide-react";
import { juices, Juice } from "@/data/juices";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal = ({ isOpen, onClose }: WishlistModalProps) => {
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium");
  const { addItem } = useCart();
  const { toast } = useToast();

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem("juoze-wishlist");
    if (savedWishlist) {
      setWishlistItems(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("juoze-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const wishlistJuices = juices.filter(juice => wishlistItems.includes(juice.id));

  const removeFromWishlist = (juiceId: string) => {
    setWishlistItems(prev => prev.filter(id => id !== juiceId));
    toast({
      title: "Removed from wishlist",
      description: "Item has been removed from your wishlist.",
    });
  };

  const handleAddToCart = (juice: Juice) => {
    addItem({
      id: juice.id,
      name: juice.name,
      price: juice.price[selectedSize],
      image: juice.image,
      size: selectedSize,
    });
    
    toast({
      title: "Added to cart!",
      description: `${juice.name} (${selectedSize}) has been added to your cart.`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
            <Heart className="h-6 w-6 text-red-500 fill-current" />
            My Wishlist
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Size Selector */}
          <div className="flex justify-center gap-2">
            <div className="glass p-1 rounded-full">
              {(["small", "medium", "large"] as const).map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedSize(size)}
                  className="rounded-full capitalize"
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Wishlist Items */}
          <div className="overflow-y-auto max-h-96">
            {wishlistJuices.length > 0 ? (
              <div className="space-y-4">
                {wishlistJuices.map((juice) => (
                  <Card key={juice.id} className="glass border-0 hover:shadow-elegant smooth">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={juice.image}
                          alt={juice.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{juice.name}</h3>
                            <div className="text-lg font-bold gradient-text">
                              ₹{juice.price[selectedSize]}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                            {juice.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              <Badge variant="outline" className="text-xs">
                                {juice.category}
                              </Badge>
                              {juice.isNew && (
                                <Badge className="text-xs bg-secondary">New</Badge>
                              )}
                              {juice.isPopular && (
                                <Badge className="text-xs bg-accent">Popular</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => removeFromWishlist(juice.id)}
                                className="h-8"
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => handleAddToCart(juice)}
                                className="h-8"
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Your wishlist is empty</p>
                <p className="text-muted-foreground">
                  Add some juices to your wishlist to see them here
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WishlistModal;