const navigation = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQs", href: "/#faqs" },
  ],
  company: [
    { name: "About Us", href: "/#about" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/legal/privacy" },
    { name: "Terms of Service", href: "/legal/tos" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-[#1a202c]">
      <div className="container py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="lg:w-1/3">
          <div className='flex '>
        <div className='w-10'><svg viewBox="0 0 1024 1024" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M512 71.7L135.84 259.78V424.8c0 206.25 116.53 394.8 301 487.04L512 949.41l75.16-37.58c184.48-92.24 301-280.79 301-487.04V259.78L512 71.7z m303.02 353.09c0 94.82-27.81 184.59-77.69 260.04l-53.44-53.44c29.67-37.42 47.39-84.74 47.39-136.21 0-121.19-98.24-219.43-219.43-219.43S292.42 374 292.42 495.19s98.24 219.43 219.43 219.43c43.29 0 83.65-12.54 117.65-34.18l62.48 62.48c-38.32 41.8-84.63 77.05-137.53 103.5L512 867.63l-42.45-21.23c-160.73-80.36-260.57-241.92-260.57-421.61V304.98L512 153.47l303.02 151.51v119.81zM511.85 641.48c-80.66 0-146.29-65.62-146.29-146.29S431.19 348.9 511.85 348.9s146.29 65.62 146.29 146.29-65.63 146.29-146.29 146.29z" fill="#ffffff"></path></g></svg></div>
        <span className='mt-1 ml-2 text-2xl font-bold text-[#0191ea]'>ClearInvoice</span>
      </div>
            <p className="mt-4 ml-4 text-slate-300">
              Simplifying invoicing for freelancers and small businesses. Get paid faster with clear, customizable invoices and automated payment tracking.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-white">Product</h3>
              <ul className="mt-4 space-y-2">
                {navigation.product.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-300 hover:text-foreground">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-300 hover:text-foreground">{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-slate-300 hover:text-foreground">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t pt-8 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Clear:Invoice. All rights reserved. Transforming the way freelancers manage invoices and payments.
          </p>
        </div>
      </div>
    </footer>
  );
}
