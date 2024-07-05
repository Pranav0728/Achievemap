"use client"
import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
import Container from '../components/container'
import React from 'react'
import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from '../app/features'
import { ArrowRight, BookOpen, Shield } from 'lucide-react'
import Link from 'next/link'
import { HomeHeader } from '@/components/common/HomeHeader'
import { useSession } from 'next-auth/react'


export default function page() {
  const {data : session} = useSession()
  return (
    <Container>
    <HomeHeader/>
    <div className="flex flex-col h-full  w-full items-center text-center gap-12">
        <ul>
          <li>Roadmap Page</li>
          {session?.user?.name}
          <br />
          {session?.user?.email}
          {session?.user?.image}
        </ul>
      </div>
    <Footer/>
    </Container>
  )
}
