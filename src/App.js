import './App.css';
import Header from './Header';
import SearchItem from './SearchItem';
import HooksState from './HooksState';
import Footer from './Footer';
import {useState, useEffect} from 'react';
import AddItem from './AddItem';


function App() {

  const API_URL = 'http://localhost:5000/items';
  // const API_URL = 'http://localhost:3000/api/users/';
  
  const [items, setItems] = useState([
    {
      "id": 1,
      "checked": true,
      "item": "Bread",
      "price": 10
    },
    {
        "id": 2,
        "checked": false,
        "item": "Chicken",
        "price": 300
    },
    {
        "id": 3,
        "checked": false,
        "item": "Sugar",
        "price": 2
    },
    {
      "id": 4,
      "checked": true,
      "item": "Apple",
      "price": 10
    },
    {
        "id": 5,
        "checked": false,
        "item": "Coconut",
        "price": 20
    },
    {
        "id": 6,
        "checked": true,
        "item": "Pineapple",
        "price": 50
    }
  ]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL, {method: 'GET'});
        if (!res.ok) throw Error('error fetching data from server...')
        const listItems = await res.json();
        console.log(listItems)
        // setItems(listItems)
        setFetchError(null);
      }catch (err){
        setFetchError(err.message)
      }finally {
        setIsDataLoading(false);
      }
    }

    fetchItems();

    // setTimeout(() => fetchItems(), 1000)

    // fetch(API_URL, {
    //   mode: 'no-cors'
    // }).then(async (res) => {
    //   let listItems = await res.json();
    //   setItems(listItems);
    // })
  }, [])

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id, available: false, item: item, price: 10};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  }
  const setAndSaveItems = (listItems) => {
    setItems(listItems);
    localStorage.setItem('Groceries', JSON.stringify(listItems));
  }

  const handleChange = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
  }
  const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setAndSaveItems(listItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <div className='content' style={{
        display: 'flex'
      }}>
        <Header />
        <AddItem
        newItem={newItem} 
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
        <SearchItem 
          search={search}
          setSearch={setSearch}
        />
        <main style={{
          flexGrow: 1
        }}>
          {/* {isDataLoading && <p>Loading Items...</p>}
          {fetchError && <p style={{
            color: 'red',
          }}>{`Error: ${fetchError}`}</p>}
          {!fetchError && !isDataLoading &&
            <HooksState
            items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())
            )}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
            />
          } */}
          {
            <HooksState
            items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase())
            )}
            handleChange = {handleChange}
            handleDelete = {handleDelete}
            />
          }
        </main>
        <Footer
        length = {items.length}
        />
      </div>
    </div>
  );
}

export default App;
