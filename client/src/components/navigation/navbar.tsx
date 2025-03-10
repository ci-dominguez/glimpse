import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/a'>Test</Link>
      <Link to='/generate-color-system'>Generate</Link>
    </nav>
  );
};

export default Navbar;
