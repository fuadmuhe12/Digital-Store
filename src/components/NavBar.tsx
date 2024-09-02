import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Icons from "./icons";
import NavItems from "./NavItems";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Cart from "./Cart";
import { Separator } from "./ui/separator";

type Props = {};

export default function NavBar({ }: Props) {
	const user = null;
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
							<div className="hidden lg:block lg:ml-8 lg:self-stretch">
								<NavItems />
							</div>
							<div className="ml-auto flex items-center ">
								<div className="hidden lg:flex flex-1 lg:justify-end gap-x-4 ">
									<div className="flex items-center gap-x-3">
										{
											!user ? (
												<>
													<div className="flex gap-x-4 items-center">
														<Link href={'/sign-in'} className={buttonVariants({ variant: "secondary" })}>
															Sign In
														</Link>
														<span className="h-6 w-px bg-gray-200" />
														<Link href={'/sign-up'} className={buttonVariants({ variant: "outline" })}>
															Sign Up
														</Link>
													</div>
												</>
											) : (
												<>
													<Button variant={"ghost"} >Log out</Button>
												</>
											)
										}
										<span className="h-6 w-px bg-gray-200" />
										<div className="ml-4 flow-root lg:ml-6">
											<Cart />
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</MaxWidthWrapper>
			</header>
		</div>
	);
}
