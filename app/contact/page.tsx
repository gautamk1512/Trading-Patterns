import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/contact/contact-form"
import { AppDownload } from "@/components/pricing/app-download"

function ContactHero() {
  return (
    <section className="relative py-20 hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary border-primary/20">
          Get in Touch
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 text-balance">Contact Us.</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
          Have questions about our platform? We're here to help you succeed in your trading journey.
        </p>
      </div>
    </section>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <AppDownload />
    </main>
  )
}
