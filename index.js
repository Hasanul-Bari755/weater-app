const dataLoad = async(text) =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=835affe73557cb0c965b2d740fbe71ef`);
    const data =await response.json();
    displayLoad(data)

}
const displayLoad = (data) =>{
    
   // console.log(data)
     const displayDiv = document.getElementById('display');
     displayDiv.innerHTML = '';
     const {name,main} = data;
     const {temp} = main;
     const newDiv = document.createElement('div');
     newDiv.innerHTML = `
      <h2>City: ${name}</h2>
      <h3>Temperature: ${(temp-273.15).toFixed(2)}</h3>
     `
     displayDiv.appendChild(newDiv);
     
}

const searchCity = () =>{
    const textField = document.getElementById('input-field');
    const textFieldValue = textField.value;
    dataLoad(textFieldValue);
    textField.value = '';
}

