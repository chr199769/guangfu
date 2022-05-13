import React, { useState, useEffect } from 'react';
import { DotMap, DotMapConfig } from '@ant-design/maps';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const Map = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });
  let navigate = useNavigate();

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/xZqmXatMnc/quanguojiaotongshijianxiangyingzhishu.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  const config: DotMapConfig = {
    map: {
      type: 'mapbox',
      style: 'dark',
      width: 400,
      height: 400,
      center: [102.447303, 37.753574],
      zoom: 2,
      minZoom: 2,
      maxZoom: 20,
      pitch: 0,
    },
    source: {
      data: data,
      parser: {
        type: 'geojson',
      },
    },
    autoFit: true,
    color: '#4cfd47',
    size: 20,
    animate: true,
    state: {
      active: true,
    },
    label: {
      field: 'cityName',
      style: {
        fill: '#fff',
        fontSize: 12,
        textAnchor: 'top',
        textOffset: [0, 20],
      },
    },
    zoom: {
      position: 'bottomright',
    },
    layerMenu: {
      position: 'topright',
    },
    tooltip: {
      items: [
        { 
          field: 'cityName',
          alias: '名称',
        },
      ],
    },
  };

  return (
    <div className={styles['map-container']}>
      <DotMap
        {...config}
        onReady={dotMap => {
          dotMap.on('dotLayer:click', (e) => {
            navigate(`/monitor/${e.featureId}`)
          })
        }}
      />
    </div>
  )
};

export default Map
