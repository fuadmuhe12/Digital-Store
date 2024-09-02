import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link } from "lucide-react";
import Icons from "./icons";
import NavItems from "./NavItems";

type Props = {};

export default function NavBar({ }: Props) {
	return (
		<div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
			<header className="relative">
				<MaxWidthWrapper>
					<div className="border-t border-gray-200">
						<div className="flex items-center h-16">
							{/* TODO: Moblie nav */}
							<div className="lagerDevice ml-4 lg:ml-0 flex">
								<Link href="/">
									<Icons.logo className="size-10" />
								</Link>
							</div>
							<div className="">
								<NavItems />
							</div>

						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
}
