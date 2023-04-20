import AppFilter from '../app-filter/app-filter'
import AppInfo from '../app-info/app-info'
import MovieList from '../movie-list/movie-list'
import MoviesAddForm from '../movies-add-form/movies-add-form'
import SearchPanel from '../search-panel/search-panel'
import './app.css'

const App = () => {
	const data = [
		{ name: 'Empire of Osman', viewers: 811, favourite: false, id: 1 },
		{ name: 'Ertugrul', viewers: 789, favourite: false, id: 2 },
		{ name: 'Osman', viewers: 1091, favourite: true, id: 3 },
	]

	return (
		<div className='app font-monospace'>
			<div className='content'>
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App