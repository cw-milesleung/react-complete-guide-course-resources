const TabButton = ({ children, onSelect, isActive }) => {
  return (
    <div>
      <li>
        <button className={isActive ? "active" : null} onClick={onSelect}>
          {children}
        </button>
      </li>
    </div>
  );
};
export default TabButton;
