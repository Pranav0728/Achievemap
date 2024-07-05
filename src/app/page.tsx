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
import Profile from '@/components/common/Profile'


export default function Page() {
  const {data : session} = useSession()
  return (
    <Container>
    <HomeHeader/>
    <div className="flex flex-col h-full  w-full items-center text-center gap-12">
        <ul>
          <li>Roadmap Page</li>
        </ul>
      </div>
    <Footer/>
    </Container>
  )
}
