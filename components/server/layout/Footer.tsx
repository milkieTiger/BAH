const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/borneo.anthro.hub",
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/BorneoAnthroHub",
  },
  {
    label: "Telegram",
    href: "https://t.me/+air4VsJsNQFhN2Fl",
  },
];

export default function Footer() {
  return (
    <footer className="border-border text-muted-foreground flex flex-col gap-3 border-t px-4 py-4 text-center text-xs sm:flex-row sm:items-center sm:justify-between sm:text-left">
      <p>
        &copy; {new Date().getFullYear()} Borneo Anthro Hub. All rights
        reserved.
      </p>
      <div className="flex items-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <p>Kota Kinabalu, Sabah, Malaysia</p>
    </footer>
  );
}
