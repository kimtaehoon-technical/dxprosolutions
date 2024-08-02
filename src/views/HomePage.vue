<template>
  <div class="home">
    <div class="slider">
      <div class="arrow left-arrow" @click="prevSlide">
        <span>«</span>
      </div>
      <transition-group name="slide" tag="div">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :style="{ transform: 'translateX(' + (index - currentIndex) * 100 + '%)' }">
          <img :src="slide.image" alt="Slide" class="slide-image">
          <div class="slide-text">{{ slide.text }}</div>
        </div>
      </transition-group>
      <div class="arrow right-arrow" @click="nextSlide">
        <span>»</span>
      </div>
    </div>

    <div class="section">
      <img src="/images/DXHOME_4.jpg" alt="Company Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>ようこそ！！DXPROソリューションズへ</h2>
        <p>DXPRO SOLUTIONSは、<br>お客様のビジネスの成長と成功を支援します。</p>
        <router-link to="/services/greeting" class="section-button">会社案内</router-link>
      </div>
    </div>

    <div class="section">
      <img src="/images/DXHOME_5.jpg" alt="Service Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>DXPROソリューションズの得意</h2>
        <p>お客様の多様なニーズに応えるため、幅広いサービスを提供しています。</p>
        <router-link to="/about" class="section-button">事業紹介</router-link>
      </div>
    </div>

    <div class="section">
      <img src="/images/DXHOME_6.jpg" alt="Contact Us" class="section-image round-image">
      <div class="section-content">
        <h2>お問い合わせください</h2>
        <p>何かご質問やご要望がございましたら、お気軽にお問い合わせください。</p>
        <router-link to="/contact" class="section-button">お問い合わせ</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      slides: [
        { image: '/images/main_6.png', text: '企業や社会の発展に貢献していくことを最大の使命とします。' },
        { image: '/images/main_9.jpg', text: '優秀なリソース及び長年のナレッジを活用して、最適なＩＴサービスを提供する会社です。' },
        { image: '/images/main_5.jpg', text: 'お客様のビジネス成功をサポートするために全力で努力しています。' },
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startSlideshow();
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(this.nextSlide, 6000);
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  color: white;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s, transform 0.3s;
}

.arrow span {
  display: inline-block;
  line-height: 1;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

.arrow:hover {
  background-color: rgba(0, 0, 0, 0.8);
  transform: translateY(-50%) scale(1.1);
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-text {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
.slide-text {
  transition: opacity 0.3s ease-in-out;
}

.slide-text:hover {
  opacity: 0.9;
}

.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.section-image {
  width: 100%;
  margin-bottom: 10px;
}

.section-content {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.section-content h2 {
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.section-button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.section-button:hover {
  background-color: #34495e;
}

.round-image {
  border-radius: 20%;
}

@media (min-width: 768px) {
  .section {
    flex-direction: row;
    align-items: flex-start;
  }

  .section-image {
    width: 60%;
    margin-bottom: 0;
  }

  .section-content {
    position: relative;
    width: 40%;
    margin-top: 10%;
    margin-left: -10%;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  }

  .section-content h2 {
    font-size: 24px;
    padding: 15px;
  }

  .section-button {
    font-size: 16px;
    padding: 15px 30px;
  }
}

@media (max-width: 600px) {
  .slider {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
  .slide-text {
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    color: white;
    font-size: 15px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  }
}
</style>