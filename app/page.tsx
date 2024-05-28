import BestSection from './components/BestSection';
import BurgerMenu from './components/BurgerMenu';
import HeroPage from './components/HeroPage';
import Logo from './components/Logo';

export default function Home() {
  return (
    <main className="h-screen relative">
      <Logo />
      <BurgerMenu />
      <HeroPage />
      <BestSection />
    </main>
  );
}
