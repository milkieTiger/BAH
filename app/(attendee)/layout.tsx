export default function AttendeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // TODO: Add authentication guard (e.g., redirect to /login if not signed in).
  return <>{children}</>;
}
