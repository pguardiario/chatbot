import { Github, Mail } from 'lucide-react';

const Header = () => {
  return <header className="p-4 flex justify-between items-center">
    <div className="flex-grow"></div>
    <div className="flex items-center">
      {/* <a
      href="mailto:pguardiario@gmail.com"
      className="hover:text-white hover:bg-black transition-colors flex items-center rounded-full p-2"
    >
      <Mail className="" />
    </a> */}
      <a
        href="https://github.com/pguardiario/chatbot"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:bg-black transition-colors flex items-center rounded-full p-2"
      >
        <Github className="" />
      </a>

    </div>
  </header>
}

export default Header