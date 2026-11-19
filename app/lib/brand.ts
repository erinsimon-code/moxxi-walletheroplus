// Central brand/content constants for Wallet Hero Plus.
// Keep every page in sync by importing from here instead of hardcoding copy.

export const BRAND = "Wallet Hero Plus";
export const DOMAIN = "walletheroplus.com";
export const SITE_URL = `https://${DOMAIN}`;

// --- Legal / contact details -------------------------------------------
export const LEGAL_NAME = "Wallet Hero Plus LLC";
export const ADDRESS = "3 Germay Dr, Unit 4 #3226, Wilmington, DE 19804, United States";
export const PHONE = "+13022080355"; // E.164, used in tel: links
export const PHONE_DISPLAY = "(302) 208-0355";
export const EMAIL = "support@walletheroplus.com";

// Used on /privacy, /sms-terms and /terms where the operator must be named explicitly.
export const OPERATOR_LINE = "Wallet Hero Plus, operated by Wallet Hero Plus LLC";

// Required addition to the /sms-terms program description section.
export const TOLL_FREE_NOTE = "Messages are sent from a toll-free number.";

export const TAGLINE = "Small money habits. Big wins.";

// Broader positioning paragraph used on the homepage and similar overview copy.
export const POSITIONING_PARAGRAPH =
  "Wallet Hero Plus is an employer-sponsored money habits program. Employers offer it to their own employees, who join with a company ID to take on one small money habit each week, join group challenges, track their own streaks and bring questions to live group Q&A sessions with financial educators. The program is for current employees of participating employers only and is never open to the public.";

// Word-for-word program description, required on /how-it-works, /sms-terms,
// /privacy and /terms.
export const PROGRAM_DESCRIPTION =
  "Wallet Hero Plus is an employer-sponsored money habits program operated by Wallet Hero Plus LLC. Current employees of participating employers join using a company ID and can choose to receive account notification texts (weekly habit reminders, streak and progress updates, challenge deadline reminders and one-time verification codes) and/or promotional texts (new challenges and live group Q&A sessions offered by their employer). Wallet Hero Plus provides general education only, never connects to bank accounts and never offers loans, credit, investment products or third-party offers. Participation is voluntary and not a condition of employment.";

export const POSITIONING_BULLETS = [
  "Self-reported progress only: Wallet Hero Plus never connects to bank accounts, never moves money and never asks for bank account, card or Social Security numbers. Texts never include balances, pay or account details.",
  "Education only: Wallet Hero Plus provides general financial education. It is not a bank, lender, credit counselor, investment adviser or financial planner, and does not provide financial, tax, investment or legal advice. Group Q&A sessions are general education, not individual advice.",
  "No loans, credit, debt relief, credit repair, investment products, insurance or third-party offers or ads, ever.",
  "Employers never see an individual employee's habits, streaks or questions, only aggregated participation.",
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.",
  "Participation is voluntary and not a condition of employment.",
];

export const NO_SHARING_CLAUSE =
  "Phone numbers and opt-in consent are never sold, rented or shared with third parties.";

// Word-for-word legal clause required on /privacy, /sms-terms and /terms.
export const PRIVACY_NO_SHARING_CLAUSE =
  "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.";

// Word-for-word education disclaimer, required in the footer of every page
// except /verify, and on /habits, /challenges, /sessions and /faq.
export const EDUCATION_DISCLAIMER =
  "Wallet Hero Plus provides general financial education only and does not provide financial, tax, investment or legal advice. Wallet Hero Plus is not a bank, lender or financial adviser.";

export type MessageType = {
  title: string;
  description: string;
};


// Account notifications — 4 items, used word for word everywhere message
// types are listed.
export const ACCOUNT_MESSAGE_TYPES: MessageType[] = [
  {
    title: "Weekly habit reminders",
    description: "A nudge each week for the small money habit you picked up.",
  },
  {
    title: "Streak and progress updates",
    description: "See how your habit streak is building week to week.",
  },
  {
    title: "Challenge deadline reminders",
    description: "A heads-up before a group challenge wraps up.",
  },
  {
    title: "Verification codes",
    description: "One-time verification codes to confirm your mobile number.",
  },
];

// Promotional messages — 2 items, optional and separate from account
// notifications.
export const PROMOTIONAL_MESSAGE_TYPES: MessageType[] = [
  {
    title: "New challenges",
    description: "Announcements when your employer launches a new group challenge.",
  },
  {
    title: "Live group Q&A sessions",
    description: "Invitations to live group Q&A sessions with financial educators.",
  },
];

// Combined list — used wherever the site needs every message type together
// (e.g. /sms-terms, /privacy message-type sections).
export const MESSAGE_TYPES: MessageType[] = [
  ...ACCOUNT_MESSAGE_TYPES,
  ...PROMOTIONAL_MESSAGE_TYPES,
];

// Samples 1–4: account notification examples.
export const ACCOUNT_SAMPLE_MESSAGES: string[] = [
  "Wallet Hero Plus: This week's money habit: track every purchase for 3 days. Check it off at walletheroplus.com/habits. Reply HELP for help, STOP to opt out.",
  "Wallet Hero Plus: You're on a 4-week habit streak! See your progress at walletheroplus.com/my-plus. Reply STOP to opt out.",
  "Wallet Hero Plus: Reminder: the No-Spend Weekend challenge ends Sun 11/29. Log your progress at walletheroplus.com/challenges. Reply STOP to opt out.",
  "Wallet Hero Plus: Your verification code is 284617. Enter it at walletheroplus.com/verify to confirm your number. Reply HELP for help, STOP to opt out.",
];

