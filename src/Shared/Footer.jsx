import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Footer = () => {
  const { darkMode } = useContext(AuthContext);
  return (
    <div className={`text-white ${darkMode && "dark"}`}>
      <div className="dark:bg-slate-900">
        <footer className="footer p-10 dark:bg-slate-400 bg-gray-800 text-base-content">
          <aside>
            <div className="flex items-center justify-center gap-2">
              <img
                className="w-5 md:w-9"
                src="https://i.ibb.co/5R4t6gL/website-logo.png"
                alt="logo"
              />
              <Link
                className="text-sm md:text-2xl font-semibold text-white dark:text-black"
                to="/"
              >
                Ghure Asho
              </Link>
            </div>
            <p className="text-white dark:text-black">
              Meherab Hossain Ltd.
              <br />A trust worthy Company serving since 2020.
            </p>
            <p className="text-white dark:text-black text-lg font-semibold">Follow Us:</p>
            <div className="flex text-2xl text-green-600 gap-4 items-center justify-center">
              <a className="link dark:text-black link-hover">
                <FaFacebook />
              </a>
              <a className="link dark:text-black link-hover">
                <FaTwitter />
              </a>
              <a className="link dark:text-black link-hover">
                <FaInstagram />
              </a>
              <a className="link dark:text-black link-hover">
                <FaGithub />
              </a>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title text-white dark:text-black">Services</h6>
            <a className="link link-hover dark:text-black text-white">Branding</a>
            <a className="link link-hover dark:text-black text-white">Design</a>
            <a className="link link-hover dark:text-black text-white">Marketing</a>
            <a className="link link-hover dark:text-black text-white">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white dark:text-black">Company</h6>
            <a className="link link-hover dark:text-black text-white">About us</a>
            <a className="link link-hover dark:text-black text-white">Contact</a>
            <a className="link link-hover dark:text-black text-white">Jobs</a>
            <a className="link link-hover dark:text-black text-white">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title text-white dark:text-black">Legal</h6>
            <a className="link link-hover dark:text-black text-white">Terms of use</a>
            <a className="link link-hover dark:text-black text-white">Privacy policy</a>
            <a className="link link-hover dark:text-black text-white">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer footer-center p-4 dark:bg-slate-300 bg-gray-900 text-base-content">
          <aside>
            <p className="text-white dark:text-black">
              Copyright © 2024 - All right reserved by Meherab Hossain Ltd
            </p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
