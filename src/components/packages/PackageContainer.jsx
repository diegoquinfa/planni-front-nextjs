'use client'
import { usePackageStore } from '@/store/usePackageStore'
import { PackageCard } from './PackageCard'

export const PackageContainer = () => {
  const packages = usePackageStore((state) => state.packages)
  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {packages.length > 0 ? (
        packages.map((pack, i) => <PackageCard details={pack} key={i} />)
      ) : (
        <p>Loading</p>
      )}
    </div>
  )
}
