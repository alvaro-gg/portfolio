export default function Tag({ children }: Readonly<{ children: string }>) {
  return (
    <span
      style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        background: "rgba(99,102,241,0.13)",
        color: "var(--color-accent2)",
        border: "1px solid rgba(129,140,248,0.28)",
        borderRadius: "5px",
        padding: "3px 9px",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}
