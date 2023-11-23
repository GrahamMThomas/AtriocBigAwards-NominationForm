export default function WidgetBase({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string | null;
}) {
  return (
    <div
      className="bg-navy max-w-sm border-t-[20px] mt-28 mx-10 px-8 pb-8 pt-4 rounded-2xl flex flex-col items-center shadow-xl"
      style={{ borderColor: `#${color == null ? "0E212E" : color}` }}
    >
      {children}
    </div>
  );
}
