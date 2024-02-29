import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import StyledLink from "@/components/StyledLink";
import StyledSection from "@/components/StyledSection";
import Image from "next/image";
import { styled } from "styled-components";
import Head from "next/head";

const StyledImage = styled(Image)`
  fill: white;
`;

export default function CityDetails() {
  const router = useRouter();

  if (!router.query) {
    return;
  }
  const { slug } = router.query;

  const {
    name: capital,
    country,
    population,
    description,
  } = cities.find((city) => city.slug === slug);

  return (
    <>
      <Head>
        <title>{country}</title>
      </Head>
      <StyledSection>
        <h1>Country : {country}</h1>
        <h2>Capital City : {capital}</h2>
        <p>Population : {population}</p>
        <article>
          <p>{description}</p>
        </article>
        <br />
        <StyledLink href="/cities">
          <StyledImage
            src="/assets/left-arrow.svg"
            alt="back arrow"
            height={20}
            width={20}
          />
        </StyledLink>
      </StyledSection>
    </>
  );
}
