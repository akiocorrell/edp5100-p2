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
    name: "we feel wall",
    children: updatedData
  }
}

const data = await getData();
const svgdata = createD3CircleSvg(data);

const viz = document.getElementById("chart");
viz.appendChild(svgdata);

