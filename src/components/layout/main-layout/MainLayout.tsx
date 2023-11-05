import { FC, PropsWithChildren } from 'react'
import Header from '../header/Header'

const MainLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
		</>
	)
}

export default MainLayout
