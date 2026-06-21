export default function GoldDivider() {
  return (
    <div
      className="mx-auto my-8 h-px w-3/4 max-w-md"
      style={{
        background:
          "linear-gradient(to right, transparent, var(--color-gold), transparent)",
      }}
    />
  );
}
