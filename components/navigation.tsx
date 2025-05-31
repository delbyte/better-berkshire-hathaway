"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Building2, Menu, TrendingUp } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Berkshire Hathaway</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Investor Relations</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link
                    href="/message"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Chairman's Message</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Warren Buffett's annual letter to shareholders
                    </p>
                  </Link>
                  <Link
                    href="/reports"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Annual Reports</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Financial statements and performance data
                    </p>
                  </Link>
                  <Link
                    href="/letters"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Shareholder Letters</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Historical letters and insights
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <Link
                    href="/subs"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Subsidiaries</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Our portfolio of operating companies
                    </p>
                  </Link>
                  <Link
                    href="/govern"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Governance</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Corporate governance and leadership
                    </p>
                  </Link>
                  <Link
                    href="/sustainability"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Sustainability</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      ESG initiatives and responsible investing
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/news"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                News
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                href="/owners"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
              >
                Owner's Manual
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex">
            <TrendingUp className="mr-2 h-4 w-4" />
            Stock Quote
          </Button>
          <Button>Investor Portal</Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/message" onClick={() => setIsOpen(false)}>
                  Chairman's Message
                </Link>
                <Link href="/reports" onClick={() => setIsOpen(false)}>
                  Annual Reports
                </Link>
                <Link href="/letters" onClick={() => setIsOpen(false)}>
                  Shareholder Letters
                </Link>
                <Link href="/subs" onClick={() => setIsOpen(false)}>
                  Subsidiaries
                </Link>
                <Link href="/govern" onClick={() => setIsOpen(false)}>
                  Governance
                </Link>
                <Link href="/sustainability" onClick={() => setIsOpen(false)}>
                  Sustainability
                </Link>
                <Link href="/news" onClick={() => setIsOpen(false)}>
                  News
                </Link>
                <Link href="/owners" onClick={() => setIsOpen(false)}>
                  Owner's Manual
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
