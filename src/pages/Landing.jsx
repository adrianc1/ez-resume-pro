import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';

const BoltIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5"
		aria-hidden="true"
	>
		<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
	</svg>
);

const BadgeIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5"
		aria-hidden="true"
	>
		<path d="M12 2l2.4 4.8L20 8l-4 3.9.9 5.6L12 15l-4.9 2.5.9-5.6L4 8l5.6-.8L12 2z" />
	</svg>
);

const UserXIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5"
		aria-hidden="true"
	>
		<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
		<circle cx="9" cy="7" r="4" />
		<line x1="17" y1="8" x2="23" y2="14" />
		<line x1="23" y1="8" x2="17" y2="14" />
	</svg>
);

const LayoutIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5"
		aria-hidden="true"
	>
		<rect x="3" y="3" width="18" height="18" rx="2" />
		<path d="M3 9h18" />
		<path d="M9 21V9" />
	</svg>
);

const MouseIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5"
		aria-hidden="true"
	>
		<rect x="5" y="2" width="14" height="20" rx="7" />
		<path d="M12 6v4" />
	</svg>
);

const DownloadIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-5 h-5"
		aria-hidden="true"
	>
		<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
		<polyline points="7 10 12 15 17 10" />
		<line x1="12" y1="15" x2="12" y2="3" />
	</svg>
);

const ArrowRightIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-4 h-4"
		aria-hidden="true"
	>
		<path d="M5 12h14M12 5l7 7-7 7" />
	</svg>
);

const CheckIcon = () => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="w-3.5 h-3.5 flex-shrink-0"
		aria-hidden="true"
	>
		<polyline points="20 6 9 17 4 12" />
	</svg>
);

const ResumeMockup = () => (
	<div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-7 w-full max-w-sm mx-auto select-none">
		<div className="pb-5 mb-5 border-b border-gray-100">
			<div className="h-4 bg-gray-800 rounded w-36 mb-2" />
			<div className="h-2.5 bg-gray-300 rounded w-28 mb-4" />
			<div className="flex gap-3">
				<div className="h-2 bg-gray-200 rounded w-20" />
				<div className="h-2 bg-gray-200 rounded w-16" />
				<div className="h-2 bg-gray-200 rounded" style={{ width: '52px' }} />
			</div>
		</div>

		<div className="mb-5">
			<div className="h-2.5 bg-indigo-500 rounded w-24 mb-3" />
			<div className="flex flex-col gap-1.5">
				<div className="h-2 bg-gray-200 rounded w-full" />
				<div className="h-2 bg-gray-200 rounded" style={{ width: '92%' }} />
				<div className="h-2 bg-gray-200 rounded w-3/4" />
			</div>
		</div>

		<div className="mb-5">
			<div className="h-2.5 bg-indigo-500 rounded w-16 mb-3" />
			<div className="flex flex-wrap gap-1.5">
				{[60, 50, 72, 44, 56].map((w, i) => (
					<div
						key={i}
						className="h-5 bg-indigo-50 border border-indigo-100 rounded-full"
						style={{ width: `${w}px` }}
					/>
				))}
			</div>
		</div>

		<div>
			<div className="h-2.5 bg-indigo-500 rounded w-20 mb-3" />
			<div className="flex flex-col gap-1.5">
				<div className="h-2 bg-gray-200 rounded w-3/4" />
				<div className="h-2 bg-gray-200 rounded w-1/2" />
			</div>
		</div>

		<div className="mt-6 flex items-center justify-between">
			<div
				className="h-7 bg-indigo-600 rounded-lg"
				style={{ width: '100px' }}
			/>
			<div className="h-2.5 bg-gray-100 rounded w-16" />
		</div>
	</div>
);

const features = [
	{
		icon: <BoltIcon />,
		title: 'Lightning Fast',
		body: 'Go from blank page to finished resume in minutes, not hours.',
	},
	{
		icon: <BadgeIcon />,
		title: '100% Free',
		body: 'No hidden fees, no trial limits. Build and download without paying a cent.',
	},
	{
		icon: <UserXIcon />,
		title: 'No Account Needed',
		body: 'Skip the sign-up. Open the builder and start immediately.',
	},
	{
		icon: <LayoutIcon />,
		title: 'ATS-Friendly Templates',
		body: 'Clean templates that pass Applicant Tracking Systems and impress recruiters.',
	},
	{
		icon: <MouseIcon />,
		title: 'Intuitive Editor',
		body: 'A guided step-by-step form that anyone can fill in — no design skills required.',
	},
	{
		icon: <DownloadIcon />,
		title: 'Instant PDF Export',
		body: 'Download a print-ready PDF the moment your resume is ready to send.',
	},
];

