import Link from "next/link"
import { Building2, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t py-12 md:py-16 lg:py-20 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Berkshire Hathaway</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              3555 Farnam Street
              <br />
              Omaha, NE 68131
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>(402) 346-1400</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@berkshirehathaway.com</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Investor Relations</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/message" className="text-muted-foreground hover:text-foreground">
                  Chairman's Message
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-muted-foreground hover:text-foreground">
                  Annual Reports
                </Link>
              </li>
              <li>
                <Link href="/letters" className="text-muted-foreground hover:text-foreground">
                  Shareholder Letters
                </Link>
              </li>
              <li>
                <Link href="/special-letters" className="text-muted-foreground hover:text-foreground">
                  Special Letters
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/subs" className="text-muted-foreground hover:text-foreground">
                  Subsidiaries
                </Link>
              </li>
              <li>
                <Link href="/govern" className="text-muted-foreground hover:text-foreground">
                  Governance
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-muted-foreground hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/meet01" className="text-muted-foreground hover:text-foreground">
                  Annual Meeting
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/owners" className="text-muted-foreground hover:text-foreground">
                  Owner's Manual
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  SEC Filings
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Stock Information
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Berkshire Hathaway Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Legal Disclaimer
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
