import HeroAboutSection from "../components/aboutMePage/HeroAboutSection";
import SvgKeywordsSection from "../components/aboutMePage/KeywordsSection";
import Timeline from "../components/aboutMePage/Timeline";
import SkillsSection from "../components/aboutMePage/SkillsSection";
import DotNav from "../components/aboutMePage/DotNav";

const About = () => {
  return (
    <>
      <DotNav />
      <section id="hero">
        <HeroAboutSection />
      </section>
      <section id="core-values" className="py-20">
        <SvgKeywordsSection />
      </section>
      <section id="timeline" >
        <Timeline />
      </section>
      <section id="stack">
        <SkillsSection />
      </section>

    </>
  );
};

export default About;
