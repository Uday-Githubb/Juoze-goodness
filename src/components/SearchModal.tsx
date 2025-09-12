import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, X, Plus } from "lucide-react";
import { juices, Juice } from "@/data/juices";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium");
  const { addItem } = useCart();
  const { toast } = useToast();

  const filteredJuices = juices.filter(
    (juice) =>
      juice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      juice.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      juice.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      juice.benefits.some((benefit) =>
        benefit.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

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

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text">Search Juices</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by name, ingredients, or benefits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

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

          {/* Results */}
          <div className="overflow-y-auto max-h-96">
            {searchQuery ? (
              filteredJuices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredJuices.map((juice) => (
                    <Card key={juice.id} className="glass border-0 hover:shadow-elegant smooth">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          <img
                            src={juice.image}
                            alt={juice.name}
                            className="w-16 h-16 object-cover rounded-lg"
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
                              </div>
                              <Button
                                size="sm"
                                onClick={() => handleAddToCart(juice)}
                                className="h-8"
                              >
                                <Plus className="h-3 w-3 mr-1" />
                                Add
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">No juices found</p>
                  <p className="text-muted-foreground">
                    Try searching with different keywords
                  </p>
                </div>
              )
            ) : (
              <div className="text-center py-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Start searching</p>
                <p className="text-muted-foreground">
                  Search by juice name, ingredients, or health benefits
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;