"use client";
import { PRODUCT_CATEGORIES } from '@/config/config';
import React, { useRef, useState } from 'react'
import NavItem from './NavItem';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

type Props = {}
type Event = MouseEvent | TouchEvent | KeyboardEvent;


export default function NavItems({ }: Props) {
    const [ActiveIndex, setActiveIndex] = useState<number | null>(null)
    const [isPrevActive, setPrevActive] = useState<boolean>(false);
    const isAnyActive = ActiveIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null);
    const handleClickOutside = (event: Event) => {
        setActiveIndex(null);
    }

    useOnClickOutside(navRef, handleClickOutside);
    return (
        <div className='flex gap-4 h-full ' ref={navRef}>
            {
                PRODUCT_CATEGORIES.map((category, index) => {

                    const isActive = ActiveIndex == index;
                    const toggleActive = () => {
                        if (isAnyActive) {
                            setPrevActive(true);
                        }
                        else {
                            setPrevActive(false);
                        }
                        if (isActive) {
                            setActiveIndex(null)
                        } else {
                            setActiveIndex(index)
                        }
                    }
                    return (<NavItem category={category} isActive={isActive} isAnyActive={isPrevActive} toggleActive={toggleActive} key={category.value} />)
                })
            }
        </div>
    )
}