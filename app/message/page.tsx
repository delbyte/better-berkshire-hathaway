import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, FileText, TrendingUp, Users } from "lucide-react"

export default function MessagePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Button variant="ghost" className="mb-4" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="outline">Annual Letter</Badge>
          <Badge variant="secondary">2024</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Chairman's Message to Shareholders</h1>
        <p className="text-xl text-muted-foreground">
          Warren E. Buffett's annual letter providing insights into Berkshire's performance, investment philosophy, and
          outlook for the future.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">15.8%</div>
                <p className="text-sm text-muted-foreground">Book Value Growth</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">$588B</div>
                <p className="text-sm text-muted-foreground">Total Assets</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">396,000</div>
                <p className="text-sm text-muted-foreground">Employees</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>2024 Annual Letter</CardTitle>
                  <CardDescription>Published February 24, 2024</CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">To the Shareholders of Berkshire Hathaway Inc.:</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Charlie Munger, my long-time partner, and I have the job of managing a portion of your savings. We
                    are honored by your trust and work to be worthy of it. Please note particularly that my partner and
                    I never take a fee of any sort from Berkshire.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">What We Do</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our goal is simple: We want to improve the operating results of our many subsidiaries and, when
                    possible, to buy new businesses that are likely to deliver good returns on the capital they employ.
                    We also try to hold our costs to a minimum.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    At Berkshire, we make no attempt to pick the few winners that will emerge from an ocean of unproven
                    enterprises. We're not smart enough to do that, and we know it. Instead, we try to apply a simple
                    test: Can we understand the business?
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Our Performance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In 2023, Berkshire's operating earnings – our preferred measure of performance – were $37.4 billion,
                    an increase of $5.5 billion from 2022. Charlie and I focus on this operational figure and urge you
                    to do so as well.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg mt-4">
                    <p className="text-sm font-medium">Key Insight:</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      "The lesson for investors: The weeds wither away in significance as the flowers bloom. Over time,
                      it takes just a few winners to work wonders."
                    </p>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Looking Forward</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    America's economic soil remains fertile. Companies and entrepreneurs will continue to propel our
                    country's growth. Yes, the road has been bumpy, and yes, more bumps will come. America's best days
                    lie ahead.
                  </p>
                </div>

                <div className="bg-primary/5 p-6 rounded-lg">
                  <p className="text-sm font-medium mb-2">Warren E. Buffett</p>
                  <p className="text-sm text-muted-foreground">Chairman of the Board</p>
                  <p className="text-sm text-muted-foreground">February 24, 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Previous Letters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { year: "2023", date: "Feb 25, 2023" },
                { year: "2022", date: "Feb 26, 2022" },
                { year: "2021", date: "Feb 27, 2021" },
                { year: "2020", date: "Feb 22, 2020" },
              ].map((letter) => (
                <Link
                  key={letter.year}
                  href={`/letters/${letter.year}`}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{letter.year} Letter</div>
                    <div className="text-sm text-muted-foreground">{letter.date}</div>
                  </div>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link href="/letters">View All Letters</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Related Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/reports" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="font-medium">Annual Report</div>
                <div className="text-sm text-muted-foreground">Complete financial statements</div>
              </Link>
              <Link href="/special-letters" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="font-medium">Special Letters</div>
                <div className="text-sm text-muted-foreground">Important communications</div>
              </Link>
              <Link href="/owners" className="block p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="font-medium">Owner's Manual</div>
                <div className="text-sm text-muted-foreground">Business philosophy</div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
