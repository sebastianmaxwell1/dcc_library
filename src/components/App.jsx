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

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber--;
        if (tempBookNumber < 0){
            tempBookNumber = this.books.length - 1
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }


    render(){
        return (
            <div className="container-fluid">
                <TitleBar />
                <div className= "row">
                    <div className="col-md-4">
                    <button onClick={this.goToPreviousBook}>Previous Book</button>
                    </div>
                    {/* Button for previous */}
                    <div className="col-md-4">
                    {/* Book Display */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/* Button for Next Book */}
                        <button onClick={this.goToNextBook}>Next Book</button>
                        </div>
                    </div>
            </div>
        )
    }


}

export default App;