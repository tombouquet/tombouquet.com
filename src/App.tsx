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
        <div className="flex gap-32 h-screen justify-between items-center container pb-64 size-full">
          <div className="flex flex-col gap-8">
            <div>
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
            <div className="flex gap-4">
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
          <img
            src={tomHeadshot}
            className="rounded-full size-64 drop-shadow-xl"
            alt="Tom Bouquet profile photo"
          />
        </div>
    </>
  );
};

export default App;
