// import "../App.css";

export default function Toolbar({ filters, selected, onSelectFilter }) {
  return (
    <div className="filters">
      {filters.map((item) => {
        const classname = item === selected ? "active" : "button";
        return (
          <button
            key={item}
            className={classname}
            onClick={() => {
              onSelectFilter(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
