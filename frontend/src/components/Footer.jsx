import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 cursor-pointer">Nearest Doctor</h3>
          <p className="text-sm">
            Your trusted platform to book appointments with the best doctors near you.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16}/> +91 8434287510</li>
            <li className="flex items-center gap-2"><Mail size={16}/> vivekumar7510@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Bilaspur, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4 mt-2">
            <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
            <Twitter className="w-5 h-5 cursor-pointer hover:text-white" />
            <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} Nearest Doctor. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
