import React, { Component } from 'react'

class ListOfWords extends Component {
    render() {
        return (
            <div className="listOfWords">
                <ul> WORDS
                <br /> <br />
                    {this.props.words.map((scoredWord, index) =>
                        <li key={index}>{scoredWord.word} {scoredWord.score}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ListOfWords