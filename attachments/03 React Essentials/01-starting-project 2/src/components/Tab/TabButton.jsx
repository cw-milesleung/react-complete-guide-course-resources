const TabButton = ({ children, ...props }) => {
  return (
    <button className={props.isSelected ? "active" : null} {...props}>
      {children}
    </button>
  );
};
export default TabButton;
