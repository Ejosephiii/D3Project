import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import "./Histogram.css"; // Importing the CSS file
import axios from "axios";

const Histogram = ({ data }) => {
  const ref = useRef();
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    // Filter data for the selected year and the four subsequent years
    const yearData = data.filter(
      (d) => d.year >= gameData && d.year < gameData + 5
    );

    // Define the dimensions of the chart
    const width = 800;
    const height = 400;
    const margin = { top: 20, right: 20, bottom: 60, left: 60 };

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(yearData.map((d) => d.year))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(yearData, (d) => d.rating)])
      .range([height - margin.bottom, margin.top]);

    // Create SVG container
    const svg = d3
      .select(ref.current)
      .attr("width", width)
      .attr("height", height);

    // Clear previous chart
    svg.selectAll("*").remove();

    // Create bars
    const bars = svg
      .selectAll("rect")
      .data(yearData)
      .join("rect")
      .attr("class", "bar") // Add class "bar" to the bars
      .attr("x", (d) => xScale(d.year))
      .attr("y", (d) => yScale(d.rating))
      .attr("rx", 5) // Rounded corners
      .attr("ry", 5) // Rounded corners
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => yScale(0) - yScale(d.rating))
      .attr("fill", "steelblue");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end");

    // Create y-axis
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Add y-axis title
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", margin.left / 2 - 10)
      .attr("x", -(height / 2))
      .style("text-anchor", "middle")
      .text("Rating");

    // Add x-axis title
    svg
      .append("text")
      .attr("y", height - margin.bottom / 2 + 10)
      .attr("x", width / 2)
      .style("text-anchor", "middle")
      .text("Years");

    // Add names of the games above the bars
    svg
      .selectAll("text.game-name")
      .data(yearData)
      .join("text")
      .attr("class", "game-name")
      .attr("x", (d) => xScale(d.year) + xScale.bandwidth() / 2)
      .attr("y", (d) => yScale(d.rating) - 5)
      .attr("text-anchor", "middle")
      .text((d) => d.name);
  }, [gameData]);

  return (
    <div className="histogram-container">
      <h1>Best Selling Video Games </h1>
      <div className="scrollbar-container">
        {" "}
        {/* New container for the scrollbar */}
        <input
          type="range"
          min="1980"
          max="2019"
          value={gameData}
          onChange={(e) => setGameData(+e.target.value)}
        />
        <p>
          Years: {gameData} - {gameData + 4}
        </p>
      </div>
      <svg ref={ref}></svg>
    </div>
  );
};

export default Histogram;
