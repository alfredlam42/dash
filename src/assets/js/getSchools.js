function getSchools(city){
  var commaIndex = city.indexOf(',');
  var cityOnly = city.slice(0, commaIndex);
  var schools = [];

  for (var i = 0; i < 5; i++){
    schools.push(`${cityOnly} School ${i+1}`);
  }

  return schools;
}

export default getSchools;