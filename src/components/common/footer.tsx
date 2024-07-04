'use client'
import Link from 'next/link'
import Typography from '../ui/typography'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1000px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <img src="/logo.svg" className="mr-3" />
            <Typography className="!text-white !text-base font-medium ">
              Roadmap
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <Link
            href="/"
            // target="_blank"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Get a Roadmap
            </Typography>
          </Link>
          <Link
            href="/terms-of-service"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max">
              Terms of service
            </Typography>
          </Link>
          <Link
            href="/privacy-policy"
            className="pointer block w-fit"
          >
            <Typography variant="p">
              Privacy Policy
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}
