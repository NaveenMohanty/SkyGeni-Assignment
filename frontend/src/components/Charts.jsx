import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data = [] }) => {
  const ref = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 400;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 60 };

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.closed_fiscal_quarter))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.acv)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const tooltip = d3.select(tooltipRef.current);

    svg
      .append('g')
      .attr('transform', `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg.append('g').attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

    svg
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.closed_fiscal_quarter))
      .attr('y', (d) => y(d.acv))
      .attr('width', x.bandwidth())
      .attr('height', (d) => y(0) - y(d.acv))
      .attr('fill', '#3f51b5')
      .on('mouseover', (event, d) => {
        tooltip
          .style('opacity', 1)
          .html(
            `<strong>Industry:</strong> ${d.Acct_Industry}<br/>
             <strong>Quarter:</strong> ${d.closed_fiscal_quarter}<br/>
             <strong>ACV:</strong> $${d.acv.toLocaleString()}<br/>
             <strong>Count:</strong> ${d.count}`
          )
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', () => {
        tooltip.style('opacity', 0);
      });
  }, [data]);

  return (
    <>
      <svg ref={ref} width={400} height={300}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          textAlign: 'left',
          padding: '6px 10px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          pointerEvents: 'none',
          fontSize: '12px',
          color: '#333',
          opacity: 0,
          boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
        }}
      ></div>
    </>
  );
};

const DoughnutChart = ({ data = [] }) => {
  const ref = useRef();
  const tooltipRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.acv);
    const arc = d3.arc().innerRadius(60).outerRadius(radius);

    const g = svg.append('g').attr('transform', `translate(${width / 2},${height / 2})`);

    const tooltip = d3.select(tooltipRef.current);

    const arcs = g.selectAll('arc').data(pie(data)).enter().append('g');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (_, i) => color(i))
      .on('mouseover', (event, d) => {
        tooltip
          .style('opacity', 1)
          .html(
            `<strong>Team:</strong> ${d.data.Team || '—'}<br/>
             <strong>Quarter:</strong> ${d.data.closed_fiscal_quarter}<br/>
             <strong>ACV:</strong> $${d.data.acv.toLocaleString()}`
          )
          .style('left', event.pageX + 10 + 'px')
          .style('top', event.pageY - 28 + 'px');
      })
      .on('mouseout', () => {
        tooltip.style('opacity', 0);
      });

    arcs
      .append('text')
      .attr('transform', (d) => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '10px')
      .text((d) => d.data.Team);
  }, [data]);

  return (
    <>
      <svg ref={ref} width={300} height={300}></svg>
      <div
        ref={tooltipRef}
        style={{
          position: 'absolute',
          textAlign: 'left',
          padding: '6px 10px',
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '4px',
          pointerEvents: 'none',
          fontSize: '12px',
          color: '#333',
          opacity: 0,
          boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',
        }}
      ></div>
    </>
  );
};

export { DoughnutChart, BarChart };
