import Link from 'next/link';
import type { Metadata } from 'next';
import { CalendarDays } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SESSION_EXAMPLES, EDUCATION_DISCLAIMER, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Sessions | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function SessionsPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      <section className="py-20 bg-page-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Live Group Q&amp;A Sessions</h1>
          <p className="text-lg text-body-text">Bring your money questions to a live group Q&amp;A session with a financial educator.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {SESSION_EXAMPLES.map((session) => (
            <div key={session.title} className="rounded-md p-8 border border-card-border bg-white shadow-md flex flex-col">
              <span className="inline-block mb-4 w-fit px-3 py-1 rounded-full text-xs font-heading font-bold bg-gold/20 text-deep-green">
                Example
              </span>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                  <CalendarDays className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2 text-deep-green">{session.title}</h3>
              <p className="text-center text-muted-text mb-6">{session.date}</p>
              <Link
                href="/join"
                className="mt-auto inline-block text-center px-4 py-3 rounded-md font-heading font-semibold bg-deep-green text-white hover:bg-secondary-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Save your spot
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-text">
          Sessions are general education led by financial educators, not individual financial advice.
        </p>
        <p className="text-center mt-4 text-sm text-muted-text max-w-2xl mx-auto">{EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}
