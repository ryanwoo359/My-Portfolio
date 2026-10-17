// Retro OS-style panel with a title bar.
export default function Window({ title, meta, children, className = "", bodyClassName = "p-6" }) {
  return (
    <div className={`window ${className}`}>
      <div className="window-bar">
        <span className="dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className="truncate">{title}</span>
        {meta && <span className="ml-auto shrink-0">{meta}</span>}
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
