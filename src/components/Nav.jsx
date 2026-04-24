import { useNavigate, useLocation } from 'react-router-dom';
export default function Nav() {
	const navigate = useNavigate();
	const location = useLocation();
	const { pathname } = location;

	return (
		<>
			<nav className="h-16 w-full shadow-md flex items-center justify-between px-4 sm:px-8 z-1000">
				{' '}
				<div
					onClick={() => navigate('/')}
					className="font-bold text-xl text-indigo-600 cursor-pointer"
				>
					EZ Resume Builder
				</div>
				<button
					onClick={() => {
						if (pathname === '/') {
							navigate('/builder');
						} else {
							navigate('/');
						}
					}}
					className="rounded-lg px-4 py-2 bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors duration-200"
				>
					{pathname === '/' ? 'Get Started' : 'Home'}
				</button>
			</nav>
		</>
	);
}
