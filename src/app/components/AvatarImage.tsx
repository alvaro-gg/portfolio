import Image from "next/image";

export default function AvatarImage({
  size = 220,
}: Readonly<{ size?: number }>) {
  return (
    <div
      style={{
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-10px",
          borderRadius: "50%",
          border: "1px solid rgba(129,140,248,0.35)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: "-28px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.22), transparent 65%)",
          filter: "blur(18px)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          border: "1px solid rgba(129,140,248,0.3)",
          background: "var(--color-surface2)",
          zIndex: 1,
        }}
      >
        <Image
          src="/about/avatar.png"
          alt="Foto de Álvaro"
          width={size}
          height={size}
          style={{
            objectFit: "cover",
            objectPosition: "center 18%",
            width: "100%",
            height: "100%",
            transform: "scale(0.84)",
          }}
          priority
        />
      </div>
    </div>
  );
}
