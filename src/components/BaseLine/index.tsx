import { useState, useEffect } from 'react';
import { Line, LineConfig } from '@ant-design/plots';
import { ChartsProps } from '../../typings';

const BaseLine = (props: ChartsProps) => {
  const { config, className } = props

  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const lineConfig: LineConfig = {
    height: 300,
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
    ...config,
  };

  return (
    <div className={className}>
      <Line {...lineConfig} />
    </div>
  )
};

export default BaseLine
