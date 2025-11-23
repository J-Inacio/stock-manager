import { Link } from 'react-router';

export interface LinkItem {
  name: string;
  path: string;
}

interface HeaderProps {
  links: LinkItem[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <nav className="flex justify-end items-center w-full gap-4 bg-neutral-900 h-12 px-4">
      {links.map((link) => (
        <Link
          to={link.path}
          key={link.path}
          className="hover:bg-neutral-600 h-full flex justify-end items-center p-2"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
