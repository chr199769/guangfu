import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge,GaugeConfig } from '@ant-design/plots';

const DemoGauge = () => {
  const config:GaugeConfig = {
    percent: 75,
    range: {
      color: '#30BF78',
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v:any) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }:any) =>`湿度：${percent}` ,
        style: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: '48',
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge