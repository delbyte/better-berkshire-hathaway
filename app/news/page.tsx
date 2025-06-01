import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  Search,
  Calendar,
  Clock,
  TrendingUp,
  Building2,
  FileText,
  ExternalLink,
  Filter,
  Bell,
  Share,
} from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Berkshire Hathaway Reports Record Q1 2024 Operating Earnings",
      summary:
        "Operating earnings reach $11.2 billion, driven by strong performance across insurance and energy segments.",
      category: "Earnings",
      date: "2024-05-04",
      readTime: "3 min read",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Earnings", "Financial Results", "Q1 2024"],
    },
    {
      id: 2,
      title: "BNSF Railway Announces $3.5 Billion Infrastructure Investment",
      summary: "Major capital investment program to enhance rail network capacity and efficiency across North America.",
      category: "Subsidiaries",
      date: "2024-04-28",
      readTime: "4 min read",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      tags: ["BNSF", "Infrastructure", "Investment"],
    },
    {
      id: 3,
      title: "Berkshire Hathaway Energy Completes Major Wind Farm Acquisition",
      summary:
        "Acquisition of 500MW wind farm strengthens renewable energy portfolio and supports clean energy transition.",
      category: "Acquisitions",
      date: "2024-04-22",
      readTime: "2 min read",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      tags: ["BH Energy", "Renewable Energy", "Acquisition"],
    },
    {
      id: 4,
      title: "Annual Shareholder Meeting Highlights: Key Takeaways",
      summary:
        "Warren Buffett and Charlie Munger share insights on market conditions, investment philosophy, and company outlook.",
      category: "Events",
      date: "2024-04-15",
      readTime: "8 min read",
      featured: true,
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Annual Meeting", "Warren Buffett", "Investment Philosophy"],
    },
    {
      id: 5,
      title: "GEICO Launches New Digital Platform for Enhanced Customer Experience",
      summary:
        "Revolutionary digital platform streamlines insurance processes and improves customer satisfaction scores.",
      category: "Innovation",
      date: "2024-04-10",
      readTime: "3 min read",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      tags: ["GEICO", "Digital Innovation", "Customer Experience"],
    },
    {
      id: 6,
      title: "Precision Castparts Wins Major Aerospace Contract",
      summary: "$2.8 billion multi-year contract with leading aircraft manufacturer strengthens aerospace portfolio.",
      category: "Business",
      date: "2024-04-05",
      readTime: "2 min read",
      featured: false,
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Precision Castparts", "Aerospace", "Contract"],
    },
  ]

  const pressReleases = [
    {
      title: "Berkshire Hathaway Announces Quarterly Dividend",
      date: "2024-05-01",
      type: "Dividend Announcement",
    },
    {
      title: "Board of Directors Approves Stock Repurchase Program",
      date: "2024-04-20",
      type: "Corporate Action",
    },
    {
      title: "Annual Meeting Webcast Now Available",
      date: "2024-04-16",
      type: "Event Update",
    },
  ]

  const categories = ["All", "Earnings", "Subsidiaries", "Acquisitions", "Events", "Innovation", "Business"]

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
          <Badge variant="outline">News & Updates</Badge>
          <Badge variant="secondary">Latest Stories</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">News & Press Releases</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Stay informed with the latest news, announcements, and updates from Berkshire Hathaway and our operating
          companies.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">156</div>
                <p className="text-sm text-muted-foreground">Press Releases YTD</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">Q1</div>
                <p className="text-sm text-muted-foreground">Latest Earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">May 4</div>
                <p className="text-sm text-muted-foreground">Next Earnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">60+</div>
                <p className="text-sm text-muted-foreground">Companies Featured</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search news..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>
        <Button variant="outline" size="sm">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Bell className="mr-2 h-4 w-4" />
          Subscribe
        </Button>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="news" className="space-y-8">
        <TabsList>
          <TabsTrigger value="news">Latest News</TabsTrigger>
          <TabsTrigger value="press">Press Releases</TabsTrigger>
          <TabsTrigger value="events">Upcoming Events</TabsTrigger>
        </TabsList>

        <TabsContent value="news" className="space-y-8">
          {/* Featured Story */}
          {newsItems
            .filter((item) => item.featured)
            .slice(0, 1)
            .map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    <Badge className="absolute top-4 left-4">Featured</Badge>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{item.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <p className="text-muted-foreground">{item.summary}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.tags.map((tag, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button>Read Full Story</Button>
                        <Button variant="outline" size="icon">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsItems
              .filter((item) => !item.featured)
              .map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3" variant="secondary">
                      {item.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                      <Clock className="h-4 w-4" />
                      <span>{item.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{item.summary}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        Read More
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline">Load More Stories</Button>
          </div>
        </TabsContent>

        <TabsContent value="press" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Press Releases</CardTitle>
              <CardDescription>Official announcements and corporate communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pressReleases.map((release, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{release.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{new Date(release.date).toLocaleDateString()}</span>
                          <Badge variant="outline" className="text-xs">
                            {release.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Press Releases
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Media Resources</CardTitle>
              <CardDescription>Resources for journalists and media professionals</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium">Media Kit</div>
                  <div className="text-sm text-muted-foreground">Logos, photos, and company information</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium">Executive Bios</div>
                  <div className="text-sm text-muted-foreground">Leadership team biographies</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium">Fact Sheet</div>
                  <div className="text-sm text-muted-foreground">Key company statistics and data</div>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
                  <div className="font-medium">Media Contacts</div>
                  <div className="text-sm text-muted-foreground">Press and investor relations contacts</div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Important dates and events for investors and stakeholders</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    event: "Q2 2024 Earnings Release",
                    date: "2024-08-03",
                    type: "Earnings",
                    time: "After market close",
                  },
                  { event: "Annual Shareholder Meeting", date: "2025-05-03", type: "Meeting", time: "10:00 AM CDT" },
                  {
                    event: "Q3 2024 Earnings Release",
                    date: "2024-11-02",
                    type: "Earnings",
                    time: "After market close",
                  },
                  { event: "Investor Day", date: "2024-09-15", type: "Presentation", time: "9:00 AM EDT" },
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">{event.event}</h4>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                          <span>•</span>
                          <span>{event.time}</span>
                          <Badge variant="outline" className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Add to Calendar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Notifications</CardTitle>
              <CardDescription>Stay updated on important events and announcements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Subscribe to receive email notifications about earnings releases, annual meetings, and other important
                  events.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email address" className="flex-1" />
                  <Button>
                    <Bell className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
