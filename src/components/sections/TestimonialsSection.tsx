import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/Card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechCorp",
    content: "This platform has transformed how we operate. The efficiency gains are remarkable.",
    avatar: "SJ",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Michael Chen",
    role: "CTO at StartupX",
    content: "The best decision we made was switching to this platform. Customer support is outstanding.",
    avatar: "MC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
  },
  {
    name: "Emily Davis",
    role: "Operations Director",
    content: "Intuitive interface, powerful features, and great value for money. Highly recommended!",
    avatar: "ED",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
  },
];

export function TestimonialsSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Don&apos;t just take our word for it - hear from our satisfied customers
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} className="bg-muted/50 border-[2px]  border-[#0091ea] ">
            <CardContent className="p-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="mt-4">{testimonial.content}</p>
              <div className="mt-6 flex items-center gap-4">
                <Avatar>
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}