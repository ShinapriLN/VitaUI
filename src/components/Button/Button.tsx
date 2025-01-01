export default function Button({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return <button className="bg-red-400 rounded-lg p-4" {...props}>{children}</button>;
}
