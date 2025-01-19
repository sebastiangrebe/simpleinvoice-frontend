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
    <footer className="border-t bg-[#1a202c] w-full">
      <div className="container py-16 md:mx-[5%]">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="lg:w-1/3">
          <div className='flex align-center'>
              <img src="/icon.svg" alt="logo" className="w-8 h-8 mr-2" />
              <span className='ml-2 text-2xl font-bold text-white'>WhatsBill</span>
          </div>
            <p className="mt-4 text-slate-300">
              Simplifying invoicing for freelancers and small businesses. Get paid faster with clear, customizable invoices.
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
            Made with ☕️ and 🥞 by <a href="https://sebastian-grebe.com" target="_blank">Seb</a><br/>
            © {new Date().getFullYear()} WhatsBill. All rights reserved. Transforming the way freelancers manage invoices and payments.
          </p>
        </div>
      </div>
    </footer>
  );
}
