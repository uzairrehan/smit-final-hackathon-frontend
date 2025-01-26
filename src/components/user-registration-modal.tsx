"use client"


import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { z } from "zod";
import { useRouter } from "next/navigation";
import useLoanStore from "@/store/loanStore.js";

interface UserRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define the Zod schema for form validation
const userRegistrationSchema = z.object({
  cnic: z
    .string()
    .min(13, "CNIC must be exactly 13 digits")
    .max(13, "CNIC must be exactly 13 digits"),
  email: z.string().email("Invalid email address"),
  name: z.string().min(2, "Name must be at least 2 characters long"),
});

export function UserRegistrationModal({
  isOpen,
  onClose,
}: UserRegistrationModalProps) {
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();
  const loan = useLoanStore((state) => state.Loan);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    // Validate form data
    const formData = { cnic, email, name };
    const validation = userRegistrationSchema.safeParse(formData);

    if (!validation.success) {
      setError(validation.error.errors[0].message);
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post(
        "https://smit-final-backend-uzair.vercel.app/auth/register",
        formData
      );
      console.log("register=>",response);
      if (!loan) {
        setError("please firstly make your loan");
        return;
      }
      const loanData = await axios.post(
        "https://smit-final-backend-uzair.vercel.app/loans/addloans",
        loan
      );

      console.log("loandata=>", loanData);

      router.push("/auth/login");
      setSuccessMessage(response.data.message || "Registration successful!");
      onClose();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message || "An error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Registration</DialogTitle>
          <DialogDescription>
            Please provide your information to proceed with the loan
            application.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {error && <p className="text-red-500">{error}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
            <div className="space-y-2">
              <Label htmlFor="cnic">CNIC</Label>
              <Input
                id="cnic"
                value={cnic}
                onChange={(e) => setCnic(e.target.value)}
                required
                maxLength={13}
                placeholder="Enter your 13-digit CNIC"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your name"
              />
            </div>
          </div>
          <DialogFooter className="mt-6">
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
 