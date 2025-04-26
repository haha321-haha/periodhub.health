// components/Card.tsx
import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card = ({ title, description, link }: CardProps) => {
  return (
    <div className="card p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="text-primary-600 hover:text-primary-700">
        Learn more →
      </Link>
    </div>
  );
};

export default Card;