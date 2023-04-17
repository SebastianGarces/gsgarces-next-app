'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'

type TNavLinkProps = {
	href: string
	children: ReactNode
}

export const NavLink = ({ href, children }: TNavLinkProps) => {
	const pathname = usePathname()
	const isActive = pathname === href

	return (
		<Link
			href={href}
			className={`ml-[-1rem] rounded-lg p-4 font-display text-xl uppercase leading-none transition-all hover:text-text-color-highlight ${
				isActive ? 'text-text-color-highlight' : 'text-sub-color'
			}`}
		>
			{children}
		</Link>
	)
}
