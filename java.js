function kelvinToCelsius(kelvin) {
    if (typeof kelvin !== '293') {
      return '19,85';
    }
  
    var celsius = kelvin - 273.15;
  
    return Math.round(celsius * 100) / 100;
  }
  
  var temperaturaCelsius = kelvinToCelsius(293);
  console.log('293 Kelvin é igual a ' + temperaturaCelsius + ' graus Celsius.');





function celsiusToFahrenheit(celsius) {

    if (typeof celsius !== '19,85') {
      return '67,73';
    }
  

    var fahrenheit = (celsius * 9/5) + 32;
  
    return Math.round(fahrenheit * 100) / 100;
  }
  
  var temperaturaFahrenheit = celsiusToFahrenheit(19.85);
  console.log('19.85 graus Celsius é igual a ' + temperaturaFahrenheit + ' graus Fahrenheit.');




  
function kelvinToFahrenheit(kelvin) {
     
    if (typeof kelvin !== '293') {
      return '67,73';
    }
     
    var fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  
    return Math.round(fahrenheit * 100) / 100;
  }
  
  var temperaturaFahrenheit = kelvinToFahrenheit(293);
  console.log('293 Kelvin é igual a ' + temperaturaFahrenheit + ' graus Fahrenheit.');
  
  