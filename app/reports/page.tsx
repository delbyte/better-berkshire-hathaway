import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Download, Search, Calendar, FileText, TrendingUp, BarChart3 } from "lucide-react"

export default function ReportsPage() {
  const reports = [
    {
      year: "2023",
      title: "Annual Report 2023",
      description: "Complete financial statements and business review",
      date: "March 15, 2024",
      size: "2.4 MB",
      type: "Annual Report",
      highlights: ["Record operating earnings", "Strong cash generation", "Strategic acquisitions"],
    },
    {
      year: "2022",
      title: "Annual Report 2022",
      description: "Comprehensive review of operations and financial performance",
      date: "March 18, 2023",
      size: "2.1 MB",
      type: "Annual Report",
      highlights: ["Resilient performance", "Portfolio expansion", "Dividend growth"],
    },
    {
      year: "2023",
      title: "Q4 2023 Earnings",
      description: "Fourth quarter and full year results",
      date: "February 24, 2024",
      size: "1.8 MB",
      type: "Quarterly Report",
      highlights: ["Strong Q4 finish", "Full year records", "Capital allocation"],
    },
    {
      year: "2023",
      title: "Q3 2023 Earnings",
      description: "Third quarter financial results and commentary",
      date: "November 4, 2023",
      size: "1.6 MB",
      type: "Quarterly Report",
      highlights: ["Continued growth", "Operational excellence", "Market leadership"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Button variant="ghost" className="mb-4" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="outline">Financial Reports</Badge>
          <Badge variant="secondary">Updated May 2024</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Annual & Interim Reports</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Access comprehensive financial statements, business reviews, and performance analysis for Berkshire Hathaway's
          operations and investments.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">$37.4B</div>
                <p className="text-sm text-muted-foreground">Operating Earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
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
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">58</div>
                <p className="text-sm text-muted-foreground">Years of Growth</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">19.8%</div>
                <p className="text-sm text-muted-foreground">Annual Return</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search reports..." className="pl-10" />
        </div>
        <Button variant="outline">Filter by Year</Button>
        <Button variant="outline">Filter by Type</Button>
      </div>

      {/* Reports Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {reports.map((report, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={report.type === "Annual Report" ? "default" : "secondary"}>{report.type}</Badge>
                    <Badge variant="outline">{report.year}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{report.title}</CardTitle>
                  <CardDescription className="mt-2">{report.description}</CardDescription>
                </div>
                <FileText className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Published: {report.date}</span>
                  <span>Size: {report.size}</span>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Key Highlights:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {report.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                  <Button variant="outline">View Online</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Archive Section */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Historical Reports Archive</CardTitle>
            <CardDescription>Access reports from previous years and decades of financial performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <div className="font-medium">2020-2022 Reports</div>
                <div className="text-sm text-muted-foreground">Recent historical data</div>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <div className="font-medium">2010-2019 Archive</div>
                <div className="text-sm text-muted-foreground">Decade of growth</div>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                <div className="font-medium">Complete Archive</div>
                <div className="text-sm text-muted-foreground">All reports since 1965</div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* SEC Filings */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>SEC Filings & Regulatory Documents</CardTitle>
            <CardDescription>Official filings with the Securities and Exchange Commission</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { form: "10-K", description: "Annual Report", date: "March 15, 2024" },
                { form: "10-Q", description: "Quarterly Report", date: "November 4, 2023" },
                { form: "8-K", description: "Current Report", date: "February 24, 2024" },
                { form: "DEF 14A", description: "Proxy Statement", date: "April 12, 2024" },
              ].map((filing, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{filing.form}</Badge>
                    <div>
                      <div className="font-medium">{filing.description}</div>
                      <div className="text-sm text-muted-foreground">{filing.date}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              View All SEC Filings
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
