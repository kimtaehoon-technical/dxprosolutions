<template>
  <div class="home">
    <!-- 사진 섹션 -->
    <div class="slider">
      <transition-group name="slide" tag="div">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :style="{ transform: 'translateX(' + (index - currentIndex) * 100 + '%)' }">
          <img :src="slide.image" alt="Slide" class="slide-image">
          <div class="slide-text">{{ slide.text }}</div>
        </div>
      </transition-group>
    </div>


    <!-- 소개 섹션 -->
    <div class="section">
      <img src="/images/DXHOME_4.jpg" width="500px" alt="Company Introduction" class="section-image">
      <div class="section-content">
        <h2>ようこそ、DXPROソリューションズへ</h2>
        <p>DXPRO SOLUTIONSは、お客様のビジネスの成長と成功を支援します。</p>
        <router-link to="/services/greeting" class="section-button">会社案内</router-link>
      </div>
    </div>

    <!-- 서비스 섹션 -->
    <div class="section">
      <img src="/images/DXHOME_5.jpg" width="500px" alt="Service Introduction" class="section-image">
      <div class="section-content">
        <h2>DXPROソリューションズの得意</h2>
        <p>お客様の多様なニーズに応えるため、幅広いサービスを提供しています。</p>
        <router-link to="/about" class="section-button">事業紹介</router-link>
      </div>
    </div>

    <!-- 문의 섹션 -->
    <div class="section">
      <img src="/images/DXHOME_6.jpg" width="500px" alt="Contact Us" class="section-image">
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
        { image: '/images/DXHOME_1.jpg', text: 'お客さまの”新たな挑戦”の実現に向けて、 私たちは全力でサポートします。' },
        { image: '/images/DXHOME_2.jpg', text: '卓越した課題整理力と専門性の高いエンジニアリングで、プロジェクトを成功に導きます。' },
        { image: '/images/DXHOME_3.jpg', text: 'お客様のビジネス成功をサポートするために全力で努力しています。' },
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
    }
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
};
</script>

<style scoped>

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
  bottom: 20px;
  left: 20px;
  color: white;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.5); /* 텍스트의 배경색과 투명도 설정 */
  padding: 10px;
  border-radius: 5px; /* 텍스트 상자에 라운드 모서리를 적용 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 그림자 효과 추가 */
}

.slider {
  position: relative;
  width: 100%;
  height: 500px; /* Adjust the height as needed */
  overflow: hidden;
  z-index: 1; /* 세부 메뉴가 사진 위에 나타나도록 z-index를 높게 설정 */
}

.section {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 100px;
  padding-top: 50px;
  position: relative;
}

.section-image {
  flex-shrink: 0;
  margin-right: -50px; /* 이미지가 텍스트와 겹치도록 설정 */
}

.section-content {
  background-color: rgba(255, 255, 255, 0.8); /* 배경색 설정 */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}

.section-content h2 {
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* 배경색 설정 */
  color: white; /* 텍스트 색상 */
  position: relative;
  z-index: 1;
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

.info {
  text-align: left
}
</style>