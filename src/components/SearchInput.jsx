import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchEvent } from '../app/features/eventSlice';

function SearchInput() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    const query = event.target.value;
    setQuery(query);
    dispatch(searchEvent(query));
  };

  return (
    <InputGroup w={{ base: '100%', md: '60%' }} mr={{ base: '0', md: '6' }}>
      <InputLeftElement>
        <SearchIcon />
      </InputLeftElement>
      <Input
        type='text'
        placeholder='Search your event'
        focusBorderColor='blue.500'
        value={query}
        onChange={handleSearch}
      />
    </InputGroup>
  );
}

export default SearchInput;
