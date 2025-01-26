import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';

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

const LoanCards = () => {
  return (
    <div className="flex flex-wrap gap-4 p-4 justify-center">
      {loanCategories.map((loan, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full sm:w-[48%] lg:w-[23%]"
        >
          <div className="bg-gray-700 p-4">
            <h3 className="text-xl font-semibold">{loan.title}</h3>
          </div>
          <div className="p-4 flex-1">
            <p className="text-gray-400 text-sm mb-3">{loan.description}</p>
            <p className="text-xs text-gray-500 mb-1">
              <strong>Max Loan:</strong> {loan.maxLoan}
            </p>
            <p className="text-xs text-gray-500 mb-3">
              <strong>Loan Period:</strong> {loan.loanPeriod}
            </p>
            <Button>
              <Link
                href={loan.link}
                className="inline-block px-4 py-2 text-sm rounded-md"
              >
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoanCards;
 