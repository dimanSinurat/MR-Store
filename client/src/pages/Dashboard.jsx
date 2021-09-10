import React, {useEffect} from 'react';
import Banner from '../components/Banner.jsx'
import CategoryCard from '../components/CategoryCard.jsx';
import FoodBanner from '../components/BannerFood.jsx';
import List from '../components/List.jsx';
import Footer from '../components/Footer.jsx'
import FoodPoster from '../_Assets/Food-Android-Wallpaper.jpg';

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="w-12/12 h-full bg-blue-600">
      <Banner />
      <CategoryCard
        title="MENS'S"
        subTitle="CLOTHING"
        icon="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/category1-1.png"
        image="https://cdn.idntimes.com/content-images/community/2019/01/gq-boots-wth-suit-ryang03-8bb7ab7ec63994293367b4e9c8f986c5.jpeg"
      />

      <CategoryCard
        title="WOMAN"
        subTitle="CLOTHING"
        icon="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/category2-1.png"
        image="https://stylesatlife.com/wp-content/uploads/2020/05/Shiny-Grey-Solid-Shirt.jpg.webp"
      />

      <FoodBanner />

      <CategoryCard
        title="FOOD"
        subTitle="SNACK"
        icon="https://themes.themeregion.com/carrito/wp-content/uploads/2017/12/category4-1.png"
        image={FoodPoster}
      />
      <List />
      <Footer />
    </div>
  )
}
