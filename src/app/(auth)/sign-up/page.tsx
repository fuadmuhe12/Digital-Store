'use client'
import Icons from '@/components/icons'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { TAuthCredentialVaidator } from '@/validator/account-credential-validator'


type Props = {}

export default function SignUp({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<TAuthCredentialVaidator>();

    return (
        <>
            <MaxWidthWrapper>
                <div className='container relative flex pt-10 flex-col items-center justify-center lg:px-0'>
                    <div className='mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]'>
                        <div className='flex flex-col items-center justify-center space-y-2 text-center'>
                            <Icons.logo className='size-20' />
                            <h1 className='text-2xl font-semibold tracking-tighter'>Create an Account</h1>
                        </div>
                        <div className='grid gap-6 w-full'>
                            <form >
                                <div className='grid gap-2'>
                                    <div className='grid gap-1 py-2'>
                                        <Label htmlFor='email'>Email</Label>
                                        <Input {...register('email')} className={cn({ "focus-visible:ring-red-500": errors.email })} type='text' placeholder='you@example.com' />
                                    </div>
                                    <div className='grid gap-1 py-2'>
                                        <Label>Password</Label>
                                        <Input {...register('password')} className={cn({ "focus-visible:ring-red-500": errors.password })} type='password' placeholder='*********' />
                                    </div>
                                    <div className='grid gap-1 py-2'>
                                        <Label>Confirm password</Label>
                                        <Input {...register('confirmPassword')} className={cn({ "focus-visible:ring-red-500": errors.confirmPassword })} type='password' placeholder='*********' />
                                    </div>
                                    <Button className='w-full' type='submit'>Sign Up</Button>
                                </div>
                            </form>
                            <p className='text-muted-foreground pb-10 pt-3 text-center'>Already have an account? <Link href={'sign-in'} className={buttonVariants({ variant: 'link' })}>Sign in <ArrowRight className='size-6 pl-2' /></Link> </p>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}