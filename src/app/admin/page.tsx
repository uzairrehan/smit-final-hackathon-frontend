"use client";
// React Admin Dashboard Component
import useSWR from "swr";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function AdminDashboard() {
  const { data: totalApplicationsData } = useSWR(
    "https://smit-final-backend-uzair.vercel.app/loans/applications/count",
    fetcher
  );
  const { data: pendingApprovalsData } = useSWR(
    "https://smit-final-backend-uzair.vercel.app/loans/applications/pending",
    fetcher
  );
  const { data: totalDisbursedData } = useSWR(
    "https://smit-final-backend-uzair.vercel.app/loans/applications/disbursed",
    fetcher
  );

  return (
    <>
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
        <main>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Total Applications</CardTitle>
                  <CardDescription>Number of loan applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {totalApplicationsData?.totalApplications || "Loading..."}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pending Approvals</CardTitle>
                  <CardDescription>
                    Applications awaiting review
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    {pendingApprovalsData?.pendingApplications || "Loading..."}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Total Loans Disbursed</CardTitle>
                  <CardDescription>Amount of loans given out</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">
                    PKR{" "}
                    {totalDisbursedData?.totalDisbursed?.toLocaleString() ||
                      "Loading..."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
