import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Shield, Users, FileText, Award, Calendar, Download, ExternalLink } from "lucide-react"

export default function GovernancePage() {
  const boardMembers = [
    {
      name: "Warren E. Buffett",
      role: "Chairman & CEO",
      tenure: "Since 1970",
      committees: ["Executive"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Gregory E. Abel",
      role: "Vice Chairman",
      tenure: "Since 2018",
      committees: ["Executive"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ajit Jain",
      role: "Vice Chairman",
      tenure: "Since 2018",
      committees: ["Risk"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Susan T. Buffett",
      role: "Director",
      tenure: "Since 2006",
      committees: ["Governance"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Howard G. Buffett",
      role: "Director",
      tenure: "Since 1993",
      committees: ["Audit"],
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ronald L. Olson",
      role: "Independent Director",
      tenure: "Since 1997",
      committees: ["Compensation", "Governance"],
      image: "/placeholder.svg?height=80&width=80",
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
          <Badge variant="outline">Corporate Governance</Badge>
          <Badge variant="secondary">Updated 2024</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Corporate Governance</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our governance framework ensures accountability, transparency, and ethical leadership while protecting
          shareholder interests and maintaining our long-term focus.
        </p>
      </div>

      {/* Governance Metrics */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">14</div>
                <p className="text-sm text-muted-foreground">Board Members</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">86%</div>
                <p className="text-sm text-muted-foreground">Independent Directors</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">4</div>
                <p className="text-sm text-muted-foreground">Board Meetings/Year</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <div>
                <div className="text-2xl font-bold">58</div>
                <p className="text-sm text-muted-foreground">Years of Leadership</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="board" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="board">Board of Directors</TabsTrigger>
          <TabsTrigger value="committees">Committees</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="board" className="space-y-8">
          {/* Board Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Board Composition & Leadership</CardTitle>
              <CardDescription>
                Our board combines deep business experience with independent oversight to guide long-term strategy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">14</div>
                  <div className="text-sm text-muted-foreground">Total Directors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">12</div>
                  <div className="text-sm text-muted-foreground">Independent Directors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15.2</div>
                  <div className="text-sm text-muted-foreground">Average Tenure (Years)</div>
                </div>
              </div>
              <Separator className="my-6" />
              <div className="space-y-4">
                <h3 className="font-semibold">Board Diversity & Skills</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium mb-2">Key Skills & Experience</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Financial services and insurance</li>
                      <li>• Manufacturing and operations</li>
                      <li>• Technology and innovation</li>
                      <li>• Risk management</li>
                      <li>• International business</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Diversity Metrics</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 29% Women Directors</li>
                      <li>• 21% Minority Directors</li>
                      <li>• Age Range: 52-93</li>
                      <li>• Geographic Diversity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Board Members */}
          <Card>
            <CardHeader>
              <CardTitle>Board Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {boardMembers.map((member, index) => (
                  <div key={index} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-medium">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="font-medium">Tenure:</span> {member.tenure}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Committees:</span> {member.committees.join(", ")}
                      </p>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Biography
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="committees" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Audit Committee</CardTitle>
                <CardDescription>Oversees financial reporting and internal controls</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Key Responsibilities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Financial statement oversight</li>
                    <li>• External auditor management</li>
                    <li>• Internal control assessment</li>
                    <li>• Risk management oversight</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Committee Members</h4>
                  <p className="text-sm text-muted-foreground">4 Independent Directors</p>
                </div>
                <Button variant="outline" size="sm">
                  View Charter
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compensation Committee</CardTitle>
                <CardDescription>Determines executive compensation and incentives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Key Responsibilities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Executive compensation design</li>
                    <li>• Performance evaluation</li>
                    <li>• Incentive plan oversight</li>
                    <li>• Succession planning</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Committee Members</h4>
                  <p className="text-sm text-muted-foreground">3 Independent Directors</p>
                </div>
                <Button variant="outline" size="sm">
                  View Charter
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governance Committee</CardTitle>
                <CardDescription>Ensures effective governance practices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Key Responsibilities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Board composition and recruitment</li>
                    <li>• Governance policy development</li>
                    <li>• Director education and evaluation</li>
                    <li>• ESG oversight</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Committee Members</h4>
                  <p className="text-sm text-muted-foreground">3 Independent Directors</p>
                </div>
                <Button variant="outline" size="sm">
                  View Charter
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk Committee</CardTitle>
                <CardDescription>Oversees enterprise risk management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Key Responsibilities</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Risk appetite and tolerance</li>
                    <li>• Risk management framework</li>
                    <li>• Cybersecurity oversight</li>
                    <li>• Climate risk assessment</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Committee Members</h4>
                  <p className="text-sm text-muted-foreground">4 Independent Directors</p>
                </div>
                <Button variant="outline" size="sm">
                  View Charter
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="policies" className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Code of Business Conduct</CardTitle>
                <CardDescription>Ethical standards for all employees and directors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Core Principles</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Integrity and honesty</li>
                    <li>• Compliance with laws</li>
                    <li>• Conflicts of interest</li>
                    <li>• Confidentiality</li>
                    <li>• Fair dealing</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Code
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Insider Trading Policy</CardTitle>
                <CardDescription>Guidelines for trading in company securities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Key Provisions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Trading windows and blackout periods</li>
                    <li>• Pre-clearance requirements</li>
                    <li>• Material information guidelines</li>
                    <li>• Reporting obligations</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Policy
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Whistleblower Policy</CardTitle>
                <CardDescription>Safe reporting of concerns and violations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Reporting Channels</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anonymous hotline</li>
                    <li>• Online reporting portal</li>
                    <li>• Direct supervisor reporting</li>
                    <li>• Legal department contact</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Report Concern
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Related Party Transactions</CardTitle>
                <CardDescription>Policy for managing potential conflicts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Review Process</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Disclosure requirements</li>
                    <li>• Independent review</li>
                    <li>• Approval thresholds</li>
                    <li>• Ongoing monitoring</li>
                  </ul>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Download Policy
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documents" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Governance Documents</CardTitle>
              <CardDescription>Access key governance documents and filings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Corporate Bylaws",
                    description: "Company bylaws and amendments",
                    date: "Updated March 2024",
                  },
                  {
                    title: "Certificate of Incorporation",
                    description: "Articles of incorporation",
                    date: "Filed 1955",
                  },
                  { title: "Board Committee Charters", description: "All committee charters", date: "Updated 2024" },
                  { title: "Proxy Statement", description: "Annual proxy statement", date: "April 2024" },
                  {
                    title: "Corporate Governance Guidelines",
                    description: "Board governance principles",
                    date: "Updated 2024",
                  },
                  {
                    title: "Director Independence Standards",
                    description: "Independence criteria",
                    date: "Updated 2023",
                  },
                ].map((doc, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <h4 className="font-medium">{doc.title}</h4>
                        <p className="text-sm text-muted-foreground">{doc.description}</p>
                        <p className="text-xs text-muted-foreground">{doc.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEC Filings</CardTitle>
              <CardDescription>Recent regulatory filings and reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { form: "DEF 14A", title: "Proxy Statement", date: "April 12, 2024" },
                  { form: "10-K", title: "Annual Report", date: "March 15, 2024" },
                  { form: "8-K", title: "Current Report", date: "February 24, 2024" },
                  { form: "10-Q", title: "Quarterly Report", date: "November 4, 2023" },
                ].map((filing, i) => (
                  <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline">{filing.form}</Badge>
                      <div>
                        <div className="font-medium">{filing.title}</div>
                        <div className="text-sm text-muted-foreground">{filing.date}</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All SEC Filings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
