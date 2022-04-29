import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="flex items-center justify-center text-2xl mt-5">
      <p className="container">Hello World! This is my React Todo List</p>
      <a href="http://github.com" className='text-4xl mr-6'> <FaGithub/></a>
      <a href="http://linkedin.com" className='text-4xl'> <FaLinkedin/></a>
    </div>
  );
}
