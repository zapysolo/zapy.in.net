import { OWNER_EMAIL } from '@/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-full flex items-center justify-center px-4 md:px-8 lg:px-12"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-4xl w-full">
        <p className="text-gray-400 mb-2 font-mono text-sm">Hi all. I am</p>
        <h1 id="hero-heading" className="text-3xl md:text-5xl font-mono text-white mb-4">
          Nikhil Patil
        </h1>
        <p className="text-vs-accent text-lg md:text-xl mb-10 font-mono">
          &gt; Software Engineer
        </p>
        <div className="space-y-5 font-mono text-sm md:text-base">
          <div>
            <p className="text-gray-500 text-sm">// my e-mail</p>
            <p className="break-all">
              <span className="text-vs-purple">const</span>{' '}
              <span className="text-vs-blue">email</span> ={' '}
              <a href={`mailto:${OWNER_EMAIL}`} className="text-vs-green hover:underline" data-track="email-click">
                &quot;{OWNER_EMAIL}&quot;
              </a>;
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">// you can also see it on my Github page</p>
            <p className="break-all">
              <span className="text-vs-purple">const</span>{' '}
              <span className="text-vs-blue">githubLink</span> ={' '}
              <a href="https://github.com/ZapySolo" target="_blank" rel="noopener noreferrer" className="text-vs-green hover:underline" data-track="github-link-click">
                &quot;https://github.com/ZapySolo&quot;
              </a>;
            </p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">// you can also see it on my LinkedIn page</p>
            <p className="break-all">
              <span className="text-vs-purple">const</span>{' '}
              <span className="text-vs-blue">linkedinLink</span> ={' '}
              <a href="https://www.linkedin.com/in/nikhilpatil8217" target="_blank" rel="noopener noreferrer" className="text-vs-green hover:underline" data-track="linkedin-link-click">
                &quot;https://www.linkedin.com/in/nikhilpatil8217&quot;
              </a>;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
