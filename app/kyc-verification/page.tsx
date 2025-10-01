import { Navigation } from "@/components/navigation"
import { KYCVerification } from "@/components/kyc/kyc-verification"

export default function KYCVerificationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-12">
        <KYCVerification />
      </div>
    </main>
  )
}
