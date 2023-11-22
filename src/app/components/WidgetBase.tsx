export default function WidgetBase({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-navy mt-28 mx-16 p-8 rounded-lg flex flex-col items-center shadow-xl">
      {children}
    </div>
  );
}
