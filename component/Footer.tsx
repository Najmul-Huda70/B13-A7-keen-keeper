import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#1e4636] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>

        <p className="text-gray-300 max-w-2xl text-sm md:text-base mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">
            Social Links
          </h3>
          <div className="flex gap-4">
            <Link
              href="#"
              className="bg-white p-2 rounded-full text-[#1e4636] hover:bg-gray-200 transition-colors"
            >
              <FaInstagram size={20} />
            </Link>
            <Link
              href="#"
              className="bg-white p-2 rounded-full text-[#1e4636] hover:bg-gray-200 transition-colors"
            >
              <FaFacebook size={20} />
            </Link>
            <Link
              href="#"
              className="bg-white p-2 rounded-full text-[#1e4636] hover:bg-gray-200 transition-colors"
            >
              <FaTwitter size={20} />
            </Link>
          </div>
        </div>

        <div className="w-full border-t border-gray-600/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
