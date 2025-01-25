import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const userStore = set({
  user: {},
  saveUser: (userr) => {
    set(() => ({
      user: userr,
    }));
  },
  logoutUser: () => {
    set(() => ({
      user: {},
    }));
  },
});

const useUserStore = create()(
  devtools(
    persist(userStore, {
      name: "user-store",
    })
  )
);

export default useUserStore;



// const user = useUserStore((state) => state.user);
// const saveUser = useUserStore((state) => state.saveUser);
// const logoutUser = useUserStore((state) => state.logoutUser);
