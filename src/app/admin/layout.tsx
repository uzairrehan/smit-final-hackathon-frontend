"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
      <aside className="hidden w-[200px] flex-col md:flex">
        <nav className="flex flex-col space-y-2">
          <Button variant="ghost" asChild>
            <Link href="/admin">Dashboard</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/admin/applications">Applications</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/admin/loans">Loans</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/admin/appointments">Appointments</Link>
          </Button>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  )
}

