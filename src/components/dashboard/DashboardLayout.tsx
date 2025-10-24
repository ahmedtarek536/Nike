import React from 'react';
import Link from 'next/link';

const DashboardLayout: React.FC = () => {
  return (
    <div>
      {/* Existing code */}
      <Link href="/dashboard/products" className="flex items-center p-4 hover:bg-gray-100">
        <span className="mr-3">📦</span>
        <span>Products</span>
      </Link>
      <Link href="/dashboard/collections" className="flex items-center p-4 hover:bg-gray-100">
        <span className="mr-3">📚</span>
        <span>Collections</span>
      </Link>
      {/* Existing code */}
    </div>
  );
};

export default DashboardLayout;