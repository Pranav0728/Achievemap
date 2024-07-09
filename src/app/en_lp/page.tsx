import { Button } from "@/components/ui/button";
import Typography from "../../components/ui/typography";
import Feature from "../features";
import { ArrowRight, BookOpen, Shield } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col h-full pt-11 pb-24 px-4 md:py-26 md:px-32 w-full items-center text-center gap-12">
        <div className="flex flex-col gap-6 items-center">
          <Typography
            className="max-w-lg md:max-w-2xl text-2xl md:text-4xl"
            variant="h1"
          >
            Your Personalized Roadmap to Success
          </Typography>
          <Typography
            className="max-w-lg md:max-w-2xl text-base md:text-lg"
            variant="h5"
          >
            Your Blueprint for Success in Every Field. Achieve your dreams with
            a clear and structured plan.
          </Typography>
          <Link href="/signin">
            <Button size="tiny" variant="default">
              Get Started
            </Button>
          </Link>
          <video
            playsInline
            controls
            width="640"
            height="360"
            className="mt-6 mx-auto rounded-lg shadow-lg"
          >
            <source src="/videos/Achievemap.mp4" type="video/mp4" />
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
            <div className="flex flex-col md:flex-row gap-12 items-center">
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
          <div className="flex flex-col gap-6 max-w-lg md:max-w-2xl items-center">
            <Typography
              className="max-w-lg md:max-w-2xl text-2xl md:text-4xl"
              variant="h1"
            >
              Easy to Start, Simple to Follow
            </Typography>
            <Typography
              className="max-w-lg md:max-w-2xl text-base md:text-lg"
              variant="p"
            >
              Sign up and start your journey immediately. Our intuitive platform
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
            <Link href="/contact">
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
