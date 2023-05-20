import { useState } from "react";
import ImageGallery from './imageGallery/ImageGallery';
import Searchbar from "./searchBar/Searchbar";
import css from './app.module.css';

const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className={css.app}
      >
        <Searchbar
          onSubmit={setSearchQuery}
        />
        <ImageGallery
          searchQuery={searchQuery}
        />
    </div>
  );
};

export default App;