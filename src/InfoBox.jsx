import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox ({info}) {
    const IMG_URL = "https://images.unsplash.com/photo-1507369512168-9b7de6ec6be6?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    return(
        
        <div class="h-screen flex items-center justify-center">

        <div class="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden ">
        <div className='card-control'>
        <div className="flex justify:center">
        <img src="https://images.unsplash.com/photo-1731432245325-d820144afe4a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Weather Icon" className="h-16 w-16" />
      </div>
 
  
  

        <div class="p-1">
            <h2 class="text-4xl font-semibold text-red-500 mb-2">{info.city}</h2>
          
            <div class="flex items-center justify-center mb-2">
                <span class="text-4xl font-bold  text-yellow-500">{info.temp}&deg;C</span>
         </div>
        
        
         <div class="flex justify-center text-sm text-gray-600">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11c0-1.104-.896-2-2-2h-2V7a1 1 0 10-2 0v2H9V7a1 1 0 10-2 0v4H5a1 1 0 00-1 1v5a1 1 0 001 1h2v2a1 1 0 102 0v-2h4v2a1 1 0 102 0v-2h2a1 1 0 001-1v-5z" />
        </svg>
        <span>{info.humidity}</span> &nbsp;<p className=""> <b>Humidity</b></p>
        </div>
      </div>


      <div class="flex justify-center text-sm text-gray-600">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11c0-1.104-.896-2-2-2h-2V7a1 1 0 10-2 0v2H9V7a1 1 0 10-2 0v4H5a1 1 0 00-1 1v5a1 1 0 001 1h2v2a1 1 0 102 0v-2h4v2a1 1 0 102 0v-2h2a1 1 0 001-1v-5z" />
        </svg>
        <p class="mt-2 text-gray-500">Min Temperature = <b>{info.temp_min -5}&deg;C</b></p>
        </div>
      </div>


      <div class="flex justify-between text-sm text-gray-600">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-gray-500 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11c0-1.104-.896-2-2-2h-2V7a1 1 0 10-2 0v2H9V7a1 1 0 10-2 0v4H5a1 1 0 00-1 1v5a1 1 0 001 1h2v2a1 1 0 102 0v-2h4v2a1 1 0 102 0v-2h2a1 1 0 001-1v-5z" />
        </svg>
        <p class="mt-2 text-gray-500">Max Temperature = <b>{info.temp_max+8}&deg;C</b></p>
        </div>
      </div>
        </div>
       
     
        </div>
        </div>
        </div>
    )
};