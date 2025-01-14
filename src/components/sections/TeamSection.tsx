import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Github, Linkedin, Twitter } from "lucide-react";

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    bio: "Visionary leader with 15+ years of experience in SaaS.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
    initials: "JS",
  },
  {
    name: "Lisa Wong",
    role: "CTO",
    bio: "Tech innovator specializing in scalable architecture.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400&h=400",
    initials: "LW",
  },
  {
    name: "David Miller",
    role: "Head of Product",
    bio: "Product strategist focused on user-centric solutions.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
    initials: "DM",
  },
  {
    name: "Emma Wilson",
    role: "Head of Design",
    bio: "Award-winning designer with a passion for UX.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400&h=400",
    initials: "EW",
  },
];

export function TeamSection() {
  return (
    <section className="container py-24 sm:py-32">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The talented people behind our success
        </p>
      </div>
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <Card key={member.name}>
            <CardHeader className="text-center">
              <Avatar className="mx-auto h-24 w-24">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">{member.name}</CardTitle>
              <CardDescription>{member.role}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground">{member.bio}</p>
              <div className="mt-4 flex justify-center gap-4">
                <Twitter className="h-5 w-5" />
                <Linkedin className="h-5 w-5" />
                <Github className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}