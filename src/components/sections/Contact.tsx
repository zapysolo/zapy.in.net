import { OWNER_EMAIL, OWNER_LOCATION } from '@/constants';

export default function Contact() {
  return (
    <section id="contact" className="w-full h-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-8" aria-labelledby="contact-heading">
      <div className="max-w-4xl w-full">
        <h2 id="contact-heading" className="sr-only">Contact</h2>
        <div className="space-y-6">
          <div>
            {/* <h3 className="text-3xl md:text-4xl font-mono text-white mb-2">_contact-me</h3> */}
            <p className="text-vs-accent text-lg md:text-xl font-mono">&gt; Let&apos;s work together!</p>
          </div>
          <div className="space-y-5 font-mono text-sm md:text-base">
            <div>
              <p className="text-gray-500 text-sm">// send me an email</p>
              <p>
                <span className="text-vs-purple">const</span>{' '}
                <span className="text-vs-blue">email</span> ={' '}
                <a href={`mailto:${OWNER_EMAIL}`} className="text-vs-green hover:underline break-all" data-track="email-click">&quot;{OWNER_EMAIL}&quot;</a>;
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">// based in</p>
              <p>
                <span className="text-vs-purple">const</span>{' '}
                <span className="text-vs-blue">location</span> ={' '}
                <span className="text-vs-green">&quot;{OWNER_LOCATION}&quot;</span>;
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">// connect on social</p>
              <p>
                <span className="text-vs-purple">const</span>{' '}
                <span className="text-vs-blue">socials</span> = {'{'}
                <a href="https://github.com/ZapySolo" target="_blank" rel="noopener noreferrer" className="text-vs-green hover:underline" data-track="github-link-click">github</a>
                ,
                <a href="https://www.linkedin.com/in/nikhilpatil8217" target="_blank" rel="noopener noreferrer" className="text-vs-green hover:underline" data-track="linkedin-link-click">linkedin</a>
                {'}'};
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
