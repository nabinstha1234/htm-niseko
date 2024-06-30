import Navbar from '@/components/navbar';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <Navbar />
      <main className="pb-16 pt-24 md:pt-28">{props.children}</main>

      <footer className="w-full border-t border-gray-300 py-8 text-center text-sm">
        © Copyright {new Date().getFullYear()}.
        <a
          href="https://www.htmniseko.com"
          className="text-blue-700 hover:border-b-2 hover:border-blue-700"
        >
          HTMNiseko
        </a>
        .
      </footer>
    </div>
  );
};

export { BaseTemplate };
