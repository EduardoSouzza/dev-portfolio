// components/SocialLinks.tsx
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex gap-6 mt-4">
      <a href="https://linkedin.com/in/paulo-eduardo-359a859b" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 text-2xl hover:text-blue-500 dark:hover:text-blue-300">
        <FaLinkedin />
      </a>
      <a href="https://github.com/EduardoSouzza" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white text-2xl hover:text-gray-600 dark:hover:text-gray-300">
        <FaGithub />
      </a>
    </div>
  );
}
