import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import {
   AiFillGift,
   AiFillHeart
 } from 'react-icons/ai'
import {
   Chart,
   ArcElement,
   LineElement,
   BarElement,
   PointElement,
   BarController,
   BubbleController,
   DoughnutController,
   LineController,
   PieController,
   PolarAreaController,
   RadarController,
   ScatterController,
   CategoryScale,
   LinearScale,
   LogarithmicScale,
   RadialLinearScale,
   TimeScale,
   TimeSeriesScale,
   Decimation,
   Filler,
   Legend,
   Title,
   Tooltip,
   SubTitle
} from 'chart.js';

Chart.register(
   ArcElement,
   LineElement,
   BarElement,
   PointElement,
   BarController,
   BubbleController,
   DoughnutController,
   LineController,
   PieController,
   PolarAreaController,
   RadarController,
   ScatterController,
   CategoryScale,
   LinearScale,
   LogarithmicScale,
   RadialLinearScale,
   TimeScale,
   TimeSeriesScale,
   Decimation,
   Filler,
   Legend,
   Title,
   Tooltip,
   SubTitle
);


//doughnut chart
const data = {
   labels: ["Top Choice", "Glitters", "Shoe Palace", "Fashion Wings","Stylish", "Your Choice"],
   datasets: [
      {
         label:'Offer Count',
         data: [12, 40, 20, 25, 5, 18],
         backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
         ],
         borderWidth: 1
      },
   ],
};


//bar chart
const data2 = {
   labels: ["Top Choice", "Glitters", "Shoe Palace", "Fashion Wings","Stylish", "Your Choice"],
   datasets: [
      {
         label:'Purchased Products count ',
         data: [80, 85, 50, 25, 20, 75],
         backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
         ],
         borderWidth: 1
      },
   ],
};

//line
const data3 = {
   labels: ["Top Choice", "Glitters", "Shoe Palace", "Stylish", "Your Choice", "Fashion Wings",],
   datasets: [
      {
         label:'Offer Count',
         data: [20, 6, 80, 30, 60, 15],
         backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
            'rgba(255, 99, 132)',
            'rgba(54, 162, 235)',
            'rgba(255, 206, 86)',
            'rgba(75, 192, 192)',
            'rgba(153, 102, 255)',
            'rgba(255, 159, 64)'
         ],
         borderWidth: 1
      },
   ],
};




const Dashboard = () => {
   return (
      <div>
         <Navbarr />
         <div className='flex flex-wrap pt-24 md:ml-80 '>

            {/* -------------------------------Bar Chart---------------------- */}
            <div>
               <div style={{ width: "600px", margin: "0 auto" }}>
                  <Bar data={data2} />
               </div>
            </div>

            <div className='pl-32'>

               <div className='pl-6 w-full shadow-2xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-50'>
                  <AiFillHeart className='mx-auto  fill-blue-400' size='2rem' />
                  <div className='text-center font-medium'>
                  <h2 className='text-l text-center py-8 text-zinc-500'>Star Points : 100</h2>  
                  </div>
               </div>

               <div className='w-full shadow-2xl flex flex-col p-3 my-4 rounded-lg hover:scale-105 duration-300 bg-zinc-50'>
                  <AiFillGift className='mx-auto  fill-blue-400' size='2rem' />
                  <div className='text-center font-medium'>
                  <h2 className='text-l text-center py-8 text-zinc-500'>Rewards : 02</h2>  
                  </div>
               </div>
             </div>

              {/* --------------------Doughnut chart----------------------- */}
              <div className='pr-24'>
               <div style={{ width: "400px", margin: "0 auto" }}>
                  <Doughnut data={data} />
               </div>
            </div>


            {/* --------------------------Line------------------------- */}
            <div className='pt-24'>
               <div style={{ width: "500px", margin: "0 auto" }}>
                  <Line data={data3} />
               </div>
            </div>
            <br />
         </div>
         <SideNavr />
      </div>
   );
}

export default Dashboard