// Samples 5–6: promotional examples.
export const PROMOTIONAL_SAMPLE_MESSAGES: string[] = [
  "Wallet Hero Plus: A new challenge starts Mon 12/7: the 30-Day Savings Habit. Join it at walletheroplus.com/challenges. Reply STOP to opt out.",
  "Wallet Hero Plus: Bring your money questions to a live group Q&A with a financial educator on Thu 12/10. Save your spot at walletheroplus.com/sessions. Reply STOP to opt out.",
];

// Combined list (1–6) — used wherever the site needs every sample together.
export const SAMPLE_MESSAGES: string[] = [
  ...ACCOUNT_SAMPLE_MESSAGES,
  ...PROMOTIONAL_SAMPLE_MESSAGES,
];


// Box 1 — account notifications consent (optional, unchecked by default).
export const ACCOUNT_CONSENT_LABEL =
  "Account notifications: I agree to receive recurring text messages from Wallet Hero Plus about my money habits program, including weekly habit reminders, streak and progress updates, challenge deadline reminders and one-time verification codes, at the number provided. Consent is not a condition of employment. Message frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out.";

// Box 2 — promotional messages consent (optional, unchecked by default).
export const PROMOTIONAL_CONSENT_LABEL =
  "Promotional messages: I agree to receive recurring promotional text messages from Wallet Hero Plus about new challenges and live group Q&A sessions offered by my employer, at the number provided. Consent is not a condition of employment. Up to 4 msgs/month. Msg & data rates may apply. Reply HELP for help, STOP to opt out.";

export const STOP_KEYWORDS = ["STOP", "END", "CANCEL", "UNSUBSCRIBE", "QUIT"];

// /sms-terms, section 3 — frequency note.
export const FREQUENCY_NOTE =
  "Account notification frequency varies based on your habits and challenges. Promotional messages: up to 4 msgs/month.";

// /sms-terms, section 3 — added after the opt-out keywords.
export const DUAL_OPT_OUT_NOTE =
  "You can opt in to account notifications, promotional messages, or both. Replying STOP ends all messages from Wallet Hero Plus. To stop only promotional messages, contact support@walletheroplus.com or (302) 208-0355.";

export const CONSENT_MOBILE_REQUIRED_ERROR =
  "Please enter your mobile number to receive texts, or uncheck the boxes.";

export const CONSENT_MOBILE_INVALID_ERROR =
  "Please enter a valid 10-digit mobile number, or uncheck the boxes.";

export const DEFAULT_TITLE = "Wallet Hero Plus: Money Habits for Employees";
export const DEFAULT_DESCRIPTION =
  "Wallet Hero Plus is an employer-sponsored money habits program with weekly habits, group challenges and live Q&A sessions for employees.";

// --- /verify copy ---------------------------------------------------------
export const VERIFY_TITLE = "Verify Your Number | Wallet Hero Plus";

export const VERIFY_PHONE_EMPTY_ERROR = "Please enter your mobile number.";
export const VERIFY_PHONE_INVALID_ERROR = "Please enter a valid 10-digit mobile number.";
export const VERIFY_CODE_EMPTY_ERROR = "Please enter the 6-digit code we texted you.";
export const VERIFY_CODE_INVALID_ERROR = "The code must be 6 digits.";

export const VERIFY_RESEND_SECONDS = 30;


// --- /habits copy -----------------------------------------------------------
export type HabitItem = {
  title: string;
};

export const HABIT_ITEMS: HabitItem[] = [
  { title: "Track every purchase for 3 days" },
  { title: "Pack lunch twice this week" },
  { title: "Unsubscribe from one shopping email list" },
  { title: "Set one savings goal" },
  { title: "Review your subscriptions" },
];

// --- /challenges copy -----------------------------------------------------
export type ChallengeExample = {
  title: string;
  date: string;
};

export const CHALLENGE_EXAMPLES: ChallengeExample[] = [
  {
    title: "No-Spend Weekend",
    date: "Ends Sunday, November 29, 2026",
  },
  {
    title: "30-Day Savings Habit",
    date: "Starts Monday, December 7, 2026",
  },
];

// --- /sessions copy ---------------------------------------------------------
export type SessionExample = {
  title: string;
  date: string;
};

export const SESSION_EXAMPLES: SessionExample[] = [
  {
    title: "Year-End Money Questions",
    date: "Thursday, December 10, 2026",
  },
  {
    title: "Building a Budget That Sticks",
    date: "Tuesday, January 12, 2027",
  },
];

// --- /faq copy ---------------------------------------------------------
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Who can join?",
    answer: "Wallet Hero Plus is for current employees of participating employers only. It is never open to the public.",
  },
  {
    question: "Is it required?",
    answer: "No. Participation is voluntary and not a condition of employment.",
  },
  {
    question: "Does this connect to my bank?",
    answer: "Never. Wallet Hero Plus never connects to bank accounts, never moves money and never asks for bank account, card or Social Security numbers. Progress is self-reported.",
  },
  {
    question: "Is this financial advice?",
    answer: "No, general education. Wallet Hero Plus provides general financial education only and does not provide financial, tax, investment or legal advice.",
  },
  {
    question: "Can my employer see my habits or questions?",
    answer: "No, only aggregated participation. Employers never see an individual employee's habits, streaks or questions.",
  },
  {
    question: "How do I stop texts?",
    answer: "Reply STOP at any time to end all messages from Wallet Hero Plus. To stop only promotional messages, contact support@walletheroplus.com or (302) 208-0355.",
  },
];

