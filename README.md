# Slider

## Dynamic Slide Style

based on index 设置每张 Slide 的位置
```jsx
<article style={{transform: `translateX(${100 * index}%`}}>
```

## React Slick

[React Slick](https://react-slick.neostack.com/) 是基于React构建的轮播组件。

1. install react-slick library
   ```sh
   npm install react-slick --save
   ```
2. install the css
   ```sh
   npm install slick-carousel --save
   ```
3. import css
   ```jsx
   import "slick-carousel/slick/slick.css"; 
   import "slick-carousel/slick/slick-theme.css";
   ```
4. import silder
   ```jsx
   import Slider from "react-slick";
   ```
5. settings
   ```jsx
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
   ```
6. spread the settings
  ```jsx
  <Slider {...settings}>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  <div>...</div>
  </Slider>
  ```