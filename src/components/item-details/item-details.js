import React, { Component } from 'react';

import SwapiService from "../../services/swapi-service";

import './item-details.css';
import Spinner from '../spinner';


const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();
  
  state = {
    item: null,
    image: null,

    loading: true,
    error: false,
  };

  componentDidMount(){
    this.updateItem();
  }

  componentDidUpdate( prevProps ){
    if (
    (this.props.itemId !== prevProps.itemId) 
    ||
    (this.props.loading !== prevProps.loading)
    ){
      this.updateItem();
    }
  }

  updateItem() {
    const {itemId, getData, getImageUrl} = this.props;
    
    if (!itemId) {
      return ;
    }
    
    this.setLoading()
    
    getData(itemId)
      .then((item) => {
        this.setState({
          item,
          loading: false,
          image: getImageUrl(item)
        })
      })
      
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  };

  setLoading = () => {
    this.setState({
      loading: true,
    });
  }

  render() {

    
    const { item, image, loading } = this.state;
    
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    if(loading){
      return <Spinner/>
    }

    const { name } = item;
    
    return (
      <div className="item-details card">
        <img className="item-image"
        src={image} 

        alt='item'/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>

    );
  }
}

