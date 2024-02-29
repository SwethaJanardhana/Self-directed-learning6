import { cities } from "@/lib/data";
import Link from "next/link";
import StyledList from "@/components/StyledList";
import StyledListItems from "@/components/StyledListItems";
import { styled } from "styled-components";
import Head from "next/head";
import Heart from "@/Icons/heart.svg";
import RightArrow from "@/Icons/right-arrow.svg";
import Image from "next/image";

const StyledImage = styled(Image)`
  fill: white;
`;

const StyledHeart = styled(Heart)`
  width: 15px;
  fill: "pink";
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Cities</title>
      </Head>
      <StyledList>
        {cities.map((city) => (
          <StyledListItems key={city.id}>
            <StyledLink href={`cities/${city.slug}`}>
              <RightArrow />
              {city.country}
              <StyledHeart />
            </StyledLink>
          </StyledListItems>
        ))}
        <StyledLink href="/">
          <StyledImage
            src="/assets/left-arrow.svg"
            alt="back arrow"
            height={20}
            width={20}
          />
        </StyledLink>
      </StyledList>
    </main>
  );
}
