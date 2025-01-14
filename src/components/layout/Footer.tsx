
const navigation = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
  ],
  company: [
    { name: "Services", href: "/#services" },
  ],
  legal: [
    { name: "Privacy", href: "/legal/privacy" },
    { name: "Terms", href: "/legal/tos" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-[#0f172a]">
      <div className="container py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2">
              <img src="/icon.png" alt="MatureStack" className="h-10 w-10" />
              <span className="text-xl text-white font-bold">MatureStack</span>
            </div>
            <p className="mt-4 text-slate-300">
              Empowering businesses with innovative solutions for growth and success.
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
            © {new Date().getFullYear()} MatureStack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}