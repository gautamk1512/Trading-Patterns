import { Navigation } from "@/components/navigation"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-md mx-auto">
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}
