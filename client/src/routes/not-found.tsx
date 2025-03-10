import { Link } from 'react-router';
import AppLayout from '../layouts/app-layout';

const NotFound = () => {
  return (
    <AppLayout>
      404. Go <Link to='/'>Home</Link>.
    </AppLayout>
  );
};

export default NotFound;
