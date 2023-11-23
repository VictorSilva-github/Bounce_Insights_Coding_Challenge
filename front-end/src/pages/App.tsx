// Importing necessary React hooks and components
import { useEffect, useState } from "react";
import { HeaderComp, InfoLeftComp, InfoRightComp } from "../components";
import { Body, Container, Content, Header } from "./styles"
import GetInfoCountry from "../services/getCountries";

// Defining the main App component
const App = () => {

  // Store fetched data and user-inputted name
  const [ data, setData ] = useState<any>([])
  const [ name, setName ] = useState<string>("")

  // useEffect hook to fetch data when the 'name' state changes
  useEffect(() => {
    // Async function to fetch data using the GetInfoCountry service
    async function getData(){
      // Using await to ensure the asynchronous operation completes before proceeding
       await GetInfoCountry(name)
        .then((response) => {
          setData(response)
        })
        .catch((error) => {
          // Handling errors
          console.error("Error fetching data:", error);
        });
    }
    // Calling the getData function when the 'name' state changes
    getData()

  }, [name]) // Dependency array ensures the useEffect runs when 'name' changes

  // Rendering the main structure of the application
  return (
    <Container>
      <Content>
     
      <Header>
      <h2>Type a Country Name</h2>
        <HeaderComp 
        setName={setName}
        />
      </Header>

      {data.length > 0 &&
      
        <Body>
          
            <InfoLeftComp 
              data={data}
            />
            <InfoRightComp 
              data={data}
            />
        </Body>
      }
      </Content>
    </Container>
  );
}

export default App;
