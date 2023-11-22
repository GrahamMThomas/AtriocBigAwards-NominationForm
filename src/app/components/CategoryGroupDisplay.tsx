type CategoryGroupDisplayProps = {
  name: string;
};

export default function CategoryGroupDisplay({
  name,
}: CategoryGroupDisplayProps) {
  return (
    <div>
      <h2 className="text-xl text-white">{name}</h2>
    </div>
  );
}
