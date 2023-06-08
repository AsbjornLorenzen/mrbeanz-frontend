import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import TextComponent from './RenderText';
import DropdownComponent from './DropDownQuery'
import { queryBeans } from '../utils/api'

const QueryBox = (props) => {
  const { setCurrentCoffee, navigateTo } = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [textValue, setTextValue] = useState('');
  const [coffeeDataArray, setCoffeeDataArray] = useState('')

  const onSubmit = async (roast,farm,vendor) => {
    const beansArr = await queryBeans(roast,farm,vendor)
    setCoffeeDataArray(beansArr)
  }

  const roasteries = [
    ["1", 'Roaster Man'],
    ["2", 'Roasty Roaster'],
    ["3", 'Bean Hoppers'], 
    ["4", 'Nordic Roast'], 
    ["5", 'Brew House'],
    ["6", 'Munich Beans'], 
    ["7", 'Gothenburg Grind'],
    ["8", 'Nørrebro Roasters'],
    ["9", 'Frankfurt Craft'],
    ["10", 'Malmo Roast'], 
    ["11", 'Hamburg Java'],
    ["12", 'Arhus Artisan']
  ]

  const farms = [
    ["1",'Oslo, Norway'],
    ["2",'Roskilde, Denmark'],
    ["3",'Antigua, Guatemala'],
    ["4",'Tarrazu, Costa Rica'],
    ["5",'Sidamo, Ethiopia'],
    ["6",'Oaxaca, Mexico'],
    ["7",'Kona, Hawaii'],
    ["8",'Yirgacheffe, Ethiopia'],
    ["9",'Boquete, Panama'],
    ["10",'Blue Mountains, Jamaica'],
    ["11",'Matagalpa, Nicaragua'],
    ["12",'Huehuetenango, Guatemala'],
  ]

  const vendors = [
    [1, 'Esbjerg'],
    [2, 'Nyhavn, Copenhagen'],
    [3, 'Vesterbro, Copenhagen'],
    [4, 'Frederiksberg, Copenhagen'],
    [5, 'Christianshavn, Copenhagen'],
    [6, 'Osterbro, Copenhagen'],
    [7, 'Aarhus C, Aarhus'],
    [8, 'Trojborg, Aarhus'],
    [9, 'Norrebro, Copenhagen'],
    [10, 'Vesterbro, Aarhus'],
    [11, 'City Center, Copenhagen']
  ]

  return (
    <Box>
      <DropdownComponent onSubmit={onSubmit} roasteryoptions={roasteries} farmoptions={farms} vendoroptions={vendors}></DropdownComponent>
      {coffeeDataArray && coffeeDataArray.map((item, index) => (
        <TextComponent coffeeData={coffeeDataArray[index]} setCurrentCoffee={setCurrentCoffee} rateable={true} navigateTo={navigateTo}/>
      ))}
    </Box>
  );
};

export default QueryBox;