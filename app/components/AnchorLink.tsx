'use client';

type AnchorLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function AnchorLink({ href, children, className, onClick }: AnchorLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
