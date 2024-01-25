import GridContainer from "@/components/GridContainer";
import PortfolioItem from "@/components/PortfolioItem";
import SubpageWrapper from "@/components/SubpageWrapper";
import { portfolioData } from "@/data/portfolioData";

export default function Portfolio() {
  return (
    <SubpageWrapper>
      <h1 className="text-center text-4xl lg:text-6xl animate-slidein [--slidein-delay:100ms] opacity-0">
        Aplikacje
      </h1>
      <section className="my-20">
        <h2 className=" text-3xl lg:text-5xl animate-slidein [--slidein-delay:300ms] opacity-0 mt-32 mb-20">
          Aplikacje React / NextJS
        </h2>
        <GridContainer animation="animate-slidein [--slidein-delay:700ms] opacity-0">
          {portfolioData
            .filter((item) => item.type === "React")
            .map((item) => (
              <PortfolioItem key={item.name} data={item} />
            ))}
        </GridContainer>

        <h2 className=" text-3xl lg:text-5xl animate-slidein [--slidein-delay:300ms] opacity-0 mt-32 mb-20">
          Aplikacje JavaScript
        </h2>
        <GridContainer animation="animate-slidein [--slidein-delay:700ms] opacity-0">
          {portfolioData
            .filter((item) => item.type === "JS")
            .map((item) => (
              <PortfolioItem key={item.name} data={item} />
            ))}
        </GridContainer>

        <h2 className=" text-3xl lg:text-5xl animate-slidein [--slidein-delay:300ms] opacity-0 mt-32 mb-20">
          WWW: HTML + CSS (SASS) + elementy JS
        </h2>
        <GridContainer animation="animate-slidein [--slidein-delay:700ms] opacity-0">
          {portfolioData
            .filter((item) => item.type === "WWW")
            .map((item) => (
              <PortfolioItem key={item.name} data={item} />
            ))}
        </GridContainer>
      </section>
    </SubpageWrapper>
  );
}
