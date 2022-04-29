import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex items-center justify-between text-2xl mt-5">
      <p className="container w-1/2">Hello World! This is my React Todo List</p>
      <div className="flex">
        <a href="http://github.com" target="_blank" rel="noreferrer" className="text-4xl mr-6">
          <FaGithub />
        </a>
        <a href="http://linkedin.com" target="_blank" rel="noreferrer" className="text-4xl">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
