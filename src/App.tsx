import tomHeadshot from "./assets/Tom-Headshot-Square.jpg";
import githubIcon from "./assets/github.svg";
import discordIcon from "./assets/discord.svg";
import mailIcon from "./assets/mail.svg";

const socials = [
  {
    name: "Github",
    icon: githubIcon,
    alt: "Github icon",
    href: "https://github.com/tombouquet",
  },
  {
    name: "Discord",
    icon: discordIcon,
    alt: "Discord icon",
    href: "https://discord.gg/vhVTfVGXmW",
  },
  {
    name: "Email",
    icon: mailIcon,
    alt: "Email icon",
    href: "mailto:contact@tombouquet.com",
  },
];

const App = () => {
  return (
    <>
      <div className="absolute font-pulp inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
      <div className="p-10 md:pb-64 md:container md:flex space-y-6 items-center gap-16 h-screen justify-center">
        <img
          src={tomHeadshot}
          className="rounded-full size-52 md:size-64 order-last drop-shadow-xl mx-auto"
          alt="Tom Bouquet profile photo"
        />
        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h1 className="font-extrabold text-orange-600 text-5xl -ml-2">
              Tom Bouquet
            </h1>
            <h2 className="font-bold text-lg mt-2">
              Web Developer & Live Video Enthusiast
            </h2>
            <p className="mt-4">
              I am a button presser who wants to make an impression on live
              video content.
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            {socials.map((social) => (
              <a
                href={social.href}
                target="_blank"
                className="size-16 bg-stone-100 group rounded-full flex hover:-translate-y-1 transition-transform items-center justify-center border-2 border-stone-300"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="size-6 opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
