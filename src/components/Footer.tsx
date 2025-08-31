import type { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="py-6 bg-white border-t text-center text-gray-600">
      <p>© {new Date().getFullYear()} Sieam. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
