import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  LEGAL_NAME,
  ADDRESS,
  EMAIL,
  PHONE,
  PHONE_DISPLAY,
  ACCOUNT_MESSAGE_TYPES,
  PROMOTIONAL_MESSAGE_TYPES,
  ACCOUNT_SAMPLE_MESSAGES,
  PROMOTIONAL_SAMPLE_MESSAGES,
  STOP_KEYWORDS,
  PRIVACY_NO_SHARING_CLAUSE,
  TOLL_FREE_NOTE,
  PROGRAM_DESCRIPTION,
  FREQUENCY_NOTE,
  DUAL_OPT_OUT_NOTE,
  DEFAULT_DESCRIPTION,
} from '../lib/brand';

export const metadata: Metadata = {
  title: 'SMS Terms | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function SmsTermsPage() {
  return (
    <div className="min-h-screen bg-page-bg">
      <Navbar />
      <section className="py-12 bg-page-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-heading font-bold mb-4 text-deep-green">SMS Terms</h1>
          <p className="text-lg text-body-text">Effective Date: November 19, 2026</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">1. Program Description</h2>
          <p className="mb-4 text-body-text">{PROGRAM_DESCRIPTION}</p>
          <p className="mb-6 text-body-text">{TOLL_FREE_NOTE}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">2. Message Types</h2>
          <p className="mb-4 text-body-text">Account Notifications — if you opt in, you may receive:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {ACCOUNT_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-deep-green">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>
          <p className="mb-4 text-body-text">Promotional Messages — if you also opt in, you may receive:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            {PROMOTIONAL_MESSAGE_TYPES.map((type) => (
              <li key={type.title}><strong className="text-deep-green">{type.title}</strong> — {type.description}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">3. Frequency, Charges and Opting Out</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2 text-body-text">
            <li>{FREQUENCY_NOTE}</li>
            <li>Msg &amp; data rates may apply.</li>
            <li>Reply <strong className="text-deep-green">HELP</strong> for help or contact {EMAIL} or {PHONE_DISPLAY}.</li>
            <li>You may also reply with any of the following to opt out: {STOP_KEYWORDS.join(', ')}.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p className="mb-6 text-body-text">{DUAL_OPT_OUT_NOTE}</p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">4. No Sharing</h2>
          <p className="mb-6 text-body-text">
            <strong className="text-deep-green">{PRIVACY_NO_SHARING_CLAUSE}</strong>
          </p>

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">5. Sample Messages</h2>
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

          <h2 className="text-2xl font-heading font-bold mt-8 mb-4 text-deep-green">6. Support</h2>
          <p className="mb-6 text-body-text">
            Questions? Contact {LEGAL_NAME} at {ADDRESS}. Email{' '}
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
