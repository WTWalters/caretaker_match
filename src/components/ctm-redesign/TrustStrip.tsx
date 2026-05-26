const trustItems = [
  "Every volunteer background checked",
  "Anonymous until you're ready",
  "Monitored for safety",
  "Mutual consent at every step",
];

export default function TrustStrip() {
  return (
    <section
      className="py-5 px-6"
      style={{ backgroundColor: "var(--color-warm-cream)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2">
        {trustItems.map((item) => (
          <span
            key={item}
            className="text-sm"
            style={{ color: "var(--color-text-primary)" }}
          >
            <span
              className="font-bold mr-1"
              style={{ color: "var(--color-redesign-teal)" }}
            >
              ✓
            </span>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
