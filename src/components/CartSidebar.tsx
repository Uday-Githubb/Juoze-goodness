import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar = ({ isOpen, onClose }: CartSidebarProps) => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const { toast } = useToast();

  const handleQuantityChange = (id: string, newQuantity: number, size?: string) => {
    if (newQuantity === 0) {
      removeItem(id, size);
      toast({
        title: "Item removed",
        description: "Item has been removed from your cart.",
      });
    } else {
      updateQuantity(id, newQuantity, size);
    }
  };

  const handleCheckout = () => {
    toast({
      title: "Checkout",
      description: "Redirecting to checkout page...",
    });
    // Here you would integrate with your payment system
  };

  const handleClearCart = () => {
    clearCart();
    toast({
      title: "Cart cleared",
      description: "All items have been removed from your cart.",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="absolute right-0 top-0 h-full w-full max-w-md glass border-l border-border animate-slide-in-right">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <Badge variant="secondary">{items.length}</Badge>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <Button variant="outline" className="mt-4" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={`${item.id}-${item.size}`} className="overflow-hidden">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                          {item.size && (
                            <Badge variant="outline" className="text-xs mb-2">
                              {item.size}
                            </Badge>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="text-sm font-bold gradient-text">
                              ₹{item.price}
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => 
                                  handleQuantityChange(item.id, item.quantity - 1, item.size)
                                }
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => 
                                  handleQuantityChange(item.id, item.quantity + 1, item.size)
                                }
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id, item.size)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="gradient-text">₹{getTotalPrice()}</span>
              </div>
              
              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  size="sm"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;