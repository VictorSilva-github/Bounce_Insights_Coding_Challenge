import { IInfoCountry } from "../../../common/types";

import { Container, CapitalName, OfficialName, CompleteName } from "./styles";

// Defining the InfoRightComp component
const InfoRightComp = ({ data }: IInfoCountry) => {
  return (
    <Container>
    <OfficialName>{data[0].name.common}</OfficialName>
    <CapitalName>Capital Name: <CompleteName>{data[0].capital}</CompleteName></CapitalName>
    <CompleteName>Official Name: <CompleteName>{data[0].name.official}</CompleteName></CompleteName>
    </Container>
  );
};

export default InfoRightComp;