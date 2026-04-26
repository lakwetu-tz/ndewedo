import type { Metadata } from 'next'
import { HeroSection } from '@/components/HeroSection'

export const metadata: Metadata = {
  title: 'Terms & Conditions - Ndewedo Tours',
  description: 'Terms and conditions for booking with Ndewedo Tours.',
}

export default function TermsPage() {
  return (
    <div className="w-full bg-white">
      <HeroSection 
        title="Terms & Conditions" 
        image="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop"
        showCta={false}
      />

      <section className="py-24 px-6 bg-[#fdfcfb]">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-['Poppins'] text-[13px] tracking-[4px] text-[#c97500] uppercase block mb-8">LEGAL FRAMEWORK</span>
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#222] leading-relaxed italic opacity-80">
            Commitment to transparency and fair travel.
          </h2>
          <div className="h-[1px] w-20 bg-[#1f751f] mx-auto mt-12" />
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-[900px] mx-auto space-y-20">

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <h2 className="font-serif text-[24px] text-[#222] uppercase tracking-wider md:text-right border-b md:border-b-0 md:border-r border-[#1f751f] pb-4 md:pb-0 md:pr-8">Booking</h2>
            <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-4">
              <p>
                By booking with Ndewedo Tours, you agree to these terms and conditions. All bookings are subject to availability and confirmation. A deposit is required to secure your reservation, with the balance due as specified in your booking confirmation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <h2 className="font-serif text-[24px] text-[#222] uppercase tracking-wider md:text-right border-b md:border-b-0 md:border-r border-[#c97500] pb-4 md:pb-0 md:pr-8">Payment</h2>
            <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                   <div className="w-1 h-1 bg-[#c97500] rounded-full" />
                   <span>Deposit: 30% of total cost upon booking</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-1 h-1 bg-[#c97500] rounded-full" />
                   <span>Final payment: Due 60 days before departure</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-1 h-1 bg-[#c97500] rounded-full" />
                   <span>Methods: Bank transfer, credit card, PayPal</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <h2 className="font-serif text-[24px] text-[#222] uppercase tracking-wider md:text-right border-b md:border-b-0 md:border-r border-[#1f751f] pb-4 md:pb-0 md:pr-8">Cancellation</h2>
            <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-4">
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                   <div className="w-1 h-1 bg-[#1f751f] rounded-full" />
                   <span>60+ days: Full refund minus 10% fee</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-1 h-1 bg-[#1f751f] rounded-full" />
                   <span>30-59 days: 50% refund</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-1 h-1 bg-[#1f751f] rounded-full" />
                   <span>Less than 30 days: No refund</span>
                </li>
              </ul>
              <p className="pt-4 italic">We strongly recommend purchasing comprehensive travel insurance.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <h2 className="font-serif text-[24px] text-[#222] uppercase tracking-wider md:text-right border-b md:border-b-0 md:border-r border-[#c97500] pb-4 md:pb-0 md:pr-8">Documents</h2>
            <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-4">
              <p>
                You are responsible for ensuring you have valid passports, visas, and health documentation. Ndewedo Tours will provide guidance but cannot be held liable for documentation issues.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <h2 className="font-serif text-[24px] text-[#222] uppercase tracking-wider md:text-right border-b md:border-b-0 md:border-r border-[#1f751f] pb-4 md:pb-0 md:pr-8">Safety</h2>
            <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-4">
              <p>
                Participants must be in good health and inform us of any medical conditions. We reserve the right to refuse service if health concerns could endanger the individual or group.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
            <h2 className="font-serif text-[24px] text-[#222] uppercase tracking-wider md:text-right border-b md:border-b-0 md:border-r border-[#c97500] pb-4 md:pb-0 md:pr-8">Liability</h2>
            <div className="font-quattro text-[18px] text-[#666] leading-relaxed space-y-4">
              <p>
                While we take every precaution to ensure your safety, adventure travel involves inherent risks. Ndewedo Tours acts as an agent and is not liable for injuries, losses, or damages incurred during your trip.
              </p>
            </div>
          </div>

          <div className="pt-20 border-t border-gray-100 flex justify-between items-center">
            <p className="font-['Poppins'] text-[12px] tracking-[2px] text-[#888] uppercase">Last updated: November 2025</p>
            <div className="h-[2px] w-12 bg-[#1f751f]" />
          </div>

        </div>
      </section>
    </div>
  )
}
