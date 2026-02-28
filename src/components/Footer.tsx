export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 py-6 px-4 md:px-8 lg:px-12 text-center text-sm text-neutral-500">
      <p>© {new Date().getFullYear()} Agustín Seoane</p>
    </footer>
  );
}
