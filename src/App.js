import React from 'react';
import './App.css';

function App({ posts }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <ul className="App">
      {posts.map(({ id, img, text }, index) => {
        const isOpen = openIndex === index;

        const textToShow = isOpen ? text : text.substr(0, 100) + '...';

        const handleTextToShow = () => {
          setOpenIndex(index);
        };
        return (
          <li key={id}>
            <img src={img} alt={id} />
            <p>{textToShow}</p>
            {!isOpen && <button onClick={handleTextToShow}>Open</button>}
          </li>
        );
      })}
    </ul>
  );
}

export default App;
