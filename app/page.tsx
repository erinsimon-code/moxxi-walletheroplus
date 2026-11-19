import Link from 'next/link';
import type { Metadata } from 'next';
import {
  UserPlus,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  MessageSquareText,
  CalendarClock,
  KeyRound,
  Sparkles,
  Users,
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {
  TAGLINE,
  ACCOUNT_MESSAGE_TYPES,
  PROMOTIONAL_MESSAGE_TYPES,
  POSITIONING_BULLETS,
  EDUCATION_DISCLAIMER,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
} from './lib/brand';

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
};

const ACCOUNT_ICONS = [MessageSquareText, CalendarClock, TrendingUp, KeyRound];
const PROMOTIONAL_ICONS = [Sparkles, Users];

const HABIT_CARD_PREVIEWS = [
  'Track spending for 3 days',
  'Pack lunch twice this week',
  'Set a savings goal',
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      {/* Hero Section — light background, deep green H1, habit cards */}
      <section className="py-24 bg-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-heading font-bold sm:text-6xl md:text-7xl text-deep-green">
              {TAGLINE}
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-body-text">
              Take on one small money habit a week, join group challenges and get your questions answered, all through a program offered by your employer.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/join"
                className="px-8 py-4 text-lg font-heading font-semibold rounded-md bg-deep-green text-white hover:bg-secondary-green transition-colors shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Join with your company ID
              </Link>
            </div>
            <p className="mt-4 text-sm text-muted-text">
              For current employees of participating employers only. Participation is voluntary.
            </p>
          </div>

          {/* Habit cards row */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {HABIT_CARD_PREVIEWS.map((habit) => (
              <div
                key={habit}
                className="bg-white rounded-md border border-card-border border-t-4 border-t-gold p-6 text-center shadow-sm"
              >
                <p className="text-body-text font-medium">{habit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-deep-green">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-md border border-card-border text-center bg-page-bg">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                  <UserPlus className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-deep-green">1. Your Employer Offers Wallet Hero Plus</h3>
              <p className="text-body-text">A participating employer offers the program to its team and shares a company ID.</p>
            </div>
            <div className="p-8 rounded-md border border-card-border text-center bg-page-bg">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                  <Smartphone className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-deep-green">2. You Join With Your Company ID</h3>
              <p className="text-body-text">Use your company ID to join and choose whether you want to receive texts.</p>
            </div>
            <div className="p-8 rounded-md border border-card-border text-center bg-page-bg">
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                  <TrendingUp className="w-7 h-7 text-gold" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-deep-green">3. You Pick Up One Small Habit a Week</h3>
              <p className="text-body-text">Track your own streak and join group challenges along the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll receive */}
      <section className="py-20 bg-page-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-deep-green">What You&apos;ll Receive</h2>
          </div>

          <h3 className="text-2xl font-heading font-bold text-deep-green mb-8 text-center">Account Notifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {ACCOUNT_MESSAGE_TYPES.map((type, i) => {
              const Icon = ACCOUNT_ICONS[i];
              return (
                <div key={type.title} className="p-8 rounded-md shadow-md hover:shadow-xl transition-shadow border border-card-border bg-white">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-center mb-3 text-deep-green">{type.title}</h4>
                  <p className="text-center text-body-text">{type.description}</p>
                </div>
              );
            })}
          </div>

          <h3 className="text-2xl font-heading font-bold text-deep-green mb-8 text-center">Promotional Messages (Optional)</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {PROMOTIONAL_MESSAGE_TYPES.map((type, i) => {
              const Icon = PROMOTIONAL_ICONS[i];
              return (
                <div key={type.title} className="p-8 rounded-md shadow-md hover:shadow-xl transition-shadow border border-card-border bg-white">
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center bg-deep-green">
                      <Icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-center mb-3 text-deep-green">{type.title}</h4>
                  <p className="text-center text-body-text">{type.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your privacy */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center bg-deep-green">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-heading font-bold mb-6 text-deep-green">Your Privacy</h2>
          <ul className="space-y-4 text-left max-w-2xl mx-auto">
            {POSITIONING_BULLETS.map((bullet) => (
              <li key={bullet} className="text-lg text-body-text">{bullet}</li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-muted-text max-w-2xl mx-auto">{EDUCATION_DISCLAIMER}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

