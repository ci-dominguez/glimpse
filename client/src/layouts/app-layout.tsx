import Navbar from '../components/navigation/navbar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Navbar />
      <main className='pt-20 font-s-r px-4'>{children}</main>
    </>
  );
};

export default AppLayout;
