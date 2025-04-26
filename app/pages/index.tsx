// pages/index.tsx
import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Period Health</title>
        <meta name="description" content="Discover traditional cultural practices for menstrual wellness" />
      </Head>

      <h1>Period Magic</h1>
      <p>Discover traditional cultural practices for menstrual wellness</p>
      <Link href="/magic">
        <a>Explore Magic</a>
      </Link>

      <h2>Traditional Charms</h2>
      <p>Explore ancient wisdom and cultural practices passed down through generations.</p>
      <Link href="/magic">
        <a>Learn more →</a>
      </Link>

      <h2>Modern Approaches</h2>
      <p>Discover contemporary methods and scientific-backed practices.</p>
      <Link href="/modern">
        <a>Learn more →</a>
      </Link>

      <h2>Community</h2>
      <p>Join our growing community of women sharing experiences and support.</p>
      <Link href="/community">
        <a>Join now →</a>
      </Link>

      <footer>
        <p>This website is for cultural and educational purposes only. Always consult healthcare professionals for medical advice.</p>
      </footer>
    </div>
  );
};

export default Home;