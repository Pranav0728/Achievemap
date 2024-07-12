'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import logoD from '../../images/logo.png'
import logoW from '../../images/logow.png'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'
import { ModeToggle } from '../DLmode'
import Image from 'next/image'
import { useTheme } from "next-themes"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const { theme } = useTheme(); // Destructure theme from useTheme hook
  
  const logo = theme === 'dark' ? logoW : logoD; // Conditionally select logo based on theme
  const pathname = usePathname();
  
  const items = [
    {
      href: 'mailto:pranavmolawade07@gmail.com',
      title: 'Contact Us'
    }
  ];

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <Image alt='logo' src='/images/logom.png' className="mr-3" width={50} height={50} priority />
    </Link>
  );

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <Link href="/" passHref>
      <Button size="tiny" color="ghost">
        <Typography variant="p" >
          Login
        </Typography>
      </Button>
      </Link>
      {/* <Link href="/signup" passHref>
        <Button size="tiny" color="ghost">
          <Typography variant="p">
            Sign Up
          </Typography>
        </Button>
      </Link> */}
      <ModeToggle />
    </div>
  );

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href);
          return (
            <Link
              href={item.href}
              key={item.title}
              passHref
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary cursor-pointer')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  };

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="w-full max-w-[1000px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">
            {getLogo()}
          </div>
          <div className="hidden md:flex flex items-center w-full justify-between">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
