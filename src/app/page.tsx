import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import HomeSections from '@/components/sections/HomeSections';

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row flex-1 pt-[60px] pb-[80px] min-h-screen">
        <Sidebar />
        <HomeSections />
      </div>
      <Footer />
    </>
  );
}
