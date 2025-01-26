"use client"; 
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoanCards from "@/components/Cards";

const Home = () => {
  return (
    <>
    
    <section className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 px-10">
      <div className="container mx-auto text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Manage Your Finances with Ease
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Explore loan options and calculate your loan repayments in minutes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link  href={"/loans"}>
          <Button className="font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Explore Loan Options
          </Button>
          </Link>
          <Link href={"/calculator"}>

          <Button className="bg-transparent border-2 font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
            Calculate Loan
          </Button>
          </Link>
        </div>
      </div>
    <LoanCards/>
    </section>
    </>
  );
};

export default Home;
