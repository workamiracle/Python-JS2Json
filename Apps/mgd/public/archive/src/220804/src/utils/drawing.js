export const formatArea = (area, selectedUnitType) => {
  let output;
  output = `${(Math.round(area * 100) / 100)}`;
  if (selectedUnitType === 'imperial') {

    let squareFeets = output * 10.76391042;
    if (squareFeets > 27878400) {
      let miles = squareFeets/27878400;
      output = { number: miles.toFixed(2), unit: 'milesSqaure', unitType: 'imperial' };
    } else {
      output = { number: squareFeets.toFixed(2), unit: 'feetSqaure', unitType: 'imperial' };
    }

  } else {

    if (area > 1000000) {
      output = { number: (Math.round(area / 1000000 * 100) / 100), unit: 'kmSquare', unitType: 'metric' };
    } else {
      output = { number: (Math.round(area * 100) / 100), unit: 'mSqaure', unitType: 'metric' };
    }

  }
  output.type = 'AREA';
  output.typeValue = area;
  output.value = numbersWithComa(output.number);
  return output;
};

export const lengthFunction = (length, selectedUnitType) => {
  let output;
  output = Math.round(length * 100) / 100;
  if (selectedUnitType === 'imperial') {
    let feets = output * 3.2808;

    if (feets > 5280) {
      let miles = feets / 5280;
      output = { number: miles.toFixed(2), unit: 'mi', unitType: 'imperial' };
    } else {
      output = { number: feets.toFixed(2), unit: 'ft', unitType: 'imperial' };
    }

  } else {
    if (length > 1000) {
      output = { number: (Math.round(length / 1000 * 100) / 100), unit: 'km', unitType: 'metric' };
    } else {
      output = { number: length.toFixed(2), unit: 'm', unitType: 'metric' };
    }
    
  }
  output.type = 'LENGTH';
  output.typeValue = length;
  output.value = numbersWithComa(output.number);
  return output;
};

export const stringDivider = (str, width, spaceReplacer) => {
  if (str.length > width) {
    var p = width;
    while (p > 0 && str[p] !== ' ' && str[p] !== '-') {
      p--;
    }
    if (p > 0) {
      var left;
      if (str.substring(p, p + 1) === '-') {
        left = str.substring(0, p + 1);
      } else {
        left = str.substring(0, p);
      }
      var right = str.substring(p + 1);
      return left + spaceReplacer + stringDivider(right, width, spaceReplacer);
    }
  }
  return str;
}

export const numbersWithComa = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const circleMeasurement = (radius, selectedUnitType) => {
  let output;
  let ciclrArea =  Math.PI * radius * radius;
  if (selectedUnitType === 'imperial') {

    let squareFeets = ciclrArea * 10.76391042;
    if (squareFeets > 27878400) {
      let miles = squareFeets/27878400;
      output = { number: miles.toFixed(2), unit: 'milesSqaure', unitType: 'imperial' };
    } else {
      output = { number: squareFeets.toFixed(2), unit: 'feetSqaure', unitType: 'imperial' };
    }

  } else {

    if (ciclrArea > 1000000) {
      output = { number: (Math.round(ciclrArea / 1000000 * 100) / 100), unit: 'kmSquare', unitType: 'metric' };
    } else {
      output = { number: (Math.round(ciclrArea * 100) / 100), unit: 'mSqaure', unitType: 'metric' };
    }

  }
  output.type = 'AREA';
  output.typeValue = ciclrArea;
  output.value = numbersWithComa(output.number);
  return output;
}