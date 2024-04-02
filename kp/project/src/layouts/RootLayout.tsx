import { ReactNode } from "react";
import Header from "../components/Header/Header";

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Header />
			<main className="main__wrapper">
				{children}
			</main>
		</>
	);
};

export default RootLayout;
