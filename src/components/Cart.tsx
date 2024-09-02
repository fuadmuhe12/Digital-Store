import React from "react";
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

type Props = {};

export default function Cart({ }: Props) {
    const ItemCount = 0;
    const fee = 12;
    return (
        <Sheet>
            <SheetTrigger className="flex items-center group">
                <ShoppingCart className="size-6 text-gray-400 group-hover:text-gray-500 flex-shrink-0" />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    0
                </span>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-lg pr-0 flex flex-col">
                <SheetHeader className="pl-6">
                    <SheetTitle className="text-center">Cart (1)</SheetTitle>
                </SheetHeader>
                {ItemCount > 0 ? (
                    <>
                        <div className="flex w-full flex-col pr-6">
                            cart items
                            {/* TODO: add the cart item logic */}
                        </div>
                        <div className="space-y-4 pr-6">
                            <Separator />
                            <div className="space-y-1.5 text-sm">
                                <div className="flex">
                                    <span className="flex-1">Shipping</span>
                                    <span>Free</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Transaction fee</span>
                                    <span>{formatPrice(fee, { currency: "ETB" })}</span>
                                </div>
                                <div className="flex">
                                    <span className="flex-1">Total</span>
                                    <span>{formatPrice(fee, { currency: "ETB" })}</span>
                                </div>
                            </div>
                        </div>
                        <SheetFooter className="pr-6">
                            <SheetTrigger asChild>
                                <Link href={'checkout'} className={buttonVariants({ className: "w-full" })}>Continue to Checkout</Link>
                            </SheetTrigger>
                        </SheetFooter>
                    </>
                ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center space-y-2">
                        <div className="relative mb-4 size-60 text-muted-foreground pointer-events-none" aria-hidden>
                            <Image src="/hippo-empty-cart.png" alt="hippo image" fill />
                        </div>
                        <p className="font-semibold text-lg">your cart is Empty</p>
                        <SheetTrigger asChild>
                            <Link href={'products'} className={buttonVariants({ variant: "link", size: "lg", className: "text-xl font-medium" })}>Shop Now</Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
