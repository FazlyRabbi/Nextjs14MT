"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import dynamic from "next/dynamic";
import {
  Bars3BottomLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import women from "../app/img/women.jpg";

import { Card, Typography } from "@material-tailwind/react";

// Dynamically import Chart component with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const chartConfig = {
  type: "line",
  height: 200,
  width: 200,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },

      // labels: {
      //   style: {
      //     colors: "#616161",
      //     fontSize: "12px",
      //     fontFamily: "inherit",
      //     fontWeight: 400,
      //   },
      // },
      // categories: [
      //   "Apr",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sep",
      //   "Oct",
      //   "Nov",
      //   "Dec",
      // ],
    },
    // yaxis: {
    //   labels: {
    //     style: {
    //       colors: "#616161",
    //       fontSize: "12px",
    //       fontFamily: "inherit",
    //       fontWeight: 400,
    //     },
    //   },
    // },
    // grid: {
    //   show: true,
    //   borderColor: "#dddddd",
    //   strokeDashArray: 5,
    //   xaxis: {
    //     lines: {
    //       show: true,
    //     },
    //   },
    //   padding: {
    //     top: 5,
    //     right: 20,
    //   },
    // },

    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "light",
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
};

const chartConfig2 = {
  type: "line",
  height: 300,
  width: 300,
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },

    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },

      // labels: {
      //   style: {
      //     colors: "#616161",
      //     fontSize: "12px",
      //     fontFamily: "inherit",
      //     fontWeight: 400,
      //   },
      // },
      // categories: [
      //   "Apr",
      //   "May",
      //   "Jun",
      //   "Jul",
      //   "Aug",
      //   "Sep",
      //   "Oct",
      //   "Nov",
      //   "Dec",
      // ],
    },
    // yaxis: {
    //   labels: {
    //     style: {
    //       colors: "#616161",
    //       fontSize: "12px",
    //       fontFamily: "inherit",
    //       fontWeight: 400,
    //     },
    //   },
    // },
    // grid: {
    //   show: true,
    //   borderColor: "#dddddd",
    //   strokeDashArray: 5,
    //   xaxis: {
    //     lines: {
    //       show: true,
    //     },
    //   },
    //   padding: {
    //     top: 5,
    //     right: 20,
    //   },
    // },

    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "light",
    },
  },

  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      gradientToColors: ["#FDD835"],
      shadeIntensity: 1,
      type: "horizontal",
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100, 100, 100],
    },
  },
};

const radialBar = {
  type: "radialBar",
  width: 200,
  height: 200,
  series: [67],

  options: {
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "50%", // Adjust hollow size as needed
        },

        dataLabels: {
          name: {
            offsetY: -10,
            color: "#888",
            fontSize: "15px",
          },
          value: {
            color: "#111",
            fontSize: "20px",
          },
        },
      },
    },

    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#87D4F9"],
        stops: [0, 100],
      },
    },

    colors: ["#259EFA"],

    legend: {
      show: false,
    },
  },
};

