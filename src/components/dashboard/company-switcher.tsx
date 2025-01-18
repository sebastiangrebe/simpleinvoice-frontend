import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/Button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "@/components/ui/command"
import apiClient from "@/services/apiClient"
import { useUser } from "@/hooks/useUser"
import { useRouter } from "next/navigation"

export default function CompanySwitcher() {
  const router = useRouter();
  const user = useUser();
  const [open, setOpen] = React.useState(false)
  const [showNewCompanyDialog, setShowNewCompanyDialog] = React.useState(false)
  const [selectedCompany, setSelectedCompany] = React.useState<any>(null);
  const [companies, setCompanies] = React.useState<any>([]);
  const [companyName, setCompanyName] = React.useState(""); // New state for company name

  React.useEffect(() => {
    (async () => {
      if (user) {
        const { data } = await apiClient.get('company')
        const activeCompany = data.find((company: any) => company._id === user?.companyId)
        setSelectedCompany(activeCompany)
        setCompanies(data);

        if (!data.length) {
          setShowNewCompanyDialog(true)
        }
      }
    })()
  }, [user]);

  const createCompany = async () => {
    const { data: companyData } = await apiClient.post('company', {
      name: companyName
    })
    await apiClient.post('auth/switch-company/'+companyData._id);
    router.push('/app/integrations');
  }

  const hasCompany = !!companies.length;

  return (
    <Dialog open={showNewCompanyDialog} onOpenChange={setShowNewCompanyDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a company"
            className="w-[200px] justify-between"
          >
            {selectedCompany ?
              <>
                <Avatar className="mr-2 h-5 w-5">
                  <AvatarImage
                    src={`https://avatar.vercel.sh/${selectedCompany._id}.png`}
                    className="grayscale"
                  />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                {selectedCompany.name}
                <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
              </>
            :
              <>
                Select a company
                <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
              </>
            }
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search company..." />
            <CommandList>
              <CommandEmpty>No team found.</CommandEmpty>
              <CommandGroup key="companies">
                {companies.map((company: any) => (
                  <CommandItem
                    key={company._id}
                    onSelect={() => {
                      selectedCompany(company)
                      setOpen(false)
                    }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${company._id}.png`}
                        alt={company.name}
                        className="grayscale"
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                    {company.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedCompany._id === company._id
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewCompanyDialog(true)
                    }}
                  >
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Create Company
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent
        showClose={false}
        onInteractOutside={
          (e: any) => {
            if (!hasCompany) {
              e.preventDefault();
            }
          }}
        >
        <DialogHeader>
          <DialogTitle>Create company</DialogTitle>
          <DialogDescription>
            Add a new company to manage integrations and billing.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Company name</Label>
              <Input id="name" placeholder="Acme Inc." value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </div>
          </div>
        </div>
        <DialogFooter>
          {!!companies.length && <Button variant="outline" onClick={() => setShowNewCompanyDialog(false)}>
            Cancel
          </Button>}
          <Button type="submit" onClick={createCompany}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}