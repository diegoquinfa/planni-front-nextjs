import { create } from 'zustand'

export const usePackageStore = create((set) => ({
  packages: [],
  loading: false,
  setPackages: (packages) => set({ packages }),
  setLoading: (state) => set({ loading: state })
}))
