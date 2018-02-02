import React, { Component } from 'react'
// let words = ['foo','bar', 'baz']
// let currentScore = [1,1,1]

// let wordsAndScores = {}
// words.forEach((key, i) => wordsAndScores[key] = currentScore[i])

class ListOfWords extends Component {
    render() {
        return (
            <div className="listOfWords">
                <ul> WORDS 
                <br/> <br/>
                {this.props.words.map((name, index) =>
                  <li key={index}>{name} {this.props.currentScore}</li>
                    )}
        </ul>
            </div>
        )
    }
}

export default ListOfWords