import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Star, Clock, TrendingUp, Heart } from "lucide-react";
import { juices, categories } from "@/data/juices";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSize, setSelectedSize] = useState<"small" | "medium" | "large">("medium");
  const [displayCount, setDisplayCount] = useState(6);
  const [wishlistItems, setWishlistItems] = useState<string[]>([]);
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

  const filteredJuices = selectedCategory === "All" 
    ? juices 
    : juices.filter(juice => juice.category === selectedCategory);

  const handleAddToCart = (juice: any) => {
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

  const toggleWishlist = (juiceId: string) => {
    setWishlistItems(prev => {
      const isInWishlist = prev.includes(juiceId);
      const newWishlist = isInWishlist
        ? prev.filter(id => id !== juiceId)
        : [...prev, juiceId];
      
      toast({
        title: isInWishlist ? "Removed from wishlist" : "Added to wishlist",
        description: isInWishlist 
          ? "Item has been removed from your wishlist." 
          : "Item has been added to your wishlist.",
      });
      
      return newWishlist;
    });
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 6);
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <TrendingUp className="h-4 w-4 mr-2" />
            Our Menu
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Premium</span> Juice Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with the finest organic vegetables, each juice is designed to 
            maximize nutrition and flavor using cutting-edge cold-press technology.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Size Selector */}
        <div className="flex justify-center gap-2 mb-12">
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJuices.slice(0, displayCount).map((juice, index) => (
            <Card
              key={juice.id}
              className="group overflow-hidden border-0 shadow-card-custom hover:shadow-elegant smooth hover:scale-105 glass"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={juice.image}
                  alt={juice.name}
                  className="w-full h-64 object-cover group-hover:scale-110 smooth"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {juice.isNew && (
                    <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                  )}
                  {juice.isPopular && (
                    <Badge className="bg-accent text-accent-foreground">Popular</Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glass p-2 rounded-full h-8 w-8"
                    onClick={() => toggleWishlist(juice.id)}
                  >
                    <Heart 
                      className={`h-4 w-4 ${
                        wishlistItems.includes(juice.id) 
                          ? 'text-red-500 fill-current' 
                          : 'text-muted-foreground'
                      }`}
                    />
                  </Button>
                  <div className="glass p-2 rounded-full">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-accent fill-current" />
                      <span className="font-medium">{(juice.nutritionScore / 10).toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{juice.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {juice.preparationTime}m
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {juice.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 mb-2">
                    {juice.ingredients.slice(0, 3).map((ingredient) => (
                      <Badge
                        key={ingredient}
                        variant="outline"
                        className="text-xs"
                      >
                        {ingredient}
                      </Badge>
                    ))}
                    {juice.ingredients.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{juice.ingredients.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {juice.benefits.slice(0, 2).map((benefit) => (
                    <Badge
                      key={benefit}
                      className="text-xs bg-primary/10 text-primary border-primary/20"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold gradient-text">
                    ₹{juice.price[selectedSize]}
                  </div>
                  <Button
                    onClick={() => handleAddToCart(juice)}
                    className="group"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2 group-hover:rotate-90 smooth" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {displayCount < filteredJuices.length && (
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={handleLoadMore}
            >
              Load More Juices
              <TrendingUp className="ml-2 h-5 w-5 group-hover:translate-x-1 smooth" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;