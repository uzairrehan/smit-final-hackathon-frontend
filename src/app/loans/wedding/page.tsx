import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function WeddingLoansPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Wedding Loans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Subcategories:</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Valima</li>
                <li>Furniture</li>
                <li>Valima Food</li>
                <li>Jahez</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Maximum Loan:</h3>
              <p className="text-gray-700">PKR 5 Lakh</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Loan Period:</h3>
              <p className="text-gray-700">3 years</p>
            </div>
            <div className="text-center mt-4">
              <Link href="/apply">
                <Button className="px-6 py-2">
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