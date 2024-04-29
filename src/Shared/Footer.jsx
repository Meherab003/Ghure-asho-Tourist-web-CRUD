import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-white">
      <footer className="footer p-10 bg-gray-700 text-base-content">
        <aside>
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-5 md:w-9"
              src="https://i.ibb.co/5R4t6gL/website-logo.png"
              alt="logo"
            />
            <Link
              className="text-sm md:text-2xl font-semibold text-white"
              to="/"
            >
              Ghure Asho
            </Link>
          </div>
          <p className="text-white">
            Meherab Hossain Ltd.
            <br />A trust worthy Company serving since 2020.
          </p>
          <p className="text-white text-lg font-semibold">Follow Us:</p>
          <div></div>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link link-hover text-white">Branding</a>
          <a className="link link-hover text-white">Design</a>
          <a className="link link-hover text-white">Marketing</a>
          <a className="link link-hover text-white">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-white">About us</a>
          <a className="link link-hover text-white">Contact</a>
          <a className="link link-hover text-white">Jobs</a>
          <a className="link link-hover text-white">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-white">Terms of use</a>
          <a className="link link-hover text-white">Privacy policy</a>
          <a className="link link-hover text-white">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer footer-center p-4 bg-gray-900 text-base-content">
        <aside>
          <p className="text-white">Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
