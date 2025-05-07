import type { SectionLayoutProps } from "../types/SectionLayoutProps";

const SectionLayout = ({ title, children }: SectionLayoutProps) => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-screen-md mx-auto">
      {title && <h2 className="text-2xl font-semibold mb-6">{title}</h2>}
      {children}
    </section>
  );
};

export default SectionLayout;
