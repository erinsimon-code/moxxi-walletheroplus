import Link from 'next/link';
import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { CHALLENGE_EXAMPLES, EDUCATION_DISCLAIMER, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Challenges | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function ChallengesPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      <section className="py-20 bg-page-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Group Challenges</h1>
          <p className="text-lg text-body-text">Join a group challenge with coworkers at your company.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {CHALLENGE_EXAMPLES.map((challenge) => (
            <div key={challenge.title} className="rounded-md p-8 border border-card-border bg-white shadow-md flex flex-col">
              <span className="inline-block mb-4 w-fit px-3 py-1 rounded-full text-xs font-heading font-bold bg-gold/20 text-deep-green">
                Example
              </span>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                  <Users className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2 text-deep-green">{challenge.title}</h3>
              <p className="text-center text-muted-text mb-6">{challenge.date}</p>
              <Link
                href="/join"
                className="mt-auto inline-block text-center px-4 py-3 rounded-md font-heading font-semibold bg-deep-green text-white hover:bg-secondary-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Join challenge
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-text">
          Progress is self-reported. Nothing connects to your bank account.
        </p>
        <p className="text-center mt-4 text-sm text-muted-text max-w-2xl mx-auto">{EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}
