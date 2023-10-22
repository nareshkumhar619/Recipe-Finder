const Footer = () => {
  return (
    <footer className='p-8 flex flex-col  items-center gap-3 bg-rose-200 opacity-75'>
      <h2 className='footer-logo font-bold lowercase italic text-2xl'>
        Recipe <span className='text-rose-500'> Finder </span>
      </h2>
      <p>&copy; {new Date().getFullYear()} Recipe Finder by Naresh kumhar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;