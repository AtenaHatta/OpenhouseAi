export default function Chip({ group }: { group: string }) {
  const color = (group: string) => {
    switch (group) {
      case "North West":
        return "bg-green";
      case "South East":
        return "bg-blue";
      case "South West":
        return "bg-yellow";
    }
  };

  return (
    <div
      className={`${color(
        group,
      )}  w-[80px] rounded-md px-1 py-2 text-center font-semibold text-xs text-white shadow-lg shadow-gray-500`}
    >
      {group}
    </div>
  );
}
