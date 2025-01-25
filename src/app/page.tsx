// pages/index.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
 
  return (
    <>
      <main className="mt-16">
        {/* Hero Section */}
        <section className="bg-teal-50 text-center py-16 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-teal-600 mb-4">
              Empowering Dreams with Qarze Hasana
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Apply for interest-free loans tailored for your needs.
            </p>
            <Link href="/loans">
              <Button size="lg" className="bg-teal-600 text-white hover:bg-teal-700">
                Explore Loan Options
              </Button>
            </Link>
          </div>
        </section>

       
      </main>
    </>
  );
}
