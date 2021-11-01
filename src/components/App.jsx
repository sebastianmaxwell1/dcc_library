import react,{Component} from "react";
import './App.css';
import TitleBar  from "./TitleBar/TitleBar";

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "The 50th Law", author: "50 Cent & Robert Greene"},
            {title: "The Hobbit", author: "J.R.R Tolkein"},
            {title: "The Lord of the Rings", author: "J.R.R Tolkein"},

        ];
        this.state = {
            bookNumber: 0
        };
    }


    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className="col-md-4"></div>
                {/* Button for previous */}
                <div className="col-md-4"></div>
                {/* Book Display */}
                    <h1>{this.books[this.state.bookNumber].title}</h1>
                    <h4>{this.books[this.state.bookNumber].author}</h4>
                <div className="col-md-4"></div>
                {/* Button for Next Book */}
            </div>
        )
    }
}

export default App;