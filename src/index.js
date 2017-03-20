import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let contacts =[{
  id:1,
  name: 'พาราเซตามอล',
  typemed:'เม็ด',
  date: 'เช้า เย็น',
  web: 'https://medthai.com/%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B9%80%E0%B8%8B%E0%B8%95%E0%B8%B2%E0%B8%A1%E0%B8%AD%E0%B8%A5/'


},{
  id:2,
  name: 'แอสไพริน',
  typemed:'เม็ด',
  date: 'เช้า กลางวัน เย็น',
  web: 'https://medthai.com/%E0%B9%81%E0%B8%AD%E0%B8%AA%E0%B9%84%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%99/'

},{
  id:3,
  name: 'ไดเฟนไฮดรามีน',
  typemed:'เม็ด',
  date: 'เช้า',
  web: 'https://medthai.com/%E0%B9%84%E0%B8%94%E0%B9%80%E0%B8%9F%E0%B8%99%E0%B9%84%E0%B8%AE%E0%B8%94%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%B5%E0%B8%99/'
},
{
  id:4,
  name:'ยาธาตุน้ำแดง',
  typemed:'น้ำ',
  date:'เช้า เย็น',
  web:'https://medthai.com/%E0%B8%A2%E0%B8%B2%E0%B8%98%E0%B8%B2%E0%B8%95%E0%B8%B8%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B9%81%E0%B8%94%E0%B8%87/',
},
{
  id:'5',
  name:'ยาแก้ไอน้ำดำ',
  typemed:'น้ำ',
  date:'เช้า เย็น',
  web:'https://medthai.com/%E0%B8%A2%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%89%E0%B9%84%E0%B8%AD%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B3/',
}

]
ReactDOM.render(
  <App contacts={contacts}/>,
  document.getElementById('root')
);
