import { Button } from "@/components/ui/button";
import { Play, Heart } from "lucide-react";
import Link from "next/link";

export function HomeSection() {
  return (
    <div className="relative">
      {/* Hero Background - Only covers navbar + hero */}
      <div className="absolute inset-0 top-[-4rem] h-screen">
        <div 
          className="absolute inset-0 bg-[url('/IMG_8264.jpg')] bg-cover bg-center"
          style={{ backgroundPosition: "50% 30%" }}
        >
          <div className="absolute inset-0 bg-background/95 backdrop-blur-[2px]" />
        </div>
      </div>

      <section className="relative min-h-[90vh] flex items-center justify-center">
        {/* Content */}
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Experience God&apos;s Love,{" "}
              <span className="">Grow in Faith,</span>{" "}
              <span className="block mt-2">Impact the World</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We believe in the power of community, worship, and service. Join us on a 
              journey of faith where you can experience God&apos;s love, grow in your 
              relationship with Him, and make a positive impact in our world.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground group relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                asChild
              >
                <Link href="/live">
                  <div className="relative z-10 flex items-center">
                    <Play className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Watch Livestream
                  </div>
                  <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group relative overflow-hidden transition-all duration-300 hover:scale-[1.02] border-primary/20 hover:border-primary/30"
                asChild
              >
                <Link href="/donate">
                  <div className="relative z-10 flex items-center">
                    <Heart className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:scale-110 group-hover:text-primary" />
                    Donate
                  </div>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
