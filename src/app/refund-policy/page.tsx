import { HomeHeader } from '@/components/common/HomeHeader';
import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <>
    <div className="mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <p className="mb-4">
        <strong>No Refunds:</strong> All sales of roadmaps are final. We do not offer refunds on any roadmap purchases.
      </p>
      <p>
        For more information, you can contact <strong>Pranav Molawade</strong> at{' '}
        <Link href="mailto:pranavmolawade123@gmail.com" className="text-blue-600 hover:underline">
          pranavmolawade123@gmail.com
        </Link>
      </p>
    </div>
    </>
  );
}
