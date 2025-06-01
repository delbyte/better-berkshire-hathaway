import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Users,
  Globe,
  Award,
  FileText,
  Calendar,
  BarChart3,
  Shield,
  Lightbulb,
  Target,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Since 1965 • NYSE: BRK.A, BRK.B
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Building Value Through
                  <span className="text-primary"> Long-Term Thinking</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A diversified holding company focused on acquiring and operating businesses with exceptional economics
                  and outstanding management teams.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  View Performance
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  <FileText className="mr-2 h-4 w-4" />
                  Latest Report
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  <span>60+ Operating Companies</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>390,000+ Employees</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Berkshire Hathaway Building"
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
            {[
              { label: "Market Cap", value: "$890B+", icon: BarChart3 },
              { label: "Book Value Growth", value: "19.8%", icon: TrendingUp },
              { label: "Years of Growth", value: "58", icon: Calendar },
              { label: "Operating Companies", value: "60+", icon: Building2 },
            ].map((metric, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6">
                  <metric.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Investor Resources</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Access comprehensive information about our performance, strategy, and operations.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 md:grid-cols-2">
            {[
              {
                title: "Chairman's Message",
                description: "Warren Buffett's annual letter to shareholders with insights and philosophy.",
                icon: FileText,
                href: "/message",
                badge: "2024 Available",
              },
              {
                title: "Annual Reports",
                description: "Comprehensive financial statements and performance analysis.",
                icon: BarChart3,
                href: "/reports",
                badge: "Updated May 2024",
              },
              {
                title: "Operating Companies",
                description: "Explore our diverse portfolio of wholly-owned subsidiaries.",
                icon: Building2,
                href: "/subs",
                badge: "60+ Companies",
              },
              {
                title: "Corporate Governance",
                description: "Leadership structure, board composition, and governance principles.",
                icon: Shield,
                href: "/govern",
                badge: "Transparency",
              },
              {
                title: "Sustainability",
                description: "ESG initiatives and our commitment to responsible business practices.",
                icon: Globe,
                href: "/sustainability",
                badge: "ESG Focus",
              },
              {
                title: "Owner's Manual",
                description: "Essential reading for understanding our business philosophy.",
                icon: Lightbulb,
                href: "/owners",
                badge: "Must Read",
              },
            ].map((item, i) => (
              <Card key={i} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <item.icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{item.badge}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    asChild
                  >
                    <Link href={item.href}>
                      Access Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Our Philosophy
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Time-Tested Investment Principles
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  For nearly six decades, we've followed a consistent approach: acquire wonderful businesses at fair
                  prices and hold them forever.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Target, title: "Long-term Focus", description: "We think in decades, not quarters" },
                  {
                    icon: Award,
                    title: "Quality Businesses",
                    description: "Strong competitive advantages and pricing power",
                  },
                  { icon: Users, title: "Exceptional Management", description: "Leaders who think like owners" },
                ].map((principle, i) => (
                  <div key={i} className="flex gap-3">
                    <principle.icon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-fit" asChild>
                <Link href="/owners">
                  Read Owner's Manual
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="Investment Philosophy"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Stay Informed</h2>
              <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the latest updates on our performance, new acquisitions, and Warren Buffett's insights.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" variant="secondary" className="px-8" asChild>
                <Link href="/news">Latest News</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground px-8" asChild>
                <Link href="/reports">View Reports</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
