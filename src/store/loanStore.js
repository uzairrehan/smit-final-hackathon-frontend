import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useLoanStore = create(
  devtools(
    persist(
      (set) => ({
        loan: {},
        saveLoan: (loanr) => {
          set({ loan: loanr });
        },
        logoutLoan: () => {
          set({ Loan: {} });
        },
      }),
      {
        name: "loan-store",
      }
    )
  )
);

export default useLoanStore;

// const Loan = useLoanStore((state) => state.Loan);
// const saveLoan = useLoanStore((state) => state.saveLoan);
// const logoutLoan = useLoanStore((state) => state.logoutLoan);
