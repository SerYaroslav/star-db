import React from 'react';

import ItemDetails, {Record} from '../item-details';
/* import SwapiService from '../../services/swapi-service'; */

import { SwapiServiceConsumer } from '../swapi-service-context';

/* const swapiService = new SwapiService();

const {
  getPlanet,
  getStarship,
  getPlanetImage,
  getStarshipImage,
} = swapiService; */


const PersonDetails = ({itemId}) => {

  return(
    <SwapiServiceConsumer>

      {
        (/* swapiService */ {getPerson, getPersonImage})=>{
          return(
            <ItemDetails itemId = {itemId}
                      getData={getPerson}
                      getImageUrl={getPersonImage}>

              <Record field='gender' label='Gender' />
              <Record field='birthYear' label='Birth Year' />
              <Record field='eyeColor' label='Eye Color' />

            </ItemDetails>
          )
        }
      }
      
    </SwapiServiceConsumer>
  );

};

const PlanetDetails = ({itemId}) => {
  
  return(
    <SwapiServiceConsumer>
      {
        (/* swapiService */{getPlanet,getPlanetImage})=>{
          return(

          <ItemDetails itemId = {itemId}
                          getData={getPlanet}
                          getImageUrl={getPlanetImage}>

            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation Period' />
            <Record field='diameter' label='Diameter' />

          </ItemDetails> 

          );
        }
      }
    </SwapiServiceConsumer>
  );
};

const StarshipDetails = ({itemId}) => {
  return(
    <SwapiServiceConsumer>
      {
        ({getStarship, getStarshipImage})=>{
          return(

            <ItemDetails itemId={itemId} 
                          getData={getStarship}
                          getImageUrl={getStarshipImage}>

              <Record field='model' label='Model'/>
              <Record field='manufacturer' label='Manufacturer' />
              <Record field='costInCredits' label='Cost In Credits' />
              <Record field='length' label='Length' />
              <Record field='crew' label='Crew' />
              <Record field='passengers' label='Passengers' />
              <Record field='cargoCapacity' label='Cargo Capacity' />
                
            </ItemDetails>

          )
        }
      }
    </SwapiServiceConsumer>
  )
};

export {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
};