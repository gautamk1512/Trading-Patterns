import { Navigation } from "@/components/navigation"
import { LoginForm } from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12 px-4">
        <div className="max-w-md mx-auto">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
