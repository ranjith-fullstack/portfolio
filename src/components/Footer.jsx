import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="py-8 bg-tertiary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/ranjith-fullstack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ranjith-kumar-reddy-sirigireddy-5226851a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FiLinkedin />
            </a>
            {/* <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-textSecondary hover:text-secondary transition-colors duration-300"
            >
              <FiTwitter />
            </a> */}
          </div>
          <p className="text-sm text-textSecondary">
            Designed & Built by{' '}
            <span className="text-secondary">S.Ranjith Kumar Reddy</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;