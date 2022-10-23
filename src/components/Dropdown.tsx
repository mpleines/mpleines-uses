import { FunctionComponent, useState } from 'react';
import {
  FiList,
  FiGithub,
  FiHome,
  FiExternalLink,
} from 'react-icons/fi/index.js';

interface DropdownProps {}

const Dropdown: FunctionComponent<DropdownProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      <button
        className="p-2 rounded-lg font-bold hover:outline hover:outline-darkGrey dark:hover:outline-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FiList />
      </button>
      {isOpen && (
        <div className="w-48 z-30 isolate absolute top-11 right-0 bg-white dark:bg-darkGrey rounded">
          <ul className="p-2">
            <li className="p-2">
              <a
                href="/"
                className="active:outline selection:outline flex items-center"
              >
                <FiHome className="inline mr-2" />
                <span>Home</span>
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://maikpleines.com"
                className="active:outline selection:outline flex items-center"
              >
                <FiExternalLink className="inline mr-2" />
                <span>About</span>
              </a>
            </li>
            <li className="p-2">
              <a
                href="https://github.com/mpleines/uses-page"
                className="active:outline selection:outline flex items-center"
              >
                <FiGithub className="inline mr-2" />
                <span>Source</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
