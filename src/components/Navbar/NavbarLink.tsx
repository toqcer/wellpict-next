import Link from "next/link";

interface Props {
  to: string;
  children?: React.ReactNode;
}

export default function NavbarLink({ to, children }: Props) {
  return (
    <Link href={to}>
      <li className="text-gray-500 text-label2 font-semibold">{children}</li>
    </Link>
  );
}
