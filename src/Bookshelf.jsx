import React from 'react'
import { Grid } from 'semantic-ui-react'
import BookCard from './BookCard'

class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          books: []
        };
    }

    componentDidMount() {
      fetch('data.json')
      .then(res => res.json())
      .then(json => {
        const books = json.books;
        this.setState({ books })
      });
    }

    render() {
      return (
        <Grid>
          {this.state.books.map(book =>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <BookCard name={book.name} image={book.image} isbn={book.isbn} url={book.url} author={book.author} price={book.price} num={book.num} />
            </Grid.Column>
          )}
        </Grid>
      );
    }
}

export default Bookshelf