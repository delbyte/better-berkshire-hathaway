import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Building2, Users, DollarSign, Globe, ExternalLink } from "lucide-react"

export default function SubsidiariesPage() {
  const subsidiaries = [
    {
      name: "GEICO",
      category: "Insurance",
      description: "Leading auto insurance provider with direct-to-consumer model",
      employees: "40,000+",
      revenue: "$50B+",
      founded: "1936",
      acquired: "1996",
      logo: "/placeholder.svg?height=60&width=120",
      highlights: ["#2 Auto Insurer", "15% Market Share", "Digital Innovation Leader"],
    },
    {
      name: "BNSF Railway",
      category: "Transportation",
      description: "One of North America's leading freight railroad networks",
      employees: "35,000+",
      revenue: "$25B+",
      founded: "1849",
      acquired: "2010",
      logo: "/placeholder.svg?height=60&width=120",
      highlights: ["32,500 Route Miles", "Coal & Consumer Goods", "Sustainability Focus"],
    },
    {
      name: "Berkshire Hathaway Energy",
      category: "Energy",
      description: "Diversified energy company with renewable focus",
      employees: "24,000+",
      revenue: "$20B+",
      founded: "1999",
      acquired: "1999",
      logo: "/placeholder.svg?height=60&width=120",
      highlights: ["Renewable Leader", "Grid Infrastructure", "Energy Storage"],
    },
    {
      name: "Precision Castparts",
      category: "Aerospace",
      description: "Leading manufacturer of complex metal components",
      employees: "30,000+",
      revenue: "$10B+",
      founded: "1953",
      acquired: "2016",
      logo: "/placeholder.svg?height=60&width=120",
      highlights: ["Aerospace Components", "Industrial Products", "Global Operations"],
    },
    {
      name: "See's Candies",
      category: "Consumer",
      description: "Premium chocolate and candy manufacturer",
      employees: "4,000+",
      revenue: "$400M+",
      founded: "1921",
      acquired: "1972",
      logo: "/placeholder.svg?height=60&width=120",
      highlights: ["Premium Brand", "Holiday Traditions", "West Coast Focus"],
    },
    {
      name: "Dairy Queen",
      category: "Food Service",
      description: "International fast food chain specializing in soft serve",
      employees: "10,000+",
      revenue: "$4B+",
      founded: "1940",
      acquired: "1998",
      logo: "/placeholder.svg?height=60&width=120",
      highlights: ["7,000+ Locations", "Global Franchise", "Iconic Brand"],
    },
  ]

  const categories = ["All", "Insurance", "Transportation", "Energy", "Aerospace", "Consumer", "Food Service"]

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
          <Badge variant="outline">Operating Companies</Badge>
          <Badge variant="secondary">60+ Subsidiaries</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Our Operating Companies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Berkshire Hathaway owns a diverse portfolio of businesses across multiple industries, each operating with
          autonomy while benefiting from our long-term approach and financial strength.
        </p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">60+</div>
                <p className="text-sm text-muted-foreground">Operating Companies</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">390K+</div>
                <p className="text-sm text-muted-foreground">Total Employees</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">$300B+</div>
                <p className="text-sm text-muted-foreground">Annual Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">15+</div>
                <p className="text-sm text-muted-foreground">Industries</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search companies..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Companies Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {subsidiaries.map((company, index) => (
          <Card key={index} className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={60}
                    height={40}
                    className="rounded border"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="group-hover:text-primary transition-colors">{company.name}</CardTitle>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Badge variant="secondary">{company.category}</Badge>
                  </div>
                </div>
              </div>
              <CardDescription className="mt-2">{company.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Employees:</span>
                    <div className="font-medium">{company.employees}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Revenue:</span>
                    <div className="font-medium">{company.revenue}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Founded:</span>
                    <div className="font-medium">{company.founded}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Acquired:</span>
                    <div className="font-medium">{company.acquired}</div>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium mb-2">Key Highlights:</p>
                  <div className="flex flex-wrap gap-1">
                    {company.highlights.map((highlight, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Investment Philosophy */}
      <div className="mt-12">
        <Card className="bg-primary/5">
          <CardHeader>
            <CardTitle>Our Acquisition Philosophy</CardTitle>
            <CardDescription>What we look for when evaluating potential acquisitions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-semibold">Strong Economics</h3>
                <p className="text-sm text-muted-foreground">
                  Businesses with durable competitive advantages and consistent profitability
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Excellent Management</h3>
                <p className="text-sm text-muted-foreground">
                  Leaders who think like owners and have proven track records
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Understandable Business</h3>
                <p className="text-sm text-muted-foreground">
                  Companies with clear business models and predictable cash flows
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Complete List */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Complete Subsidiary List</CardTitle>
            <CardDescription>View our comprehensive directory of all operating companies</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full">
              View Complete Directory
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
