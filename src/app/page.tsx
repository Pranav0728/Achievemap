"use client";
import * as React from "react";
import { ArrowRight, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/common/header"; // Ensure Header is used or remove import
import { Footer } from "@/components/common/footer";
import Typography from "../components/ui/typography";
import Feature from "./features";
import { Button } from "@/components/ui/button";
import CareerDropdown from "@/components/combobox";
import { HomeHeader } from "@/components/common/HomeHeader";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const href = `/services/?uid=${session?.user.id}`;

  return (
    <>
      {/* Uncomment Header if needed */}
      {/* <Header /> */}
      <HomeHeader />
      <div className="flex flex-col h-full pt-20 pb-24 px-4 md:py-26 md:px-32 w-full items-center text-center gap-12">
        <Typography
          className="max-w-lg md:max-w-2xl text-2xl md:text-4xl"
          variant="h1"
        >
          Simple Steps to Reach Your Goals
        </Typography>
        <div className="flex gap-6 items-center flex-col md:flex-row max-w-screen-lg">
          <div className="flex flex-col gap-6 items-center">
            <Typography
              className="max-w-lg md:max-w-2xl text-base md:text-lg md:px-5"
              variant="h5"
            >
              Your Blueprint for Success in Every Field. Achieve your dreams
              with a clear and structured plan.
            </Typography>
            <CareerDropdown />
            <Link href={href}>
              <Button size="tiny" variant="default">
                Get Roadmap
              </Button>
            </Link>
          </div>
          <video
            playsInline
            controls
            width="520"
            height="360"
            className="mt-6 mx-auto rounded-lg shadow-lg"
          >
            <source src="/videos/Achievemap1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex flex-col md:pt-24 md:gap-25 gap-15 items-center">
          <div className="flex flex-col gap-12 items-center">
            <Typography
              className="max-w-lg md:max-w-2xl text-2xl md:text-4xl"
              variant="h1"
            >
              Why AchieveMap?
            </Typography>
            <Typography
              className="max-w-lg md:max-w-2xl text-base md:text-lg mx-10"
              variant="p"
            >
              With over 6-7 years of coding experience, I've learned a lot through countless mistakes. Each error taught me valuable lessons, and I want to help you avoid those pitfalls. That's why I created these roadmaps. They’re designed to save you time, streamline your learning, and keep you motivated with inspiring videos. Let’s make your journey to success smoother and more efficient together!
            </Typography>
            <div className="flex flex-col md:flex-row gap-12 items-center md:mb-20">
              <Feature
                icon={<BookOpen size={24} />}
                headline="Comprehensive Roadmaps"
                description="From AI engineering to digital marketing, we provide detailed roadmaps for a variety of career paths."
              />
              <Feature
                icon={<ArrowRight size={24} />}
                headline="Step-by-Step Guidance"
                description="Clear, actionable steps to help you progress from beginner to expert in your chosen field."
              />
              <Feature
                icon={<Shield size={24} />}
                headline="Secure and Private"
                description="Your progress and personal data are safe with us, thanks to our top-notch security measures."
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 max-w-lg md:max-w-2xl items-center md:mb-20">
            <Typography
              className="max-w-lg md:max-w-2xl text-2xl md:text-4xl"
              variant="h1"
            >
              Easy to Start, Simple to Follow
            </Typography>
            <Typography
              className="max-w-lg md:max-w-2xl text-base md:text-lg mx-10"
              variant="p"
            >
              Log in and start your journey immediately. Our intuitive platform
              ensures you stay on track and motivated.
            </Typography>
          </div>
          <div className="flex flex-col gap-6 items-center">
            <Typography
              className="max-w-lg md:max-w-2xl text-2xl md:text-4xl"
              variant="h1"
            >
              Get in Touch
            </Typography>
            <Typography className="max-w-lg md:max-w-2xl text-base md:text-lg">
              Have questions or need support? Contact us to learn more or to
              book a demo.
            </Typography>
            <Link href="mailto:pranavmolawade07@gmail.com">
              <Button size="tiny" variant="ghost">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
