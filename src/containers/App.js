import React,{Component} from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'
import {setSearchField} from '../actions'

const mapStateToProps =(state) =>{
    return {
        searchField: state.searchField,
    }
}

const mapDispachToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
}

class App extends Component {
    constructor(){
        super();
        this.state= {
            robots : [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
    }

    render(){
        const {robots}=this.state;
        const {searchField, onSearchChange}=this.props;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length) {
            return(
                <div className='tc f-subheadline'>Please wait...Loading</div>
            )
            
        }
        else
        {
            return(
                <div className="tc">
                    <h1 className='f1' >RoboSearch</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                    <CardList robots = { filterRobots } />
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispachToProps)(App);