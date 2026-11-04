import SocialLink from '@/components/common/SocialLink';
import { socials } from '@/data/socials';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-vs-bg border-t border-vs-border p-4 z-40">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-screen-xl mx-auto gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm">
          <span>Find me in:</span>
          <div className="flex gap-4">
            {socials.map((social) => (
              <SocialLink
                key={social.trackingName}
                label={social.label}
                url={social.url}
                trackingName={social.trackingName}
              />
            ))}
          </div>
        </div>
        <SocialLink
          label="@nikhilpatil"
          url="https://www.linkedin.com/in/nikhilpatil8217"
          className="text-sm"
        />
      </div>
    </footer>
  );
}
