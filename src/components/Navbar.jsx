import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-6 justify-center">
      <Link to="/" className="text-blue-600 hover:underline">Главная</Link>
      <Link to="/apps" className="text-blue-600 hover:underline">Приложения</Link>
      <Link to="/about" className="text-blue-600 hover:underline">О сайте</Link>
    </nav>
  );
}
