<template>
  <div class="home">
    <div class="slider">
      <div class="arrow left-arrow" @click="prevSlide">
        <span>«</span>
      </div>
      <transition-group name="slide" tag="div">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :style="{ transform: 'translateX(' + (index - currentIndex) * 100 + '%)' }">
          <img :src="slide.image" alt="Slide" class="slide-image">
          <div class="slide-text" v-html="slide.text"></div>
        </div>
      </transition-group>
      <div class="arrow right-arrow" @click="nextSlide">
        <span>»</span>
      </div>
    </div>

    <div class="section">
      <img src="/images/yokoso.jpg" alt="Company Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>ようこそ、DXPRO SOLUTIONSへ</h2>
        <p>DXPRO SOLUTIONSは、<br>お客様のビジネスの成長と成功を支援します。</p>
        <router-link to="/services/greeting" class="section-button">会社案内</router-link>
      </div>
    </div>

    <div class="section">
      <img src="/images/saiyo.webp" alt="Company Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>DXPRO SOLUTIONSと一緒に成長しませんか？</h2>
        <p>技術力を高め共に成長しませんか？<br>
        一緒に社会にの発展に貢献する貴方を求めています。 </p>
        <router-link to="/Recruitment" class="section-button">採用情報</router-link>
      </div>
    </div>
    
    <div class="section">
      <img src="/images/jigyo.jpg" alt="Service Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>DXPRO SOLUTIONSの仕事</h2>
        <p>お客様の多様なニーズに応えるため、<br>幅広いサービスを提供しています。</p>
        <router-link to="/about" class="section-button">事業紹介</router-link>
      </div>
    </div>

    <div class="section">
      <img src="/images/otoiawase2.jpg" alt="Contact Us" class="section-image round-image">
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
        { image: '/images/mainimg.jpg', text: 'DXを通じて次世代のビジネスや生活の発展を目指していきます' },
        { image: '/images/mainimg2.jpg', text: 'お客様の様々なニーズに徹底した管理と高度な技術力でお応えします' },
        { image: '/images/mainimg7.png', text: 'DXPRO SOLUTIONSは<br>IT分野の創造と革新をリードする' },
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startSlideshow();
    window.scrollTo(0, 0);

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
  height: 620px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s ease;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slide-text {
  position: absolute;
  text-align: center;
  color: white;
  font-size: 35px;
  background-color: rgba(0, 0, 0, 0.0);
  padding: 5px;
  border-radius: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.0);
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.9);
  font-weight: bold;
}

.slide-text {
  transition: opacity 0.3s ease-in-out;
}

.slide-text:hover {
  opacity: 0.1;
}

.section {
  flex-direction: row;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  position: relative;
}

.section-image {
  width: 60%;
  height: 700px;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.section-content {
  width: 50%;
  height: 250px;
  margin-top: 15%;
  font-size: 15pt;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 30px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  position: absolute;
  left: 45%;
  z-index: 2;
}

.section-content h2 {
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.section-button {
  width: 50%;
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

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@media (max-width: 600px) {
  .slider {
    height: 300px; 
  }

  .arrow {
    font-size: 20px;
    padding: 8px;
  }

  .slide-text {
    font-size: 16px;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    padding: 10px;
    width: 80%;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .section-image {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  .section-content {
    width: 100%;
    max-width: 500px;
    height: 220px;
    padding: 20px;
    margin-top: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    text-align: center;
    position: relative;
    left: 0;
  }

  .section-content h2 {
    font-size: 20px;
    margin: 0 0 10px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border-radius: 6px;
  }

  .section-content p {
    font-size: 14px;
    color: #666;
  }

  .section-button {
    display: inline-block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 25px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .section-button:hover {
    background-color: #2980b9;
    transform: scale(1.05);
  }
}
</style>