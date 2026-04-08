'use client';

import Navbar from '@/components/Navbar';
import Profile from '@/components/Profile';
import Badges from '@/components/Badges';
import { useAuthStore } from '@/store/auth';
import { useNavStore } from '@/store/nav';

export default function Home() {
  const { isConnected } = useAuthStore();
  const { activeSection } = useNavStore();

  return (
    <main className="min-h-screen bg-lc-black lc-grid-bg">
      <Navbar />
      {!isConnected || activeSection === 'profile' ? (
        <Profile />
      ) : activeSection === 'badges' ? (
        <Badges />
      ) : null}
    </main>
  );
}
