export default function Footer() {
  const Footer = {
    text: "All © Copy Right Reserved 2022",
  };
  return (
    <footer className="text-center dark:bg-slate-800 dark:text-white">
      <h6 className="mb-3 dark:text-white">M REHAN</h6>
      <p className=" dark:text-white">{Footer.text}</p>
    </footer>
  );
}
