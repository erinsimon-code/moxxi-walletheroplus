import Link from 'next/link';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  BRAND,
  DOMAIN,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  OPERATOR_LINE,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
  PROGRAM_DESCRIPTION,
  POSITIONING_BULLETS,
  EDUCATION_DISCLAIMER,
  PRIVACY_NO_SHARING_CLAUSE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'Terms of Service | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />
      <section className="py-12 bg-page-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Terms of Service</h1>
          <p className="text-lg text-body-text">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">1. Agreeing to These Terms</h2>
          <p className="mb-6 text-body-text">
            {OPERATOR_LINE} (the &quot;Service&quot;). Accessing or using the Service means you agree to these Terms of Service. If these Terms don&apos;t work for you, please don&apos;t use the Service.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">2. What the Service Does</h2>
          <p className="mb-6 text-body-text">{PROGRAM_DESCRIPTION}</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {POSITIONING_BULLETS.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="mb-6 text-body-text">{EDUCATION_DISCLAIMER}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">3. Text Message Program</h2>
          <p className="mb-4 text-body-text">
            If you opt in to receive texts from {BRAND} at {DOMAIN}, here&apos;s what to know:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            <li>Message frequency varies. Msg &amp; data rates may apply.</li>
            <li>Reply HELP for help, STOP to opt out.</li>
            <li>Consent is not a condition of employment.</li>
            <li>We are not responsible if a carrier delays or fails to deliver a message.</li>
            <li>See our <Link href="/sms-terms" className="text-secondary-green underline hover:text-deep-green">SMS Terms</Link> and <Link href="/privacy" className="text-secondary-green underline hover:text-deep-green">Privacy Policy</Link> for full details.</li>
          </ul>
          <p className="mb-6 text-body-text">
            <strong className="text-deep-green">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">4. Sample Messages</h2>
          <p className="text-sm font-semibold mb-2 text-deep-green">Account notification examples</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {ACCOUNT_SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>
          <p className="text-sm font-semibold mb-2 text-deep-green">Promotional examples</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {PROMOTIONAL_SAMPLE_MESSAGES.map((message) => (
              <li key={message}>{message}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">5. Liability Limits</h2>
          <p className="mb-6 text-body-text">
            {BRAND} is not responsible for indirect, incidental, special, consequential, or punitive damages arising from using, or being unable to use, the Service.
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">6. Get in Touch</h2>
          <p className="mb-6 text-body-text">
            Questions about these Terms? Reach {LEGAL_NAME} at {ADDRESS}. Email{' '}
            <a href={`mailto:${EMAIL}`} className="text-secondary-green hover:text-deep-green underline">{EMAIL}</a>
            {' '}or call{' '}
            <a href={`tel:${PHONE}`} className="text-secondary-green hover:text-deep-green underline">{PHONE_DISPLAY}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

