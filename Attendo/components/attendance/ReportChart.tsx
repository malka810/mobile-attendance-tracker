// import Svg, { Rect, Text as SvgText } from "react-native-svg";


// type Datum = { label: string; value: number };
// export const ReportChart = ({ data }: { data: Datum[] }) => {
// const width = 320; const height = 180; const padding = 24;
// const max = Math.max(1, ...data.map(d => d.value));
// const barW = (width - padding * 2) / data.length - 8;
// return (
// <Svg width={width} height={height}>
// {data.map((d, i) => {
// const x = padding + i * (barW + 8);
// const h = (d.value / max) * (height - padding * 2);
// const y = height - padding - h;
// return (
// <>
// <Rect key={`b-${i}`} x={x} y={y} width={barW} height={h} fill="#2563eb" rx={6} />
// <SvgText key={`t-${i}`} x={x + barW / 2} y={height - padding / 2} fontSize={12} textAnchor="middle">{d.label}</SvgText>
// </>
// );
// })}
// </Svg>
// );
// };