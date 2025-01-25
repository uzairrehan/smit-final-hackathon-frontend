// pages/loans.tsx
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Loans = () => {
  const loanCategories = [
    {
      title: "Wedding Loans",
      description: "For Valima, Furniture, Jahez, and more.",
      maxLoan: "PKR 5 Lakh",
      loanPeriod: "3 years",
      link: "/loans/wedding",
    },
    {
      title: "Home Construction Loans",
      description: "Support for Structure, Finishing, and more.",
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
      link: "/loans/construction",
    },
    {
      title: "Business Startup Loans",
      description: "Buy stalls, shop assets, or machinery.",
      maxLoan: "PKR 10 Lakh",
      loanPeriod: "5 years",
      link: "/loans/business",
    },
    {
      title: "Education Loans",
      description: "Support for university or child fees.",
      maxLoan: "Based on requirement",
      loanPeriod: "4 years",
      link: "/loans/education",
    },
  ];

  return (
    <>
      <main className="mt-16">
        {/* Header Section */}
        <section className="bg-teal-50 text-center py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-teal-600 mb-4">Loan Categories</h1>
            <p className="text-lg text-gray-700">
              Discover the interest-free loan options tailored for your needs.
            </p>
          </div>
        </section>

        {/* Loan Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanCategories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <CardTitle className="text-xl text-teal-600">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                    <div className="mt-4 text-gray-500">
                      <p><strong>Max Loan:</strong> {category.maxLoan}</p>
                      <p><strong>Loan Period:</strong> {category.loanPeriod}</p>
                    </div>
                    <Link href={category.link}>
                      <Button
                        variant="outline"
                        className="mt-4 w-full text-teal-600"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Loans;