export default function page() {
  const [mobile, setMobile] = useState(false);

  return (
    <div className="   grid  grid-cols-12 relative ">
      <Sidebar mobile={mobile} />

      <div
        className="col-span-12  mt-10 lg:mt-0 p-5 
        lg:ml-[330px] grid    grid-cols-1 2xl:grid-cols-2 gap-5  "
      >
        {/* Biomatric Card */}

        <div className="      grid-cols-1 lg:grid-cols-2 grid w-full shadow-blue-gray-900/5 rounded-xl items-center text-center  justify-items-center  p-5   bg-white">
          {/* data and photo */}

          <div className=" flex  items-center   md:flex-nowrap  space-x-8">
            <div>
              {/* clients data */}
              <div className=" mt-5">
                <Typography variant="h5">Biometics & Data:</Typography>
                <ul className=" space-y-1 mt-5">
                  <li className=" flex  space-x-1 items-center text-sm">
                    <Typography variant="h6">Weight:</Typography>
                    <Typography variant="paragraph">185 lb</Typography>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <Typography variant="h6">Goal Weight:</Typography>
                    <Typography variant="paragraph">141 lb</Typography>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <Typography variant="h6">Age:</Typography>
                    <Typography variant="paragraph">35 Years Old</Typography>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <Typography variant="h6">Bio-gender:</Typography>
                    <Typography variant="paragraph">Female</Typography>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <Typography variant="h6">Pronouns:</Typography>
                    <Typography variant="paragraph">She/Her</Typography>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <Typography variant="h6">Membership:</Typography>
                    <Typography variant="paragraph">Premium</Typography>
                  </li>
                </ul>
              </div>
              {/* clients data */}
            </div>

            <Image src={women} alt="profile" className=" mb-2" height={100} />
          </div>

          {/* line chart */}
          <div className=" mt-5  lg:mt-0 ">
            <div className=" flex   justify-between ">
              <Typography variant="h5">Weight:</Typography>

              <Typography variant="small" className="  text-right">
                {" "}
                Current Weight: <br /> 169lb{" "}
              </Typography>
            </div>

            <Chart {...chartConfig2} />
          </div>
        </div>
        {/* Biomatric Card */}

        {/* Nutrition Card */}
        <div className="   gap-8  grid-cols-1 lg:grid-cols-3 grid w-full shadow-blue-gray-900/5 rounded-xl  text-center  justify-items-center   p-8   bg-white  ">
          <Card className=" h-full p-5  col-span-2 ">
            <Typography variant="h6" className=" text-black text-left">
              Nutrition
            </Typography>

            <div className="   grid  grid-cols-2  xl:grid-cols-2  ">
              <Chart {...radialBar} />
              <Chart {...radialBar} />
              <Chart {...radialBar} />
            </div>
          </Card>

          <div>
            <div className=" flex justify-between cursor-pointer ">
              <Typography variant="h6" className=" text-black text-left">
                Breakfast: <span>330</span> <span>cal</span>
              </Typography>

              <ChevronDownIcon class="h-5 w-5  text-black" />
            </div>

            <div className=" mt-4 text-sm  flex justify-between   bg-[#f6f6f6] w-full p-3   rounded-xl">
              <div className=" flex-col items-start  text-left flex ">
                <Typography variant="small" className=" text-black text-left">
                  Bacon, Smithfield
                </Typography>

                <Typography variant="small" className=" text-black text-left">
                  3 step
                </Typography>
              </div>
              <div>
                <p>180 Cal</p>
              </div>
            </div>

            <div className=" mt-2 text-sm  flex justify-between   bg-[#f6f6f6] w-full p-3   rounded-xl">
              <div className=" flex-col items-start  text-left flex ">
                <Typography variant="small" className=" text-black text-left">
                  Bacon, Smithfield
                </Typography>

                <Typography variant="small" className=" text-black text-left">
                  3 step
                </Typography>
              </div>
              <div>
                <p>180 Cal</p>
              </div>
            </div>

            <div className=" mt-6 flex justify-between cursor-pointer ">
              <Typography variant="h6" className=" text-black text-left">
                Lunch: <span>330</span> <span>cal</span>
              </Typography>
              <ChevronDownIcon className="h-5 w-5  text-black" />
            </div>
            <div className=" mt-6 flex justify-between cursor-pointer ">
              <Typography variant="h6" className=" text-black text-left">
                Dinner: <span>330</span> <span>cal</span>
              </Typography>
              <ChevronDownIcon className="h-5 w-5  text-black" />
            </div>
          </div>
        </div>

        {/* Hydration Card */}
        <div className="   gap-5  grid-cols-1 md:grid-cols-3  grid w-full shadow-blue-gray-900/5 rounded-xl items-center text-center  justify-items-center    px-10  p-5   bg-white  ">
          <div>
            <Typography variant="h6">Hydration</Typography>
            <Chart {...chartConfig} />
          </div>
          <div>
            <Typography variant="h6">Eating Window</Typography>
            <Chart {...chartConfig} />
          </div>
          <div>
            <Typography variant="h6">Walking</Typography>
            <Chart {...chartConfig} />
          </div>
        </div>

        {/* Daily Acitvity */}
        <Card className="  shadow-none p-5">
          <Typography variant="h6" className=" text-center  text-black">
            {" "}
            Daily Activity
          </Typography>

          <div className=" grid grid-cols-1 md:grid-cols-3  mt-5 items-center justify-items-center gap-5">
            <div className="  rounded-lg bg-gray-200 p-5   h-[10rem] w-[10rem]">
              <Typography variant="small"> Resistance Traning</Typography>
            </div>
            <div className="  rounded-lg bg-gray-200 p-5   h-[10rem] w-[10rem]">
              <Typography variant="small"> 30-45 Min</Typography>
            </div>
            <div className="  rounded-lg bg-gray-200 p-5   h-[10rem] w-[10rem]">
              <Typography variant="small"> Moderate</Typography>
            </div>
          </div>
        </Card>
      </div>
      {/* =============================== */}
      {/* menu icon */}
      <div>
        <Bars3BottomLeftIcon
          onClick={() => setMobile(!mobile)}
          className="h-6 w-6   absolute right-5 top-[1rem] lg:hidden   cursor-pointer  text-black font-bold"
        />
      </div>
    </div>
  );
}
