import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  DOMAIN,
  OPERATOR_LINE,
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  PROGRAM_DESCRIPTION,
  EDUCATION_DISCLAIMER,
  ACCOUNT_MESSAGE_TYPES,
  PROMOTIONAL_MESSAGE_TYPES,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
  PRIVACY_NO_SHARING_CLAUSE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />
      <section className="py-12 bg-page-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">Privacy Policy</h1>
          <p className="text-lg text-body-text">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">1. Overview</h2>
          <p className="mb-6 text-body-text">{OPERATOR_LINE}. {PROGRAM_DESCRIPTION}</p>
          <p className="mb-6 text-body-text">
            This policy explains how information is collected, used, disclosed, and protected when your employer enrolls you, or you join yourself with a company ID, at {DOMAIN}.
          </p>
          <p className="mb-6 text-body-text">{EDUCATION_DISCLAIMER}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">2. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            <li>Your name, mobile number, and email address provided when you join</li>
            <li>Your employer&apos;s company ID and your employment status with that employer</li>
            <li>Your message preferences and opt-in/opt-out status</li>
            <li>Your self-reported habit and challenge progress</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">3. How Your Progress Is Handled</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            <li>Wallet Hero Plus never connects to bank accounts and never asks for bank account, card or Social Security numbers.</li>
            <li>Progress is self-reported. Nothing connects to your bank account.</li>
            <li>Employers see only aggregated participation, never an individual employee&apos;s habits, streaks or questions.</li>
            <li>Participation is not a performance review, disciplinary or monitoring tool, and is not used for recruiting or job seekers.</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">4. Text Messaging</h2>
          <p className="mb-4 text-body-text">If you opt in to account notification texts, these may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {ACCOUNT_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-deep-green">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>
          <p className="mb-4 text-body-text">If you also opt in to promotional texts, these may include:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {PROMOTIONAL_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-deep-green">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            <li>Message frequency varies. Msg &amp; data rates may apply.</li>
            <li>Reply HELP for help, STOP to opt out.</li>
            <li>Consent is not a condition of employment.</li>
          </ul>
          <p className="mb-6 text-body-text">
            <strong className="text-deep-green">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">5. How Information Is Used</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            <li>Operating and improving the money habits program</li>
            <li>Delivering weekly habit reminders, streak and progress updates and challenge deadline reminders</li>
            <li>Confirming your employment status with the participating employer</li>
            <li>Responding to support requests</li>
            <li>Meeting applicable legal requirements</li>
          </ul>


          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">6. Sample Messages</h2>
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

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">7. Contact Us</h2>
          <p className="mb-6 text-body-text">
            Questions about this policy? Here&apos;s how to reach us:<br />
            {LEGAL_NAME}<br />
            {ADDRESS}<br />
            Email: <a href={`mailto:${EMAIL}`} className="text-secondary-green hover:text-deep-green underline">{EMAIL}</a><br />
            Phone: <a href={`tel:${PHONE}`} className="text-secondary-green hover:text-deep-green underline">{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

