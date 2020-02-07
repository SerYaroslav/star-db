import React from 'react';

import ItemList from '../item-list';
import { withData, withChildFunction} from '../hoc-helper';
import SwapiService from '../../services/swapi-service';


const swapiService = new SwapiService();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships,
} = swapiService;




/* const ListWithChildren = withChildFunction(
  ItemList, 
  ({name}) => <span>{name}</span>
); */

const renderName = ({name}) => <span>{name}</span>;
const renderNameAndModel = ({name, model}) => <span>{name} ({model})</span>;


const PersonList = withData(withChildFunction(ItemList, renderName), 
                            getAllPeople);

const PlanetList = withData(withChildFunction(ItemList, renderName),
                            getAllPlanets);

const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), 
                              getAllStarships);

export {
  PersonList,
  PlanetList,
  StarshipList,
};