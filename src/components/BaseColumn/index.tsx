import React, { useState, useEffect } from 'react';
import { Column, ColumnConfig } from '@ant-design/plots';
import { ChartsProps } from '../../typings';

const BaseColumn = (props: ChartsProps) => {
  const { config, className } = props
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const columnConfig: ColumnConfig = {
    height: 300,
    data,
    xField: '城市',
    yField: '销售额',
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
    ...config,
  };

  return (
    <div className={className}>
      <Column {...columnConfig} />
    </div>
  )
};

export default BaseColumn
