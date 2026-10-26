import { useState, useEffect, useRef } from 'react';

function SearchBox() {
  const [searchText, setSearchText] = useState('');
  
  const inputRef = useRef(null);
  const renderCount = useRef(0);
  
  renderCount.current += 1;
  
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  return (
    <section>
<h2>Search Box</h2>

  <input
    ref={inputRef}
    type="text"
    value={searchText}
    onChange={(event) => setSearchText(event.target.value)}
    placeholder="Search here..."
  />

  <p>You searched for: {searchText}</p>

  <p>Render count: {renderCount.current}</p>
</section>
    
  );
}

export default SearchBox;