import { ReactNode } from "react"

import "./style.css"

interface TitleProps {
	children: ReactNode;
}

export const Title = ({ children }: TitleProps) => (
	<h1 className="title">{children}</h1>
)
