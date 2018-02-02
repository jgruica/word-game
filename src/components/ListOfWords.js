import React, { Component } from 'react'

function wordScore(word) {
    return word.length < 3 ? 0 : word.length - 2
}

class ListOfWords extends Component {
    render() {
        return (
            <div className="listOfWords">
                <ul> WORDS 
                <br/> <br/>
                {this.props.words.map((name, index) =>
                  <li key={index}>{name} {wordScore(name)}</li>
                )}
        </ul>
            </div>
        )
    }
}

export default ListOfWords