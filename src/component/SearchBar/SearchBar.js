 import React from "react";
 import "./SearchBar.css";
 
class SearchBar extends React.Component{
     constructor(props){
         super(props);
         this.state={
             term:""
         };
     }
     handleTermChange = (event) => {
         this.setState({term: event.target.value});
     }
     search = () => {
         this.props.onSearch(this.state.term);
     }
     handeEnter = (event) => {
         if(event.keyCode === 13){
             this.search();
         }
     }
     render(){
         return(
             <div className="SearchBar">
             <input placeholder="Enter song, album or artist" onChange={this.handleTermChange} onKeyUp={this.handeEnter}/>
             <button type="button" className="Searchbuttom" onClick={this.search}>
             SEARCH
             </button>
             </div>
         );
     }
 }
 export default SearchBar;