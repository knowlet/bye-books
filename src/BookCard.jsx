import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class BookCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card centered>
                <Image src={this.props.image} fluid dimmer />
                <Card.Content>
                <Card.Header>
                    <a href={this.props.url} target="_blank">{this.props.name}</a>
                </Card.Header>
                <Card.Meta>
                    <span className='date'>
                    {this.props.author}
                    </span>
                </Card.Meta>
                <Card.Description>
                    <p>ISBN: {this.props.isbn}</p>
                    NT${this.props.price}
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='book' />
                    {this.props.num}
                </a>
                </Card.Content>
            </Card>
        );
    }
}

export default BookCard