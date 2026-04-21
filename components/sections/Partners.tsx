import Image from "next/image";

const LOGO_HEIGHT = 40;

const PARTNERS = [
  { name: "Samsara", src: "/images/partners/samsara.png", natural: [2687, 645] },
  { name: "Bestpass", src: "/images/partners/bestpass.png", natural: [1920, 522] },
  { name: "TT ELD", src: "/images/partners/tteld.png", natural: [2500, 936] },
  { name: "Pilot Flying", src: "/images/partners/pilot.png", natural: [3840, 633] },
  { name: "PrePass", src: "/images/partners/prepass.png", natural: [840, 220] },
  { name: "MoLo", src: "/images/partners/molo.png", natural: [1000, 312] },
  { name: "Flock Freight", src: "/images/partners/flock.png", natural: [2250, 346] },
] satisfies {
  name: string;
  src: string;
  natural: [number, number];
}[];

export default function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white py-16 lg:py-[120px] overflow-hidden">
      <div className="relative">
        <div className="flex items-center partners-track whitespace-nowrap w-max">
          {doubled.map((p, i) => {
            const [nw, nh] = p.natural;
            const w = Math.round((nw / nh) * LOGO_HEIGHT);
            return (
              <div
                key={`${p.name}-${i}`}
                className="shrink-0 px-6 lg:px-10 flex items-center justify-center"
              >
                <Image
                  src={p.src}
                  alt={p.name}
                  width={w}
                  height={LOGO_HEIGHT}
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 lg:w-72 bg-gradient-to-r from-white via-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 lg:w-72 bg-gradient-to-l from-white via-white to-transparent" />
      </div>
    </section>
  );
}
