import { BlurhashCanvas } from "react-blurhash";
import { useState } from "react";
import tomHeadshot from "./assets/Tom-Headshot-Square.jpg";
import githubIcon from "./assets/github.svg";
import discordIcon from "./assets/discord.svg";
import mailIcon from "./assets/mail.svg";
import linkedInIcon from "./assets/linkedin.svg";

const socials = [
  {
    name: "LinkedIn",
    icon: linkedInIcon,
    alt: "LinkedIn icon",
    href: "https://www.linkedin.com/in/tom-bouquet/",
  },
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
  const [imageLoaded, setImageLoaded] = useState(false);

  // Example Blurhash value, replace with your generated blurhash
  const blurhash =
    "|EK12h001N}@vz57RP%MSg00%MaLRj%Ms:V[WBs:yrxa={IpE1xubbWBjF00t7smWWWBa#ozs.kC?vn%xZR*NGxZt7RjWBIARjRjxaNGj@soW;j[%gxaM{Nb-pe.S2axWBsoRjNas:V@WURjofX8bHofRjofxuWBs:ayWU";

  return (
    <>
      <div className="absolute font-pulp inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] animate-pulse" />
      <div className="p-10 md:pb-64 md:container md:flex space-y-10 items-center gap-16 h-screen justify-center">
        {/* Container for the image or Blurhash */}
        <div className="relative shrink-0 size-64 order-last drop-shadow-xl mx-auto">
          {/* Display Blurhash while image is loading */}
          {!imageLoaded && (
            <BlurhashCanvas
              hash={blurhash}
              width={256} // Ensure it matches the size of your image container
              height={256}
              punch={1}
              className="rounded-full"
            />
          )}

          {/* Actual image */}
          <img
            src={tomHeadshot}
            onLoad={() => setImageLoaded(true)}
            className={`rounded-full w-full h-full object-cover transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            alt="Tom Bouquet profile photo"
          />
        </div>

        <div className="space-y-6">
          <div className="text-center md:text-left">
            <h1 className="font-extrabold text-orange-600 text-5xl -ml-2">
              Tom Bouquet
            </h1>
            <h2 className="font-bold text-lg mt-2">
              Web Developer & Live Video Enthusiast
            </h2>
            <p className="mt-4">
              My passion lies in blending technology and creativity to craft
              engaging experiences that resonate with viewers. Whether it's
              experimenting with interactive elements or optimizing streams for
              maximum impact, I thrive on pushing the boundaries of what’s
              possible in live video.
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            {socials.map((social) => (
              <a
                key={social.href}
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
