import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 text-center md:text-left">
          {/* Resources Section - Visible on Medium and Large Screens */}
          <div className="md:m-8 p-5 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg">
            <h3 className="text-md font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                    aria-label={`Go to ${link.text}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Section - Hidden on Medium and Small Screens */}
          <div className="hidden md:m-8 p-5 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg lg:block">
            <h3 className="text-md font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                    aria-label={`Go to ${link.text}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Section - Hidden on Medium and Small Screens */}
          <div className="hidden md:m-8 p-5 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg lg:block">
            <h3 className="text-md font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="text-neutral-300 hover:text-white"
                    href={link.href}
                    aria-label={`Go to ${link.text}`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us Section - Always Visible */}
          <div className="md:m-8 p-5 bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg rounded-lg">
            <h3 className="text-md font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Social Media Icons */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="text-neutral-300 hover:text-white"
              >
                {/* Facebook Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-facebook"
                >
                  <path d="M18 2h-3a6 6 0 0 0-6 6v3H6v4h3v8h4v-8h3.72l.28-4h-4V8a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on LinkedIn"
                className="text-neutral-300 hover:text-white"
              >
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="text-neutral-300 hover:text-white"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-instagram"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37a4 4 0 1 1-4.74-4.74 4 4 0 0 1 4.74 4.74z" />
                  <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Twitter"
                className="text-neutral-300 hover:text-white"
              >
                {/* Twitter Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-twitter"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
