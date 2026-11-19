import type { Metadata } from 'next';
import { DEFAULT_DESCRIPTION } from '../lib/brand';

export const metadata: Metadata = {
  title: 'Join | Wallet Hero Plus',
  description: DEFAULT_DESCRIPTION,
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return children;
}

