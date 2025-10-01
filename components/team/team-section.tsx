import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Linkedin, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    position: "CEO & Founder",
    image: "/professional-man.jpg",
    rating: 4.9,
    experience: "15+ years in fintech",
    description: "Former Goldman Sachs executive with expertise in algorithmic trading and financial technology.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "rajesh@tradepro.com",
    },
  },
  {
    name: "Priya Sharma",
    position: "CTO",
    image: "/professional-woman-diverse.png",
    rating: 4.8,
    experience: "12+ years in tech",
    description: "Ex-Microsoft engineer specializing in high-frequency trading systems and blockchain technology.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "priya@tradepro.com",
    },
  },
  {
    name: "Amit Singh",
    position: "Head of Trading",
    image: "/professional-man-2.png",
    rating: 4.9,
    experience: "18+ years trading",
    description: "Veteran trader with experience at top investment banks and hedge funds across global markets.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "amit@tradepro.com",
    },
  },
  {
    name: "Sneha Patel",
    position: "Head of Compliance",
    image: "/professional-woman-2.png",
    rating: 4.7,
    experience: "10+ years regulatory",
    description: "Former SEBI official ensuring our platform meets all regulatory requirements and best practices.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sneha@tradepro.com",
    },
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Leadership Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">Meet our team.</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experienced professionals dedicated to revolutionizing the trading industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors group">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.position}</p>

                <div className="flex items-center justify-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(member.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-2">{member.rating}</span>
                </div>

                <Badge variant="outline" className="mb-3 text-xs">
                  {member.experience}
                </Badge>

                <p className="text-sm text-muted-foreground mb-4 text-pretty">{member.description}</p>

                <div className="flex items-center justify-center space-x-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
