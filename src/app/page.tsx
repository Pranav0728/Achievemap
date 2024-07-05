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


export default function page() {
  return (
    <Container>
    <Header/>
    <div className="flex flex-col h-full  w-full items-center text-center gap-12">
        <ul>
          <li>Roadmap Page</li>
          
        </ul>
      </div>
    <Footer/>
    </Container>
  )
}
