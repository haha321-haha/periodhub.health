// app/magic/layout.tsx
// 确保符合 Next.js 布局规范
import type { ReactNode } from 'react';

export default function MagicLayout({ 
  children, 
}: { 
  children: ReactNode; 
}) {
  return (
    <div className="magic-container">
      {children}
    </div>
  );
}

// 静态生成参数
export async function generateStaticParams() {
  const charms = {
    1: { title: 'Boyfriend Transfer Charm' },
    2: { title: '7080 Number Charm' },
    3: { title: 'Manjusri One-Word Charm' },
    4: { title: 'Regular Period Charm' },
    5: { title: 'Warm Palace Charm' },
  };

  return Object.keys(charms).map((id) => ({ id }));
}