export default function SectionLabel({
  children,
}: Readonly<{ children: string }>) {
  return (
    <p
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        color: "var(--color-accent2)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}
