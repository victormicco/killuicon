import { ModeToggle } from "./setThemeToggle";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 p-4 border-t dark:border-gray-800 backdrop-blur-sm">
      <div className=" flex justify-center gap-4 text-sm">
        <p className="text-gray-500 dark:text-gray-400">
          Created with 💜 by{" "}
          <a href="https://www.github.com/victormicco">Victor Micco</a>
        </p>
      </div>
    </footer>
  );
}
