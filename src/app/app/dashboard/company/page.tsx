"use client";

import { ManagementDashboard } from "./components/ManagementDashboard";


export default function CompanyPage() {
  // const [isSubscribed] = useState(false);
  // const [showPaywall, setShowPaywall] = useState(true);

  // if (!isSubscribed && showPaywall) {
  //   return (
  //     <div className="relative">
  //       <div className="filter blur-sm pointer-events-none">
  //         <CompanyContent />
  //       </div>
  //       <div className="absolute inset-0 flex items-center justify-center bg-black/5">
  //         <Card className="w-full max-w-md mx-4 relative">
  //           <Button
  //             variant="ghost"
  //             size="icon"
  //             className="absolute right-2 top-2"
  //             onClick={() => setShowPaywall(false)}
  //           >
  //             <X className="h-4 w-4" />
  //           </Button>
  //           <CardHeader className="text-center">
  //             <CardTitle className="text-2xl font-bold">
  //               Subscribe to Manage Company Details
  //             </CardTitle>
  //             <CardDescription>
  //               Update and manage your company information
  //             </CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //             <Button className="w-full" size="lg">
  //               Subscribe Now
  //             </Button>
  //           </CardContent>
  //         </Card>
  //       </div>
  //     </div>
  //   );
  // }

  return <ManagementDashboard />;
  
}