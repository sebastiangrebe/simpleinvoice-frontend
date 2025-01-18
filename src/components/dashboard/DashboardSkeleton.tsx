import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}

export function SkeletonSectionBig() {
  return (
    <div className="flex flex-col space-y-3 w-8/12">
      <Skeleton className="h-[300px] rounded-xl" />
    </div>
  )
}

export function SkeletonSectionSmall() {
  return (
    <div className="flex flex-col space-y-3 w-4/12">
      <Skeleton className="h-[300px] rounded-xl" />
    </div>
  )
}

export default function DashboardSkeleton() {
  return (
    <>
      <div className="w-full flex-1 space-y-4 p-8 pt-6">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
          <Skeleton className="h-12 w-12 rounded-full" />
        </div>
        <div className="flex items-center justify-between space-y-2">
          <Skeleton className="h-8 w-[150px]" />
          <div className="flex items-center space-x-2">
            <Skeleton className="h-8 w-[300px]" />
            <Skeleton className="h-8 w-[150px]" />
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <div className="flex gap-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
            <div className="flex gap-4">
              <SkeletonSectionBig />
              <SkeletonSectionSmall />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}