import Link from 'next/link';
import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HABIT_ITEMS, EDUCATION_DISCLAIMER, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Habits | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function HabitsPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      <section className="py-20 bg-page-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Weekly Habit Library</h1>
          <p className="text-lg text-body-text">Pick up one small money habit at a time and track your own progress.</p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HABIT_ITEMS.map((habit) => (
            <div key={habit.title} className="p-8 rounded-md border border-card-border border-t-4 border-t-gold bg-white shadow-sm flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                  <CheckCircle2 className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-center mb-2 text-deep-green">{habit.title}</h3>
              <p className="text-center text-muted-text mb-6">This week</p>
              <Link
                href="/my-plus"
                className="mt-auto inline-block text-center px-4 py-3 rounded-md font-heading font-semibold bg-deep-green text-white hover:bg-secondary-green transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Mark as done
              </Link>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-text max-w-2xl mx-auto">{EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}
