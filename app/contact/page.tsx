import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Building2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND, LEGAL_NAME, ADDRESS, PHONE, PHONE_DISPLAY, EMAIL, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Contact | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />
      <section className="py-12 bg-page-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Contact Us</h1>
          <p className="text-lg text-body-text">Questions about joining, your habits, challenges or this program? Here&apos;s how to reach us.</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-md p-8 border border-card-border space-y-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-deep-green">
              <Building2 className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-muted-text">Legal Name</h3>
              <p className="text-base font-medium text-deep-green">{LEGAL_NAME}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-deep-green">
              <MapPin className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-muted-text">Address</h3>
              <p className="text-base font-medium text-deep-green">{ADDRESS}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-deep-green">
              <Phone className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-muted-text">Phone</h3>
              <a href={`tel:${PHONE}`} className="text-base font-medium text-secondary-green hover:text-deep-green hover:underline">{PHONE_DISPLAY}</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-deep-green">
              <Mail className="w-5 h-5 text-gold" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-1 text-muted-text">Email</h3>
              <a href={`mailto:${EMAIL}`} className="text-base font-medium text-secondary-green hover:text-deep-green hover:underline">{EMAIL}</a>
            </div>
          </div>
        </div>
        <p className="text-sm text-center mt-8 text-muted-text">
          {LEGAL_NAME} — {BRAND} is for current employees of participating employers only.
        </p>
      </section>
      <Footer />
    </div>
  );
}


