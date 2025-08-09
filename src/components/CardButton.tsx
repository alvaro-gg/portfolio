import Link from "next/link";
import { type LucideIcon } from "lucide-react";

type CardButtonProps = {
  readonly href: string;
  readonly label: string;
  readonly Icon: LucideIcon;
  readonly className?: string;
};

export default function CardButton({
  href,
  label,
  Icon,
  className,
}: CardButtonProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={[
        "flex flex-col items-center gap-2",
        "p-6 rounded-xl border border-black/10 shadow-sm",
        "bg-dark text-light",
        "transition-all duration-300 cursor-pointer",
        "hover:shadow-lg hover:scale-105 active:scale-95",
        "hover:bg-primary hover:text-strong",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2",
        className ?? "",
      ].join(" ")}
    >
      <Icon className="w-12 h-12" />
      <span className="font-bold font-sans">{label}</span>
    </Link>
  );
}
