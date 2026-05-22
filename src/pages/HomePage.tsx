import HeroSection from '../components/home/HeroSection';
import HonorsPanel from '../components/home/HonorsPanel';
import StatisticsPanel from '../components/home/StatisticsPanel';
import PromotionalSection from '../components/home/PromotionalSection';
import InkBrush from '../components/common/InkBrush';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <InkBrush />
      <HonorsPanel />
      <InkBrush />
      <StatisticsPanel />
      <InkBrush />
      <PromotionalSection />
    </>
  );
}
