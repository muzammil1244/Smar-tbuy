import React, { useRef, useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Image, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // Get device width

const ImageSlider = () => {
  const images = [
"https://media.assets.sincrod.com/websites/content/gmps-singh/generic/progressive-2.0/eeb09e308c124cc89f361a8efa73859b_c0x0-1200x675.jpg",
"https://shop.bfi.org.uk/media/catalog/category/BF_KeyMessaging_2024__1180_x_526.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjG5BSM6EZTV8yzpETtNaH8F0UeA0tjT-P4Q&s"
 ];

  const scrollViewRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: currentIndex * width,
        animated: true,
      });
    }
  }, [currentIndex]);

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
      >
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 0,
  },
  image: {
    width: width,
    height: 150,
    resizeMode:"cover",
  },
});

export default ImageSlider;
