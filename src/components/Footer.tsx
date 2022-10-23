import type { FunctionComponent } from 'react';

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="p-6 flex justify-center text-opacity-70">
      <span>© 2022 Maik Pleines. All rights reserved.</span>
    </footer>
  );
};

export default Footer;
