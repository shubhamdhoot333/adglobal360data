import React,{useState} from 'react'

function Weather() {
  const date = new Date();
  const [data,setData] = useState( {"cod":"404"} );  
  const [data11,setData11] = useState({"cod":"404"});
  const [search, setSearch] = useState(" ");
  
  let lat =0;
  let lon=0;
  
  
  
  
  const cityApidata = async(city) =>{
   
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=52149801a855fc0ca1a68e5fe29b91ea`)
    .then(res => res.json())
    .then(result=> {  
      lon=result.coord.lon ;
      lat=result.coord.lat;
      console.log(result)
     
      setData(result); 
    })
    .catch((error) => console.log(error)); 
      
  //  console.log(lon);
    //  console.log(lan);
   await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=52149801a855fc0ca1a68e5fe29b91ea`).then(res => res.json()).then(data1 => {
 
        console.log(data1.daily[0].temp.max)
        setData11(data1);
        })
  
  
  }

  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${search}`);
    cityApidata(search);
  }
 

  return (
    <>
 
    <nav className="navbar bg-primary">
          <h3 className="navbar-brand ">Weather App</h3>
    </nav>
   <div  className="container">
   <form onSubmit={handleSubmit}>

      <div className="row mt-3 ">
      <div className='col-lg-3 '></div>
                   <div className='col-lg-6 '>
                <input type="text" className="form-control" name="city" placeholder="Enter city name"   onChange={(e) => setSearch(e.target.value)}   /> 
            </div>
            <div className='col-lg-2'><button className="btn btn-success  btn-md" >Click Here </button></div>
            
      </div>
      </form>
      </div>

      { data?.cod==='404' ? (
    <div className="row mt-5">
    <div className="card text-center">
    <div className="card-header">
         data not found
    </div>
</div>


</div>

    ) :(    
      <div className="row mt-5">
          <div className="card text-center">
          <div className="card-header">
                  Weather Details
          </div>
          <div className="card-body">
               <h5 className="card-title"> City Name : { data ? data.name : data } </h5>
               <h5 className="card-title"> Temperature : { data ? Math.floor(data.main.temp_max-273.15): data }</h5>
                
           </div>
          <div className="card-footer text-muted">
             Today Data 
           </div>
      </div>
     </div>
  
     ) }
 { data11?.cod==='404' ? (
    <div className="row mt-5">
    <div className="card text-center">
    <div className="card-header">
         data not found
    </div>
</div>


</div>

    ) :(    
      <div className="row mt-5">
          <div className="card text-center">
          <div className="card-header">
                  Weather Details
          </div>
          <div className="card-body">
          <table className="table">
  <thead>
    <tr>
    
      <th >{ date.getDate() }</th>
      <th >{ date.getDate()+1 }</th>
      <th >{ date.getDate()+2 }</th>
      <th >{ date.getDate()+3 }</th>
      <th >{ date.getDate()+4 }</th>
      <th >{ date.getDate()+5 }</th>
      <th >{ date.getDate()+6 }</th>
      <th >{ date.getDate()+7 }</th>
      
      </tr>
  </thead>
  <tbody>
    <tr>
        {
          data11.daily.map((value,id)=> 
            <td key={id}> { value.temp.max } </td>
          )
        }
    </tr>
    </tbody>
</table>
           </div>
          <div className="card-footer text-muted">
             Today Data 
           </div>
      </div>
     </div>
    
     
      

        
      




     ) }
      

    
  
      
</>
  )
}

export default Weather