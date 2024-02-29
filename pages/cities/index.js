import { cities } from "@/lib/data";
import Link from "next/link";
import StyledList from "@/components/StyledList";
import StyledListItems from "@/components/StyledListItems";
import { styled } from "styled-components";

const StyledLink = styled(Link)`
  color: white;
`;

export default function HomePage() {
  return (
    <main>
      <StyledList>
        {cities.map((city) => (
          <StyledListItems key={city.id}>
            <StyledLink href={`cities/${city.slug}`}>{city.country}</StyledLink>
          </StyledListItems>
        ))}
      </StyledList>
    </main>
  );
}
