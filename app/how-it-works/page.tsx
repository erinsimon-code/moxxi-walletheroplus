import Link from 'next/link';
import type { Metadata } from 'next';
import { Smartphone, ListChecks, TrendingUp, Users, Settings, LineChart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PROGRAM_DESCRIPTION, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'How It Works | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      <section className="py-20 bg-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 text-deep-green">How It Works</h1>
          <p className="text-xl max-w-3xl mx-auto text-body-text">{PROGRAM_DESCRIPTION}</p>
        </div>
      </section>

      {/* For employees */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-deep-green">For Employees</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start rounded-md p-8 border border-card-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
              <Smartphone className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-deep-green">1. Join With Your Company ID</h3>
              <p className="text-body-text">Your employer gives you a company ID. Use it to join and choose whether you want to receive texts.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-md p-8 border border-card-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
              <ListChecks className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-deep-green">2. Pick Up a Weekly Habit</h3>
              <p className="text-body-text">Choose to receive account notifications (weekly habit reminders, streak and progress updates, challenge deadline reminders and one-time verification codes) and/or optional promotional messages (new challenges and live group Q&amp;A sessions).</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-md p-8 border border-card-border bg-white">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
              <TrendingUp className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-deep-green">3. Track Your Streak</h3>
              <p className="text-body-text">Each text links to the site so you can see full details. You can opt out any time, and joining is never a condition of employment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For employers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-deep-green">For Employers</h2>
        <div className="space-y-8">
          <div className="flex gap-6 items-start rounded-md p-8 border border-card-border bg-page-bg">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
              <Users className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-deep-green">1. Offer the Program</h3>
              <p className="text-body-text">An employer offers Wallet Hero Plus to its own current employees and issues a company ID employees use to join themselves.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-md p-8 border border-card-border bg-page-bg">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
              <Settings className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-deep-green">2. Pick Challenge Themes</h3>
              <p className="text-body-text">The employer picks challenge themes and schedules live group Q&amp;A sessions with financial educators for enrolled employees.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start rounded-md p-8 border border-card-border bg-page-bg">
            <div className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
              <LineChart className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2 text-deep-green">3. See Only Aggregated Participation</h3>
              <p className="text-body-text">The employer sees only aggregated participation, never an individual employee&apos;s habits, streaks or questions. The program is never open to the general public or used for recruiting or job seekers.</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16">
          <Link
            href="/join"
            className="inline-block px-10 py-5 text-xl font-heading font-semibold rounded-md bg-deep-green text-white hover:bg-secondary-green transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            Join with your company ID
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

