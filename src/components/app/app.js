import { Component } from 'react'
import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import { v4 as uuidv4 } from 'uuid';


import './app.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: 'Empire of Osman', viewers: 811, favourite: false, like: false, id: 1 },
				{ name: 'Ertugrul', viewers: 789, favourite: false, like: false, id: 2 },
				{ name: 'Omar', viewers: 1091, favourite: false, like: false, id: 3 },
			],
		}
	}

	onDelete = id => {
		this.setState(({ data }) => ({
			data: data.filter(c => c.id !== id),
		}))
	}

	addForm = item => {
		const newItem = { name: item.name, viewers: item.viewers, id: uuidv4(), favourite: false, like: false }
		this.setState(({ data }) => ({
			data: [ ...data, newItem ],
		}))
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			}),
		}))
	}

	render() {
		const { data } = this.state
		const allMoviesCount = data.length
		const favouriteMovieCount = data.filter(c => c.favourite).length

		return (
			<div className='app font-monospace'>
				<div className='content'>
					<AppInfo allMoviesCount={allMoviesCount} favouriteMovieCount={favouriteMovieCount} />
					<div className='search-panel'>
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList onToggleProp={this.onToggleProp} data={data} onDelete={this.onDelete}/>
					<MoviesAddForm addForm={this.addForm}/>
				</div>
			</div>
		)
	}
}

export default App