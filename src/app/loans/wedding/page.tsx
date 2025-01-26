import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WeddingLoansPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-950">
      <Card className="w-full max-w-2xl border border-gray-800 bg-gray-800 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-white">
            Wedding Loans
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-teal-400">Subcategories:</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Valima</li>
                <li>Furniture</li>
                <li>Valima Food</li>
                <li>Jahez</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-400">Maximum Loan:</h3>
              <p className="text-gray-400">PKR 5 Lakh</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-teal-400">Loan Period:</h3>
              <p className="text-gray-400">3 years</p>
            </div>
            <div className="text-center mt-6">
              <Link href="/calculator">
                <Button className="px-6 py-2 ">
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
