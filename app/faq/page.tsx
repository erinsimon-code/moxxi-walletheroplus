import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FAQ_ITEMS, EDUCATION_DISCLAIMER, DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'FAQ | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />

      <section className="py-20 bg-page-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6">
          {FAQ_ITEMS.map((item) => (
            <div key={item.question} className="rounded-md p-6 border border-card-border bg-white shadow-sm">
              <h2 className="text-xl font-heading font-bold mb-2 text-deep-green">{item.question}</h2>
              <p className="text-body-text">{item.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-12 text-sm text-muted-text max-w-2xl mx-auto">{EDUCATION_DISCLAIMER}</p>
      </section>

      <Footer />
    </div>
  );
}

