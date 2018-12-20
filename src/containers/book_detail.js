import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if(!this.props.book){
            return <div>Wybierz książkę</div>
        }
        return(
           <div>
               <h3>Szczegóły:</h3>
               <div>Tytuł: { this.props.book.title }</div>
               <div>Autor: { this.props.book.author }</div>
           </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
