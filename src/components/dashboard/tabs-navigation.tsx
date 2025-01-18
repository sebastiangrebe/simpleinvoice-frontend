import { TabsList, TabsTrigger } from "@/components/ui/tabs"

const TabLink = ({ href, name }: { href: string; name: string }) => {
  return (
    <TabsTrigger value={href}>{name}</TabsTrigger>
  )
}

export const TabsNavigation = () => {
  return (
    <TabsList>
      <TabLink href="/app/dashboard" name="Overview" />
      <TabLink href="/app/analytics" name="Analytics" />
      <TabLink href="/app/reports" name="Reports"/>
      <TabLink href="/app/notifications" name="Notifications" />
    </TabsList>
  )
}