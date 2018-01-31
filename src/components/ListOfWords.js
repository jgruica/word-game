import React, { Component } from 'react'


class ListOfWords extends Component {
    render() {
        return (
            <div className="listOfWords">
                <ul> WORDS 
                <br/> <br/>
                {this.props.words.map((name, index) =>
                  <li key={index}>{name}</li>
                    )}
        </ul>
            </div>
        )
    }
}

export default ListOfWords