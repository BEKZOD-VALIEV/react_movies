import { useState } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import { v4 as uuidv4 } from 'uuid';


import './app.css'

const App = () => {
	const [data, setDate] = useState(arr)
	const [term, setTerm] = useState('')
	const [filter, setFilter] = useState('all')

	const onDelete = id => {
		const newArr = data.filter(c => c.id !== id)
		setDate(newArr)
	}

	const addForm = item => {
		const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
		const newArr = [...data, newItem]
		setDate(newArr)
	}

	const onToggleProp = (id, prop) => {
		const newArr = data.map(item => {
			if (item.id === id) {
				return { ...item, [prop]: !item[prop] }
			}
			return item
		})
		setDate(newArr)
	}

	const searchHandler = (arr, term) => {
		if (term === 0) {
			return arr
		}

		return arr.filter(item => item.name.toLowerCase().indexOf(term) > -1)
	}

	const filterHandler = (arr, filter) => {
		switch (filter) {
			case 'popular':
				return arr.filter(c => c.like)
			case 'mostViewers':
				return arr.filter(c => c.viewers > 800)	
			default:
				return arr	
		}
	}

	const updateTermHandler = term => setTerm(term)

	const updateFilterHandler = filter => setFilter(filter)

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo allMoviesCount={data.length} favouriteMovieCount={data.filter(c => c.favourite).length} />
				<div className='search-panel'>
					<SearchPanel updateTermHandler={updateTermHandler} />
					<AppFilter filter={filter} updateFilterHandler={updateFilterHandler} />
				</div>
				<MovieList onToggleProp={onToggleProp} data={filterHandler(searchHandler(data, term), filter)} onDelete={onDelete}/>
				<MoviesAddForm addForm={addForm}/>
			</div>
		</div>
	)
}

export default App

const arr = [
	{ name: 'Empire of Osman', viewers: 811, favourite: false, like: false, id: 1 },
	{ name: 'Ertugrul', viewers: 789, favourite: false, like: false, id: 2 },
	{ name: 'Omar', viewers: 1091, favourite: false, like: false, id: 3 },
]