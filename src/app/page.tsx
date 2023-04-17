import Link from 'next/link'

export default function Home() {
	return (
		<div className="grid gap-8">
			<div className="mt-9">
				<Link className="font-display text-[48px] leading-none text-text-color-highlight" href="/">
					Sebastian Garces
				</Link>
				<p className="font-display text-2xl uppercase tracking-wider text-sub-color">Software Engineer</p>
			</div>
			<div className="">
				<p className="font-body">
					I’m a Cleveland-based software engineer who specializes in building{' '}
					<span className="text-sub-color"> (and occacionally designing)</span> exceptional digital
					experiences.
				</p>
			</div>
			<div className="flex justify-end">
				<a
					href="mailto:gsgarces1@gmail.com"
					className="cursor-pointer rounded-lg bg-sub-color py-4 px-8 font-display text-lg uppercase text-text-color-highlight"
				>
					Get in touch
				</a>
			</div>
		</div>
	)
}
