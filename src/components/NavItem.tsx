"use client";
import { PRODUCT_CATEGORIES } from '@/config/config'
import React from 'react'
import { Button, buttonVariants } from './ui/button';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    isActive: boolean;
    toggleActive: () => void;
    category: typeof PRODUCT_CATEGORIES[number];
    isAnyActive: boolean;
}

export default function NavItem({ category, isActive, isAnyActive, toggleActive }: Props) {
    console.log(isActive);
    return (
        <div className='flex py-2'>
            <div className='flex  relative items-center'>
                <Button variant={isActive ? "secondary" : "ghost"} onClick={toggleActive} >{category.label} {<ChevronRight className={cn("transition-all ml-1 size-4 text-muted-foreground", { "rotate-90": isActive })} />}</Button>
            </div>
            {
                isActive && (
                    <div className={cn("-mt-1 absolute inset-0 top-full text-muted-foreground text-sm", { "animate-in duration-200 slide-in-from-top-10 fade-in-10": !isAnyActive })}>
                        <div className='absolute inset-0 top-1/2 shadow bg-white' aria-hidden="true" />
                        <div className='bg-white'>
                            <div className='mx-auto max-w-7xl px-8 '>
                                <div className='grid grid-cols-4 py-16 gap-y-10'>
                                    <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                        {category.featured.map((item, index) => (
                                            <div key={index} className='group text-base sm:text-sm '>
                                                <div className="forImage relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                    <Image src={item.imageSrc} alt='Image for category' fill className='object-cover object-center' />
                                                </div>
                                                <Link href={item.href} className={cn(buttonVariants({ variant: 'link' },), 'mt-6 font-medium text-gray-900 block')}>{item.name}</Link>
                                                <p className='my-1 ml-4' aria-hidden="true">shop Now</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                )
            }
        </div>
    )
}