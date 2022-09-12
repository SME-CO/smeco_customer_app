import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import Navbarr from '../../components/Navbarr';
import SideNavr from "../../components/SideNavr";
import NotificationIcon from "@mui/icons-material/Notifications";
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
   labels: ["Appliances", "Toys & Games", "Electronics", "Sports & outdoors","Home & kitchen", "Cell Phone & Accessories"],
   datasets: [
      {
         label:'Product Categories',
         data: [20, 35, 50, 25, 20, 75],
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
   labels: ["Appliances", "Toys & Games", "Electronics", "Sports & outdoors","Home & kitchen", "Cell Phone & Accessories"],
   datasets: [
      {
         label:'Product Categories Count ',
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
   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
   datasets: [
      {
         label:'Purchases ',
         data: [20, 10, 80, 50, 60, 15],
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
               <div style={{ width: "500px", margin: "0 auto" }}>
                  <Bar data={data2} />
               </div>
            </div>

            <div className='pl-32'>
               
               <div>
               <p className=' shadow-2xl text-3xl p-10 my-4 rounded-lg  bg-zinc-200 '>Star Points : 100</p>
               </div>
               <div className='pt-4'>
               <p className='shadow-2xl text-3xl p-10 my-4 rounded-lg  bg-zinc-200 '>Rewards : 02</p>
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


