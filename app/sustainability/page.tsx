import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Leaf, Users, Shield, Target, Zap, Recycle, Heart, Award } from "lucide-react"

export default function SustainabilityPage() {
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
          <Badge variant="outline">ESG</Badge>
          <Badge variant="secondary">Sustainability Report 2024</Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">Sustainability & ESG</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Our commitment to environmental stewardship, social responsibility, and governance excellence drives long-term
          value creation for all stakeholders.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <div>
                <div className="text-2xl font-bold">25%</div>
                <p className="text-sm text-muted-foreground">Renewable Energy</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">390K+</div>
                <p className="text-sm text-muted-foreground">Employees Worldwide</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">100%</div>
                <p className="text-sm text-muted-foreground">Board Independence</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-600" />
              <div>
                <div className="text-2xl font-bold">2030</div>
                <p className="text-sm text-muted-foreground">Carbon Neutral Goal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="environmental">Environmental</TabsTrigger>
          <TabsTrigger value="social">Social</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* ESG Framework */}
          <Card>
            <CardHeader>
              <CardTitle>Our ESG Framework</CardTitle>
              <CardDescription>
                Berkshire Hathaway's approach to sustainable business practices across our portfolio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold">Environmental</h3>
                  <p className="text-sm text-muted-foreground">
                    Climate action, renewable energy, and resource efficiency across our operations
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Social</h3>
                  <p className="text-sm text-muted-foreground">
                    Employee wellbeing, community investment, and stakeholder engagement
                  </p>
                </div>
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold">Governance</h3>
                  <p className="text-sm text-muted-foreground">
                    Ethical leadership, transparency, and accountability in all business practices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Highlights */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>2024 Sustainability Highlights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Renewable Energy Adoption</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Carbon Emission Reduction</span>
                    <span>18%</span>
                  </div>
                  <Progress value={18} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Waste Reduction</span>
                    <span>32%</span>
                  </div>
                  <Progress value={32} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Employee Satisfaction</span>
                    <span>87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Initiatives</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Clean Energy Transition",
                    description: "Investing in renewable energy infrastructure",
                  },
                  { icon: Recycle, title: "Circular Economy", description: "Reducing waste and promoting recycling" },
                  { icon: Heart, title: "Community Impact", description: "Supporting local communities and education" },
                  { icon: Award, title: "Ethical Standards", description: "Maintaining highest governance standards" },
                ].map((initiative, i) => (
                  <div key={i} className="flex gap-3">
                    <initiative.icon className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">{initiative.title}</h4>
                      <p className="text-sm text-muted-foreground">{initiative.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="environmental" className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Climate Action</CardTitle>
                <CardDescription>Our commitment to reducing environmental impact</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Carbon Neutrality Goals</h4>
                  <p className="text-sm text-muted-foreground">
                    Committed to achieving carbon neutrality across our operations by 2030, with interim targets for
                    2025.
                  </p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">2030</div>
                    <div className="text-sm text-muted-foreground">Carbon Neutral Target</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Renewable Energy</h4>
                  <p className="text-sm text-muted-foreground">
                    Berkshire Hathaway Energy leads in renewable energy development with significant wind and solar
                    investments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Environmental Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  width={400}
                  height={300}
                  alt="Environmental Performance Chart"
                  className="rounded-lg w-full"
                />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Subsidiary Environmental Initiatives</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    company: "BNSF Railway",
                    initiative: "Fuel Efficiency Program",
                    impact: "15% reduction in fuel consumption",
                  },
                  { company: "BH Energy", initiative: "Wind & Solar Expansion", impact: "5,000 MW renewable capacity" },
                  { company: "GEICO", initiative: "Paperless Operations", impact: "90% digital document processing" },
                  {
                    company: "Precision Castparts",
                    initiative: "Waste Reduction",
                    impact: "40% manufacturing waste reduction",
                  },
                  {
                    company: "See's Candies",
                    initiative: "Sustainable Packaging",
                    impact: "100% recyclable packaging by 2025",
                  },
                  {
                    company: "Dairy Queen",
                    initiative: "Energy Efficiency",
                    impact: "LED lighting in all corporate stores",
                  },
                ].map((item, i) => (
                  <div key={i} className="p-4 border rounded-lg">
                    <h4 className="font-medium">{item.company}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.initiative}</p>
                    <p className="text-sm font-medium text-green-600 mt-2">{item.impact}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Employee Wellbeing</CardTitle>
                <CardDescription>Supporting our 390,000+ employees worldwide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold">87%</div>
                    <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold">42%</div>
                    <div className="text-sm text-muted-foreground">Women in Workforce</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Key Programs</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Comprehensive health and wellness benefits</li>
                    <li>• Professional development and training</li>
                    <li>• Diversity and inclusion initiatives</li>
                    <li>• Work-life balance programs</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Community Investment</CardTitle>
                <CardDescription>Supporting communities where we operate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold">$150M+</div>
                  <div className="text-sm text-muted-foreground">Annual Community Investment</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Focus Areas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Education and scholarship programs</li>
                    <li>• Healthcare and medical research</li>
                    <li>• Disaster relief and emergency response</li>
                    <li>• Local economic development</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Diversity & Inclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">42%</div>
                  <div className="text-sm text-muted-foreground">Women Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">35%</div>
                  <div className="text-sm text-muted-foreground">Minority Representation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">28%</div>
                  <div className="text-sm text-muted-foreground">Women in Leadership</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance" className="space-y-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Board Composition</CardTitle>
                <CardDescription>Independent oversight and diverse perspectives</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold">14</div>
                    <div className="text-sm text-muted-foreground">Board Members</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold">86%</div>
                    <div className="text-sm text-muted-foreground">Independent Directors</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Board Committees</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Audit Committee</li>
                    <li>• Compensation Committee</li>
                    <li>• Governance Committee</li>
                    <li>• Risk Committee</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Ethics & Compliance</CardTitle>
                <CardDescription>Maintaining the highest standards of integrity</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Code of Conduct</h4>
                  <p className="text-sm text-muted-foreground">
                    All employees must adhere to our comprehensive code of business conduct and ethics.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Compliance Programs</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Anti-corruption policies</li>
                    <li>• Whistleblower protection</li>
                    <li>• Regular compliance training</li>
                    <li>• Third-party due diligence</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-medium">Enterprise Risk Framework</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive approach to identifying, assessing, and managing risks across all business units.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Key Risk Areas</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Financial and market risks</li>
                    <li>• Operational and cyber risks</li>
                    <li>• Climate and environmental risks</li>
                    <li>• Regulatory and compliance risks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Download Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Sustainability Reports & Resources</CardTitle>
          <CardDescription>Access our comprehensive ESG reporting and documentation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <div className="font-medium">2024 Sustainability Report</div>
              <div className="text-sm text-muted-foreground">Complete ESG performance review</div>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <div className="font-medium">Climate Action Plan</div>
              <div className="text-sm text-muted-foreground">Our roadmap to carbon neutrality</div>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col items-start">
              <div className="font-medium">Diversity Report</div>
              <div className="text-sm text-muted-foreground">Inclusion metrics and initiatives</div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
