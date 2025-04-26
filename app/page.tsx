// /app/page.tsx
import Card from '@components/Card'; // 通过别名引用

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card 
        title="传统秘方" 
        description="探索文化传承的月经健康实践"
        link="/magic"
      />
    </div>
  );
}