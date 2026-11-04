export default function TechBadge({ name }: { name: string }) {
  return (
    <span className="text-xs bg-vs-bg-hover text-vs-accent px-2 py-1 rounded font-mono">
      {name}
    </span>
  );
}
