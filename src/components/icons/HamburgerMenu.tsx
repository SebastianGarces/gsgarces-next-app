import { SVGProps } from 'react'

export const HamburgerMenu = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width="30"
		height="30"
		viewBox="0 0 30 30"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className={`svg ${props.className}`}
	>
		<path
			d="M16.25 22.5H25M5 7.5H25H5ZM5 15H25H5Z"
			stroke="#b7b9ba"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
