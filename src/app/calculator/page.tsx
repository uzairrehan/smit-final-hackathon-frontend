/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserRegistrationModal } from "@/components/user-registration-modal";
import useLoanStore from "@/store/loanStore.js";

const loanCategories = [
  { value: "wedding", label: "Wedding Loans" },
  { value: "home", label: "Home Construction Loans" },
  { value: "business", label: "Business Startup Loans" },
  { value: "education", label: "Education Loans" },
];

const subcategories = {
  wedding: ["Valima", "Furniture", "Valima Food", "Jahez"],
  home: ["Structure", "Finishing", "Loan"],
  business: [
    "Buy Stall",
    "Advance Rent for Shop",
    "Shop Assets",
    "Shop Machinery",
  ],
  education: ["University Fees", "Child Fees Loan"],
};

const maxLoanAmounts: Record<string, number | string> = {
  wedding: 500000,
  home: 1000000,
  business: 1000000,
  education: "Based on requirement",
};

export default function LoanCalculator() {
  const [category, setCategory] = useState<keyof typeof subcategories | "">("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [initialDeposit, setInitialDeposit] = useState<number | string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [loanPeriod, setLoanPeriod] = useState<number | string>("");
  const [monthlyInstallment, setMonthlyInstallment] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const saveLoan = useLoanStore((state) => state.saveLoan);

  const calculateLoan = () => {
    if (amount && initialDeposit && loanPeriod) {
      const maxLoan =
        typeof maxLoanAmounts[category] === "number"
          ? (maxLoanAmounts[category] as number)
          : 0;
      console.log(maxLoan);

      const principal = (amount as number) - (initialDeposit as number);
      const monthlyPayment = principal / ((loanPeriod as number) * 12);
      setMonthlyInstallment(monthlyPayment);
    } else {
      alert("Please fill in all fields to calculate the loan.");
    }
  };

  const handleLoanSubmit = async () => {
    if (
      !category ||
      !subcategory ||
      !amount ||
      !initialDeposit ||
      !loanPeriod
    ) {
      alert("Please complete all fields before proceeding.");
      return;
    }

    try {
      const data = {
        userId: "12345", // Replace with dynamic user ID
        category,
        subcategory,
        maxLoanAmount: amount,
        depositAmount: initialDeposit,
        repaymentPeriod: loanPeriod,
      };
      saveLoan(data);
      // const response = await axios.post("/api/addloan", );

      alert("Loan saved so zustand!");
      setIsModalOpen(true); // Example: Open modal after submission
    } catch (error) {
      console.log(error);

      alert("Error submitting loan request. Please try again.");
    }
  };

  return (
    <>
      <Card className="dark p-10 border-none shadow-none">
        <CardHeader>
          <CardTitle>Loan Calculator</CardTitle>
          <CardDescription>
            Calculate your estimated loan breakdown
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Loan Category</Label>
            <Select
              value={category}
              onValueChange={(value) =>
                setCategory(value as keyof typeof subcategories)
              }
            >
              <SelectTrigger id="category">
                <SelectValue placeholder="Select loan category" />
              </SelectTrigger>
              <SelectContent>
                {loanCategories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {category && (
            <>
              <div className="space-y-2">
                <Label htmlFor="subcategory">Loan Subcategory</Label>
                <Select value={subcategory} onValueChange={setSubcategory}>
                  <SelectTrigger id="subcategory">
                    <SelectValue placeholder="Select loan subcategory" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategories[category]?.map((sub: any) => (
                      <SelectItem key={sub} value={sub}>
                        {sub}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="initial-deposit">Initial Deposit (PKR)</Label>
                <Input
                  id="initial-deposit"
                  type="number"
                  value={initialDeposit}
                  onChange={(e) => setInitialDeposit(Number(e.target.value))}
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Loan Amount (PKR)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="loan-period">Loan Period (Years)</Label>
                <Input
                  id="loan-period"
                  type="number"
                  value={loanPeriod}
                  onChange={(e) => setLoanPeriod(Number(e.target.value))}
                  className="dark:bg-gray-800 dark:text-white dark:border-gray-700"
                />
              </div>
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-between dark">
          <Button
            onClick={calculateLoan}
            className="dark:bg-gray-600 dark:text-white hover:bg-gray-700 transition-colors"
          >
            Calculate
          </Button>
          <Button
            onClick={handleLoanSubmit}
            className="dark:bg-gray-600 dark:text-white hover:bg-gray-700 transition-colors"
          >
            Proceed
          </Button>
        </CardFooter>
      </Card>

      {monthlyInstallment > 0 && (
        <Card className="dark border-none shadow-none">
          <CardHeader>
            <CardTitle>Loan Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Loan Amount: PKR {amount}</p>
            <p>Monthly Installment: PKR {monthlyInstallment.toFixed(2)}</p>
            <p>Loan Period: {loanPeriod} years</p>
            <p>Loan Subcategory: {subcategory}</p>
          </CardContent>
        </Card>
      )}
      <UserRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
