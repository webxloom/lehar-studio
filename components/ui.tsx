// Building blocks for the page markup Aji uses everywhere. Class names and
// structure are kept identical to his static build so globals.css applies as-is.
import Image from "next/image";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import { IMAGE_SIZES } from "@/lib/images";
import { JsonLd, absoluteUrl } from "@/lib/seo";

type Children = { children?: React.ReactNode };

/** next/image for a file in /public/images, sized from IMAGE_SIZES. */
export function Img({
  name,
  alt = "",
  className,
  sizes = "(max-width: 1000px) 90vw, 50vw",
  priority,
}: {
  name: string;
  alt?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [width, height] = IMAGE_SIZES[name] ?? [1600, 1067];
  return (
    <Image
      src={`/images/${name}`}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}

/** `.sec` section: optional alt background, faded section photo, reveal wrapper and wave divider. */
export function Sec({
  id,
  alt,
  bg,
  center,
  className = "",
  children,
}: Children & { id?: string; alt?: boolean; bg?: string; center?: boolean; className?: string }) {
  const cls = ["sec", alt && "alt", bg && "has-bg", center && "center", className].filter(Boolean).join(" ");
  const style = bg ? ({ "--sec-img": `url('/images/${bg}')` } as React.CSSProperties) : undefined;
  return (
    <section className={cls} id={id} style={style}>
      <div className="wrap reveal">{children}</div>
      <WaveDivider />
    </section>
  );
}

/** Poem-style quote with the gold marks. Pass lines as an array. */
export function Verse({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <p className={`verse ${className}`.trim()}>
      {lines.map((l, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {l}
        </span>
      ))}
    </p>
  );
}

/** Text left, floating masked image right. */
export function Split({ img, still, children }: Children & { img?: string; still?: boolean }) {
  return (
    <div className={`split${img ? "" : " no-img"}`}>
      <div className="split-text">{children}</div>
      {img && (
        <figure className={`float-img${still ? " still" : ""}`}>
          <Img name={img} />
        </figure>
      )}
    </div>
  );
}

export type Crumb = { href?: string; label: string };

/** Full-width photo banner with crumbs, eyebrow and title. */
export function PhotoBanner({
  img,
  crumbs,
  eyebrow,
  title,
  sub,
  pos,
}: {
  img: string;
  crumbs: Crumb[];
  eyebrow?: React.ReactNode;
  title: string;
  sub?: string;
  pos?: "left" | "right";
}) {
  return (
    <section
      className={`banner has-photo${pos ? ` pos-${pos}` : ""}`}
      style={{ "--banner-img": `url('/images/${img}')` } as React.CSSProperties}
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: crumbs.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: absoluteUrl(c.href) } : {}),
          })),
        }}
      />
      <Img name={img} className="banner-img" sizes="100vw" priority />
      <div className="banner-in">
        <div className="wrap">
          <p className="crumbs">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {i > 0 && " › "}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </span>
            ))}
          </p>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {sub && <p className="sub">{sub}</p>}
        </div>
      </div>
      <WaveDivider />
    </section>
  );
}

/** Dark parallax call-to-action band. */
export function ParallaxCta({ img, id, children }: Children & { img: string; id?: string }) {
  return (
    <section
      className="parallax-cta"
      id={id}
      style={{ "--cta-img": `url('/images/${img}')` } as React.CSSProperties}
    >
      <div className="wrap narrow reveal">{children}</div>
    </section>
  );
}
