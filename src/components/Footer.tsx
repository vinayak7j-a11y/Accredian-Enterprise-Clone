import Container from "./ui/Container";
import { footerLinks } from "@/data/content";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.16 1.44-2.16 2.96V21h-4V9Z" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M22 5.9c-.74.33-1.53.55-2.36.65a4.13 4.13 0 0 0 1.8-2.28c-.8.47-1.68.82-2.62 1a4.1 4.1 0 0 0-7 3.74A11.65 11.65 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.27 5.47 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4.02c-.58.16-1.2.18-1.83.07a4.1 4.1 0 0 0 3.83 2.85A8.24 8.24 0 0 1 2 18.57a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68l-.01-.53c.8-.58 1.5-1.3 2.04-2.3Z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/60">
      <Container className="py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-bold text-white">
                Accredian
              </span>
              <span className="rounded-full bg-gold-500/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-gold-400">
                ENTERPRISE
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              India&apos;s most trusted enterprise learning platform, in
              partnership with IITs, IIMs, and global universities.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="LinkedIn" className="focus-ring rounded hover:text-white">
                <LinkedinIcon />
              </a>
              <a href="#" aria-label="Twitter" className="focus-ring rounded hover:text-white">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="YouTube" className="focus-ring rounded hover:text-white">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Programs" links={footerLinks.programs} />
          <FooterColumn title="Resources" links={footerLinks.resources} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Accredian Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="focus-ring rounded hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="focus-ring rounded hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="focus-ring rounded text-sm hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
