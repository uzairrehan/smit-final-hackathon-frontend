import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EducationLoansPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-950 text-white">
      <Card className="w-full max-w-2xl border-none bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Education Loans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Subcategories:</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>University Fees</li>
                <li>Child Fees Loan</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Maximum Loan:</h3>
              <p className="text-gray-400">Based on requirement</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Loan Period:</h3>
              <p className="text-gray-400">4 years</p>
            </div>
            <div className="text-center mt-4">
              <Link href="/apply">
                <Button className="px-6 py-2 text-teal-400 border-teal-400 hover:bg-teal-400 hover:text-gray-900">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
