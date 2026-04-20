import Image from "next/image";

const PARTNERS = [
  { name: "FedEx", src: "/images/partners/fedex.svg", width: 150 },
  { name: "Honda", src: "/images/partners/honda.svg", width: 267 },
  { name: "Tesla", src: "/images/partners/tesla.svg", width: 268 },
  { name: "Huawei", src: "/images/partners/huawei.svg", width: 229 },
  { name: "Walmart", src: "/images/partners/walmart.svg", width: 211 },
];

export default function Partners() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className="bg-white py-[120px] overflow-hidden">
      <div className="relative">
        <div className="flex items-center partners-track whitespace-nowrap w-max">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="shrink-0 px-8 flex items-center justify-center"
            >
              <Image
                src={p.src}
                alt={p.name}
                width={p.width}
                height={32}
                className="h-8 w-auto"
              />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-white via-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-white via-white to-transparent" />
      </div>
    </section>
  );
}
