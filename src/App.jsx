import CoreConcepts from "./components/core_concepts.jsx";
import Header from "./components/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedItem, setSelectedItem] = useState();

  function handleTabSelect(selectedButton) {
    setSelectedItem(selectedButton);
    console.log(selectedItem);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((selectedConcept)=> (<CoreConcepts key={selectedConcept.title} {...selectedConcept} />))}


            {/* <CoreConcepts
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcepts
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
             */}



          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedItem === "components"}
              onSelect={() => handleTabSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedItem === "jsx"}
              onSelect={() => handleTabSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedItem === "props"}
              onSelect={() => handleTabSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedItem === "state"}
              onSelect={() => handleTabSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedItem ? (
            <p>Please select a tab.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedItem].title}</h3>
              <p>{EXAMPLES[selectedItem].description}</p>
              <pre>
                <code>{EXAMPLES[selectedItem].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
