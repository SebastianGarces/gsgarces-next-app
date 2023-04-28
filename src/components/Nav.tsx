'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import socials from '../constants/socials'

import { NavLink } from './NavLink'

type NavItem = {
	[name: string]: {
		name: string
		x: number
		y: number
		w: string
	}
}

const navItems: NavItem = {
	'/': {
		name: 'home',
		x: 0,
		y: 0,
		w: '75px',
	},
	'/about': {
		name: 'about',
		x: 64,
		y: 60,
		w: '80px',
	},
	'/keyframes': {
		name: 'keyframes',
		x: 127,
		y: 120,
		w: '118px',
	},
}

export const Nav = () => {
	let pathname = usePathname() || '/'

	return (
		<aside className="pt-none flex w-72 flex-col  px-4 pb-4 md:px-12">
			<nav className="flex h-full w-full flex-col gap-6 rounded-lg p-4 pt-0 backdrop-blur-md">
				<Link href="/" className="ml-[-1rem] font-display text-[108px] leading-none text-sub-color">
					S
				</Link>

				<div className="mb-2 mt-2 flex flex-row space-x-0 pr-10 md:mt-0 md:flex-col">
					{navItems[pathname] ? (
						<>
							{/* Desktop version, hidden on mobile, animates y axis */}
							<div className="hidden md:block">
								<motion.div
									className="absolute z-[-1] h-[50px] rounded-md bg-sub-alt-color"
									layoutId="test2"
									initial={{ opacity: 0, y: navItems[pathname].y }}
									animate={{
										opacity: 1,
										y: navItems[pathname].y,
										x: -16,
										width: navItems[pathname].w,
									}}
									transition={{
										type: 'spring',
										stiffness: 350,
										damping: 30,
									}}
								/>
							</div>

							{/* Mobile version, hidden on desktop, animates x axis */}
							<div className="block md:hidden">
								<motion.div
									className="absolute z-[-1] h-[50px] rounded-md bg-sub-alt-color"
									layoutId="test"
									initial={{ opacity: 0, x: navItems[pathname].x }}
									animate={{
										opacity: 1,
										x: navItems[pathname].x,
										width: navItems[pathname].w,
									}}
									transition={{
										type: 'spring',
										stiffness: 350,
										damping: 30,
									}}
								/>
							</div>
						</>
					) : null}

					<div className="hidden flex-col items-start gap-2 lg:flex">
						{Object.entries(navItems).map(([path, { name }]) => {
							return (
								<NavLink href={path} key={path + name}>
									{name}
								</NavLink>
							)
						})}
					</div>
				</div>
			</nav>

			<div className="mt-8 hidden flex-col items-start gap-8 sm:flex">
				{socials.map(({ ariaLabel, url, icon: Icon }) => {
					return (
						<a key={url} href={url} target="_blank" aria-label={ariaLabel} rel="noopener">
							<Icon />
						</a>
					)
				})}
			</div>
		</aside>
	)
}
