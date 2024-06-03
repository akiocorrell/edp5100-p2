//
//nedb documentation: https://github.com/louischatriot/nedb/blob/master/README.md
//
import { createD3CircleSvg } from "./d3SvgHelpers.js";

async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  const updatedData = data.map((d) => {
    return {
      name: d.mood,
      color: d.color,
      value: Number(d.range)
    };

  })

  return {
    name: "we feel",
    children: updatedData
  }

  // below is just a sample data
  return {
    name: "flare",
    children: [
      {
        name: "happy",
        color: "#dfd65d",
        value: 10
      },
      {
        name: "sad",
        color: "#c5c530",
        value: 5
      }
    ]
  };
  
}



const data = await getData();

const svgdata = createD3CircleSvg(data);

// console.log(svgdata);

const viz = document.getElementById("chart");
viz.appendChild(svgdata);
