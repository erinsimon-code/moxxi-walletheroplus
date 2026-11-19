import type { Metadata } from 'next';
import { Building2, Award, ListChecks, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'My Plus | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function MyPlusPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      <section className="py-20 bg-page-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Sign In With Your Company ID</h1>
          <p className="text-lg mb-8 text-body-text">Sign in to see your habit, your streak and your challenges.</p>
          <div className="max-w-sm mx-auto rounded-md p-6 border border-card-border bg-white shadow-md">
            <label className="block text-sm font-medium mb-2 text-left text-deep-green">Company ID</label>
            <div className="relative mb-4">
              <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
              <input type="text" placeholder="Company ID" className="w-full pl-10 pr-4 py-3 rounded-md border border-card-border bg-page-bg text-body-text focus:outline-none focus-visible:ring-2 focus-visible:ring-gold" />
            </div>
            <button type="button" className="w-full py-3 rounded-md font-heading font-semibold bg-deep-green text-white hover:bg-secondary-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2">
              Sign In
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-md border border-card-border bg-white shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                <ListChecks className="w-7 h-7 text-gold" />
              </div>
            </div>
            <h2 className="text-xl font-heading font-bold mb-2 text-deep-green">This Week&apos;s Habit</h2>
            <p className="text-body-text">Sign in to see the small money habit you picked up this week.</p>
          </div>
          <div className="p-8 rounded-md border border-card-border bg-white shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gold">
                <Award className="w-7 h-7 text-deep-green" />
              </div>
            </div>
            <h2 className="text-xl font-heading font-bold mb-2 text-deep-green">My Streak</h2>
            <p className="text-body-text">Sign in to see your current habit streak.</p>
          </div>
          <div className="p-8 rounded-md border border-card-border bg-white shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                <Users className="w-7 h-7 text-gold" />
              </div>
            </div>
            <h2 className="text-xl font-heading font-bold mb-2 text-deep-green">My Challenges</h2>
            <p className="text-body-text">Sign in to see the group challenges you&apos;ve joined.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
