'use client'
import { usePackageStore } from '@/store/usePackageStore'
import { PackageCard } from './PackageCard'
import { PackageCardSkeleton } from '../skeletons/PackageCardSkeleton'

export const PackageContainer = () => {
  const packages = usePackageStore((state) => state.packages)
  const loading = usePackageStore((state) => state.loading)
  console.log('loading ->', loading)
  return (
    <>
      {packages.length > 0 && (
        <h2 className="flex h-full w-full self-start text-4xl font-bold">
          Paquetes
        </h2>
      )}
      <div className="mx-auto grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {packages.length > 0 &&
          packages.map((pack, i) => <PackageCard details={pack} key={i} />)}

        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <PackageCardSkeleton key={i} />
          ))}
      </div>
    </>
  )
}
