import HeroAboutSection from "../components/aboutMePage/HeroAboutSection";
import SvgKeywordsSection from "../components/aboutMePage/KeywordsSection";
import Timeline from "../components/aboutMePage/Timeline";
import SkillsSection from "../components/aboutMePage/SkillsSection";
import DotNav from "../components/aboutMePage/DotNav";

const About = () => {
  return (
    <>
      <DotNav />
      <section
        id="hero"
        className="px-4 sm:px-6 lg:px-8 xl:px-16 pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-20"
      >
        <HeroAboutSection />
      </section>
      <section
        id="core-values"
        className="px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20"
      >
        <SvgKeywordsSection />
      </section>
      <section
        id="timeline"
        className="px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20"
      >
        <Timeline />
      </section>
      <section
        id="stack"
        className="px-4 sm:px-6 lg:px-8 xl:px-16 py-8 sm:py-12 lg:py-16 xl:py-20"
      >
        <SkillsSection />
      </section>
    </>
  );
};

export default About;
