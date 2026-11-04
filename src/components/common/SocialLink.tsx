import type { AnchorHTMLAttributes } from 'react';

interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  url: string;
  trackingName?: string;
}

export default function SocialLink({
  label,
  url,
  trackingName,
  className,
  ...props
}: SocialLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`hover:text-vs-accent transition-colors duration-200 ${className ?? ''}`}
      data-track={trackingName}
      {...props}
    >
      {label}
    </a>
  );
}
