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

import {
  CardBody,
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
// Dynamically import Chart component with SSR disabled
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const lineChartConfig = {
  type: "line",
  height: 240,
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
    title: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],

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
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const PieChartConfig = {
  type: "donut",
  width: 120,
  height: 120,
  series: [22],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#020617"],
    legend: {
      show: false,
    },
  },
};

const PiesChartConfig = {
  type: "area",
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
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
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
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
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

        <div className="   px-10   grid-cols-1 lg:grid-cols-2 grid w-full shadow-blue-gray-900/5 rounded-xl items-center text-center  justify-items-center  p-5   bg-white">
          {/* data and photo */}

          <div className=" flex  items-center   md:flex-nowrap  space-x-8">
            <div>
              <h3 className="    text-md font-semibold">Biometics & Data:</h3>

              {/* clients data */}
              <div className=" mt-5">
                <ul className=" space-y-1">
                  <li className=" flex  space-x-1 items-center text-sm">
                    <h4 className="  font-semibold text-black">Weight:</h4>
                    <p>185 lb</p>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <h4 className="  font-semibold text-black">Goal Weight:</h4>
                    <p>145 lb</p>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <h4 className="  font-semibold text-black">Age:</h4>
                    <p>35 Years Old</p>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <h4 className="  font-semibold text-black">Bio-gender:</h4>
                    <p>Female</p>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <h4 className="  font-semibold text-black">Pronouns:</h4>
                    <p>She/Her</p>
                  </li>
                  <li className=" flex  space-x-1 items-center text-sm">
                    <h4 className="  font-semibold text-black">Membership:</h4>
                    <p>Premium</p>
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
              <h3 className="  font-semibold text-xl">Weight:</h3>
              <p className=" text-sm text-right">
                Current Weight: <br /> 169lb{" "}
              </p>
            </div>
            <Card className="   shadow-none">
              <CardBody className="px-2 pb-0">
                <Chart {...lineChartConfig} />
              </CardBody>
            </Card>
          </div>
        </div>
        {/* Biomatric Card */}

        {/* Nutrition Card */}
        <div className="   gap-8  grid-cols-1 lg:grid-cols-2 grid w-full shadow-blue-gray-900/5 rounded-xl items-center text-center  justify-items-center   p-5   bg-white  ">
          <div className=" w-full">
            <Card className=" h-full ">
              <CardBody className=" w-full">
                <div>
                  <h1 className=" h-full text-left text-black font-semibold">
                    Nutrition
                  </h1>
                </div>

                <div className="   grid  grid-cols-2 md:grid-cols-3 ">
                  <Chart {...PieChartConfig} />
                  <Chart {...PieChartConfig} />
                  <Chart {...PieChartConfig} />

                  {/* <Chart {...PieChartConfig} /> */}
                </div>
              </CardBody>
            </Card>
          </div>

          <div className=" w-full">
            <div className=" flex justify-between cursor-pointer ">
              <h1 className="  text-left   font-semibold">
                Breakfast: <span>330</span> <span>cal</span>
              </h1>
              <ChevronDownIcon class="h-5 w-5  text-black" />
            </div>

            <div className=" mt-4 text-sm  flex justify-between   bg-[#f6f6f6] w-full p-3   rounded-xl">
              <div className=" flex-col items-start  text-left flex ">
                <p>Bacon, Smithfield</p>
                <p className=" text-xs">3 step</p>
              </div>
              <div>
                <p>180 Cal</p>
              </div>
            </div>

            <div className=" mt-2 text-sm  flex justify-between   bg-[#f6f6f6] w-full p-3   rounded-xl">
              <div className=" flex-col items-start  text-left flex ">
                <p>Bacon, Smithfield</p>
                <p className=" text-xs">3 step</p>
              </div>
              <div>
                <p>180 Cal</p>
              </div>
            </div>

            <div className=" mt-6 flex justify-between cursor-pointer ">
              <h1 className="  text-left   font-semibold">Lunch:</h1>
              <ChevronDownIcon class="h-5 w-5  text-black" />
            </div>

            <div className=" mt-6 flex justify-between cursor-pointer ">
              <h1 className="  text-left   font-semibold">
                Dinner: <span>330</span> <span>cal</span>
              </h1>
              <ChevronDownIcon class="h-5 w-5  text-black" />
            </div>
          </div>
        </div>

        {/* Hydration Card */}
        <div className="   gap-5  grid-cols-1 md:grid-cols-3  grid w-full shadow-blue-gray-900/5 rounded-xl items-center text-center  justify-items-center   p-5   bg-white  ">
          <div>
            <h1>Hydration</h1>
            <Chart {...PiesChartConfig} />
          </div>
          <div>
            <h1>Eating Window</h1>
            <Chart {...PiesChartConfig} />
          </div>
          <div>
            <h1>Walking</h1>
            <Chart {...PiesChartConfig} />
          </div>
        </div>

        {/* Daily Acitvity */}
        <Card className="  shadow-none p-5">
          <h1 className=" text-center font-semibold text-black">
            Daily Activity
          </h1>

          <div className=" grid grid-cols-1 md:grid-cols-3  mt-5 items-center justify-items-center gap-5">
            <div className="  rounded-lg bg-gray-200 p-5   h-[10rem] w-[10rem]">
              Resistance Traning
            </div>
            <div className="  rounded-lg bg-gray-200 p-5   h-[10rem] w-[10rem]">
              30-45 Min
            </div>
            <div className="  rounded-lg bg-gray-200 p-5   h-[10rem] w-[10rem]">
              Moderate
            </div>
          </div>
        </Card>
        <Card className="  shadow-none">
          <List>
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="candice"
                  src="https://docs.material-tailwind.com/img/face-1.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Education
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="alexander"
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Vision
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  Backend Developer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="emma"
                  src="https://docs.material-tailwind.com/img/face-3.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Stamina
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  UI/UX Designer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
          </List>
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
