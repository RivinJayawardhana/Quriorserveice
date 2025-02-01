import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
  chart: {
    height: 340,
    type: 'line',
    toolbar: {
      show: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 4  // Increased line width to make the line more bold
  },
  grid: {
    strokeDashArray: 4
  },
  xaxis: {
    type: 'datetime',
    categories: [
      '2018-05-19T00:00:00.000Z',
      '2018-06-19T00:00:00.000Z',
      '2018-07-19T01:30:00.000Z',
      '2018-08-19T02:30:00.000Z',
      '2018-09-19T03:30:00.000Z',
      '2018-10-19T04:30:00.000Z',
      '2018-11-19T05:30:00.000Z',
      '2018-12-19T06:30:00.000Z'
    ],
    labels: {
      format: 'MMM'
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    show: false
  },
  tooltip: {
    x: {
      format: 'MM'
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.6,
      gradientToColors: ['#FF7A8C'], // Rose color
      inverseColors: false,
      opacityFrom: 0.7,
      opacityTo: 0.2,
      stops: [0, 100]
    }
  },
  colors: ['#FF4891'],  // Gradient starting color (pink)
};

// ==============================|| REPORT AREA CHART ||============================== //

export default function ReportAreaChart() {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState) => ({
      ...prevState,
      colors: ['#FF4891'], // Gradient starting color (pink)
      xaxis: {
        labels: {
          style: {
            colors: [secondary, secondary, secondary, secondary, secondary, secondary, secondary, secondary]
          }
        }
      },
      grid: {
        borderColor: line
      },
      legend: {
        labels: {
          colors: 'grey.500'
        }
      }
    }));
  }, [primary, secondary, line, theme]);

  const [series] = useState([
    {
      name: 'Series 1',
      data: [58, 115, 28, 83, 63, 75, 35, 55]
    }
  ]);

  return (
    <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', }}>Reports</h3>
      <ReactApexChart options={options} series={series} type="line" height={340} />
    </div>
  );
}
