'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

import Link from 'next/link'

type NavLinkProps = { href: string; children: ReactNode }
export const NavLink = ({ href, children }: NavLinkProps) => {
	const pathname = usePathname()
	const isActive = pathname === href

	const linkStyle = `ml-[-1rem] rounded-lg p-4 font-display text-xl uppercase leading-none transition-all hover:text-text-color-highlight ${
		isActive ? 'text-text-color-highlight' : 'text-sub-color'
	}`

	return (
		<Link href={href} className={linkStyle}>
			{children}
		</Link>
	)
}
