import { useEffect, useState } from "react";

const CAT_FACTS_API = "https://catfact.ninja/fact";
//const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${firstWord}`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";

export function App() {
  const [fact, setFact] = useState("gatos");
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetch(CAT_FACTS_API)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        const firstWord = fact.split(" ", 3).join(" ");
        console.log(firstWord);

        fetch(
          `https://cataas.com/cat/says/${firstWord}?type=square&filter=mono&fit=cover&position=center&html=true&json=true&font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            console.log(response);
            setImageUrl(url);
            console.log(url);
          });
      });
  }, []);

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${imageUrl}`} alt="cat" />}
    </main>
  );
}