const steps = [
	{
		n: '01',
		title: 'Fill in your details',
		body: 'Add your name, contact info, work history, education, and skills.',
	},
	{
		n: '02',
		title: 'Choose a template',
		body: 'Pick a clean, ATS-optimized layout and customise the colours and font.',
	},
	{
		n: '03',
		title: 'Download your PDF',
		body: 'Export a print-ready PDF and start applying for jobs today.',
	},
];

export default function Landing() {
	return (
		<main className="w-full">
			{/* ── Hero ── */}
			<section
				className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
				aria-labelledby="hero-heading"
			>
				<div>
					<span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1 mb-6">
						<span
							className="w-1.5 h-1.5 rounded-full bg-indigo-500"
							aria-hidden="true"
						/>
						Free · No sign-up required
					</span>

					<h1
						id="hero-heading"
						className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-5"
					>
						Build a resume that
						<br />
						<span className="text-indigo-600">gets you hired.</span>
					</h1>

					<p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
						EZ Resume Builder is a free, no-account online resume maker. Fill in
						your details, pick an ATS-friendly template, and download your PDF
						in minutes.
					</p>

					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
						<Link
							to="builder"
							className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
							aria-label="Start building your free resume"
						>
							Build My Resume
							<ArrowRightIcon />
						</Link>
						<ul
							className="flex flex-col gap-1.5 text-sm text-gray-400"
							aria-label="Key benefits"
						>
							{['No credit card', 'No sign-up', 'Instant PDF'].map((item) => (
								<li key={item} className="flex items-center gap-1.5">
									<span className="text-indigo-500">
										<CheckIcon />
									</span>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="relative">
					<div
						className="absolute inset-0 bg-indigo-50 rounded-3xl -rotate-2"
						aria-hidden="true"
					/>
					<div className="relative">
						<ResumeMockup />
					</div>
				</div>
			</section>

			{/* ── Features ── */}
			<section
				className="bg-gray-50 py-20 px-6"
				aria-labelledby="features-heading"
			>
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-14">
						<h2
							id="features-heading"
							className="text-3xl font-bold text-gray-900 tracking-tight mb-3"
						>
							Everything you need, nothing you don't
						</h2>
						<p className="text-gray-500 max-w-xl mx-auto">
							No bloat, no paywalls. Just the tools that help you create a
							professional resume fast.
						</p>
					</div>

					<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map(({ icon, title, body }) => (
							<li
								key={title}
								className="bg-white rounded-xl border border-gray-100 p-6 hover:border-indigo-100 hover:shadow-sm transition-all duration-200"
							>
								<span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 mb-4">
									{icon}
								</span>
								<h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
								<p className="text-sm text-gray-500 leading-relaxed">{body}</p>
							</li>
						))}
					</ul>
				</div>
			</section>

			{/* ── How it Works ── */}
			<section className="py-20 px-6" aria-labelledby="how-it-works-heading">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-14">
						<h2
							id="how-it-works-heading"
							className="text-3xl font-bold text-gray-900 tracking-tight mb-3"
						>
							Up and running in three steps
						</h2>
						<p className="text-gray-500">
							No tutorials, no confusion. Start and finish in one sitting.
						</p>
					</div>

					<ol className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{steps.map(({ n, title, body }) => (
							<li key={n} className="flex flex-col gap-3">
								<span className="text-4xl font-bold text-indigo-100 leading-none">
									{n}
								</span>
								<h3 className="font-semibold text-gray-900">{title}</h3>
								<p className="text-sm text-gray-500 leading-relaxed">{body}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* ── CTA ── */}
			<section
				className="bg-gray-900 py-20 px-6 text-center"
				aria-labelledby="cta-heading"
			>
				<div className="max-w-2xl mx-auto">
					<h2
						id="cta-heading"
						className="text-3xl font-bold text-white mb-4 tracking-tight"
					>
						Your next job starts with a great resume.
					</h2>
					<p className="text-gray-400 mb-8">
						Free to use. No account. No catch.
					</p>
					<Link
						to="builder"
						className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
						aria-label="Start building your free resume now"
					>
						Create My Free Resume
						<ArrowRightIcon />
					</Link>
				</div>
			</section>
		</main>
	);
}
