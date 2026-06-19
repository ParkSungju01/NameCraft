interface DataItem {
  id: number;
  name: string;
  icon?: React.ReactNode;
}

export function ButtonVariants({
  data,
  selected,
  onSelect,
}: {
  data: DataItem[];
  selected: DataItem;
  onSelect: (item: DataItem) => void;
}) {
  return (
    <div className="w-full flex overflow-hidden">
      {data.map((item) => (
        <button
          key={item.id}
          className={`flex items-center justify-center gap-1 border w-full first:rounded-l-lg last:rounded-r-lg p-2 cursor-pointer  ${selected.id === item.id ? "bg-blue-100 border-blue-400 font-semibold text-blue-500" : "border-gray-300 hover:bg-gray-100"}`}
          onClick={() => onSelect(item)}
        >
          {item.icon}
          {item.name}
        </button>
      ))}
    </div>
  );
}

export function ButtonGroup({
  data,
  title,
  selected,
  onSelect,
}: {
  data: DataItem[];
  title: string;
  selected: DataItem;
  onSelect: (item: DataItem) => void;
}) {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <span className="text-sm font-semibold text-black">{title}</span>
      <ButtonVariants data={data} selected={selected} onSelect={onSelect} />
    </div>
  );
}