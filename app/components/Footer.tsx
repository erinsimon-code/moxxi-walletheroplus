import Link from 'next/link';
import { BRAND, LEGAL_NAME, ADDRESS, PHONE, PHONE_DISPLAY, EMAIL, EDUCATION_DISCLAIMER } from '../lib/brand';

export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-deep-green text-white border-t-4 border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-white">{BRAND}</h3>
            <p className="text-white/70">
              An employer-sponsored money habits program with weekly habits, group challenges and live Q&amp;A sessions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-white/70 hover:text-white hover:underline transition-colors">How It Works</Link></li>
              <li><Link href="/habits" className="text-white/70 hover:text-white hover:underline transition-colors">Habits</Link></li>
              <li><Link href="/challenges" className="text-white/70 hover:text-white hover:underline transition-colors">Challenges</Link></li>
              <li><Link href="/sessions" className="text-white/70 hover:text-white hover:underline transition-colors">Sessions</Link></li>
              <li><Link href="/faq" className="text-white/70 hover:text-white hover:underline transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/sms-terms" className="text-white/70 hover:text-white hover:underline transition-colors">SMS Terms</Link></li>
              <li><Link href="/privacy" className="text-white/70 hover:text-white hover:underline transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-white/70 hover:text-white hover:underline transition-colors">Terms</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white hover:underline transition-colors">Contact</Link></li>
              <li><Link href="/verify" className="text-white/70 hover:text-white hover:underline transition-colors">Verify Your Number</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <p className="text-white/70">{LEGAL_NAME}</p>
            <p className="mt-2 text-white/70">{ADDRESS}</p>
            <a href={`tel:${PHONE}`} className="mt-2 block text-white/70 hover:text-white hover:underline transition-colors">{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} className="mt-2 block text-white/70 hover:text-white hover:underline transition-colors">{EMAIL}</a>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center border-t border-white/20 text-white/70">
          <p>&copy; {year} {LEGAL_NAME}. All rights reserved.</p>
          <p className="mt-2 text-sm">{ADDRESS}</p>
          <p className="mt-1 text-sm">
            <a href={`tel:${PHONE}`} className="hover:text-white hover:underline transition-colors">{PHONE_DISPLAY}</a>
            {' · '}
            <a href={`mailto:${EMAIL}`} className="hover:text-white hover:underline transition-colors">{EMAIL}</a>
          </p>
          <p className="mt-2 text-sm">{BRAND} is for current employees of participating employers only.</p>
          <p className="mt-4 text-sm max-w-3xl mx-auto">{EDUCATION_DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  );
}


