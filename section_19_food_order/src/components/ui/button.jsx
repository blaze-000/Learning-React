export default function Button({ children, className, textOnly, ...props }) {
  const cssClasses = textOnly ? "text-button" : "button";
  return (
    <button {...props} className={`${cssClasses} ${className}`}>
      {children}
    </button>
  );
}
