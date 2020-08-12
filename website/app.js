let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();
const generateButton = document.getElementById("generate");
const baseurl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apikey = '&appid=f9c93ee8c1dd995b3b58a4771b6cb6dc&units=metric';

// event listner 
generateButton.addEventListener("click",function generateTemprature(e) {
  const zipcode = document.getElementById("zip");
  const feelingsText = document.getElementById("feelings").value;
  const zipCodeRequired=zipcode.value;
  const getTemp = async (baseurl,zipCodeRequired,apikey)=>{
  const res = await fetch(baseurl+zipCodeRequired+apikey);
    try {
      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
    }
  }
  getTemp(baseurl,zipCodeRequired,apikey)
  .then(function(data){
  postData("/", {Temprature:data.main.temp, feeling:feelingsText, newDate:newDate});
  updateUI()
  })
});
const updateUI = async () => {
  const Date = document.getElementById("date");
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById("temp").innerHTML= `Temprature is : ${allData.Temprature} `;
    document.getElementById("content").innerHTML = `User feeling is : ${allData.feeling}`;
    document.getElementById("date").innerHTML = `Today date is : ${newDate}`

  }catch(error){
    console.log("error", error);
  }
}
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    });
      try {
        const newData = await response.json();
        return newData;
      } catch(error) {
      console.log("error", error);
      }
  }

