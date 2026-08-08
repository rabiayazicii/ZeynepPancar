"use client";

import { motion } from "framer-motion";

export function FloatingSocialStack() {
  const socialLinks = [
    {
      id: "instagram",
      label: "Instagram",
      href: "https://instagram.com/sakaryadilterapisti",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
      colorClass: "text-[#E1306C] hover:text-[#d6245f] drop-shadow-sm",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: "https://wa.me/905385206583?text=Merhaba,%20bilgi%20almak%20istiyorum.",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 001.37 5.022L2 22l5.164-1.353a9.927 9.927 0 004.846 1.262c5.506 0 9.989-4.478 9.99-9.984A10.002 10.002 0 0012.012 2zm5.72 13.918c-.246.696-1.442 1.345-2.002 1.412-.516.061-1.189.102-1.921-.131-.43-.135-.97-.314-1.66-.615-2.923-1.262-4.819-4.207-4.965-4.402-.147-.196-1.186-1.579-1.186-3.018 0-1.439.75-2.146.996-2.441.246-.296.536-.37.715-.37.18 0 .36 0 .51.01.156.009.366-.056.572.445.21.512.716 1.745.778 1.868.062.124.103.267.02.43-.082.164-.124.267-.247.41-.124.143-.263.32-.375.43-.124.123-.254.256-.11.503.144.246.638 1.054 1.37 1.705.943.839 1.737 1.1 1.983 1.223.246.123.389.102.533-.061.144-.164.615-.717.779-.963.164-.246.328-.205.553-.123.226.082 1.43.676 1.677.8.246.123.41.184.47.286.062.103.062.595-.184 1.291z" />
        </svg>
      ),
      colorClass: "text-[#25D366] hover:text-[#20ba59] drop-shadow-sm",
    },
    {
      id: "phone",
      label: "Telefon",
      href: "tel:+905385206583",
      icon: (
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      colorClass: "text-[#30B046] hover:text-[#28963b] drop-shadow-sm",
    },
  ];

  return (
    <div className="fixed bottom-6 right-3 sm:bottom-8 sm:right-8 z-50 flex flex-col gap-3 sm:gap-4">
      {socialLinks.map((link, index) => {
        return (
          <motion.a
            key={link.id}
            href={link.href}
            target={link.id !== "phone" ? "_blank" : undefined}
            rel={link.id !== "phone" ? "noopener noreferrer" : undefined}
            aria-label={link.label}
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.35, ease: "easeOut" }}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center bg-transparent border-none shadow-none transition-all duration-300 ${link.colorClass}`}
          >
            {link.icon}
          </motion.a>
        );
      })}
    </div>
  );
}
