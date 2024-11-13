import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Ejemplo de íconos


export default function SocialMedia () {
  const socialLinks = [
    {
      href: "https://github.com/wilyramos",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/wily-ramos-cahuana-7a175b263/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://wa.me/+51919655855",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
    },
  ];

  return (
    <div className="flex space-x-6 justify-center mt-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-gray-500 hover:text-blue-500 transition duration-300 text-2xl"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};