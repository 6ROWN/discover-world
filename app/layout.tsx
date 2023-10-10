import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UserSearchProvider from "@/context/UserSearchProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<UserSearchProvider>
				<body className={inter.className}>{children}</body>
			</UserSearchProvider>
		</html>
	);
}