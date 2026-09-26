function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-gray-500">
          &copy; 2026 MERN Blog. All rights reserved.
        </p>

        <div>
<h3>Code By Thue Htet Naing</h3>
          </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Privacy
          </a>

          <a
            href="#"
            className="text-sm text-gray-500 transition hover:text-black"
          >
            Terms
          </a>
          
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
