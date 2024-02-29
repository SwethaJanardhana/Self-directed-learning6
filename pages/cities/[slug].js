import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import StyledLink from "@/components/StyledLink";
import StyledSection from "@/components/StyledSection";

export default function CityDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const {
    name: capital,
    country,
    population,
    description,
  } = cities.find((city) => city.slug === slug);

  return (
    <StyledSection>
      <h1>{country}</h1>
      <h2>Capital City : {capital}</h2>
      <p>Population : {population}</p>
      <article>
        <p>{description}</p>
      </article>
      <br />
      <StyledLink href="/cities">All Cities</StyledLink>
    </StyledSection>
  );
}
