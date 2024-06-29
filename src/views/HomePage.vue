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
      <img src="/images/DXHOME_4.jpg" alt="Company Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>ようこそ、DXPROソリューションズへ</h2>
        <p>DXPRO SOLUTIONSは、<br>お客様のビジネスの成長と成功を支援します。</p>
        <router-link to="/services/greeting" class="section-button">会社案内</router-link>
      </div>
    </div>

    <!-- 서비스 섹션 -->
    <div class="section">
      <img src="/images/DXHOME_5.jpg" alt="Service Introduction" class="section-image round-image">
      <div class="section-content">
        <h2>DXPROソリューションズの得意</h2>
        <p>お客様の多様なニーズに応えるため、幅広いサービスを提供しています。</p>
        <router-link to="/about" class="section-button">事業紹介</router-link>
      </div>
    </div>

    <!-- 문의 섹션 -->
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
        { image: '/images/DXHOME_1.jpg', text: 'お客さまの”新たな挑戦”の実現に向けて、 私たちは全力でサポートします。' },
        { image: '/images/DXHOME_7.jpg', text: '卓越した課題整理力と専門性の高いエンジニアリングで、プロジェクトを成功に導きます。' },
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
/* 사진 섹션 */
.slider {
  position: relative;
  width: 100%;
  height: 500px; /* 모바일에 맞게 높이 조정 */
  overflow: hidden;
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
  bottom: 10px; /* 모바일에 맞게 간격 조정 */
  left: 10px; /* 모바일에 맞게 간격 조정 */
  color: white;
  font-size: 25px;
  background-color: rgba(0, 0, 0, 0.5); /* 텍스트의 배경색과 투명도 설정 */
  padding: 5px; /* 모바일에 맞게 패딩 조정 */
  border-radius: 20px; /* 텍스트 상자에 라운드 모서리를 적용 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 그림자 효과 추가 */
}

/* 소개 섹션 */
.section {
  display: flex;
  flex-direction: column; /* 모바일에 맞게 열 방향 정렬 */
  align-items: center;
  padding: 20px; /* 모바일에 맞게 패딩 조정 */
}

.section-image {
  width: 100%; /* 모바일에 맞게 이미지 너비 조정 */
  margin-bottom: 10px; /* 이미지와 텍스트 사이 간격 조정 */
}

.section-content {
  background-color: rgba(255, 255, 255, 0.8); /* 배경색 설정 */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

.section-content h2 {
  margin: 0;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* 배경색 설정 */
  color: white; /* 텍스트 색상 */
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

/* 데스크탑용 스타일 */
@media (min-width: 768px) {
  .section {
    flex-direction: row; /* 가로 방향 정렬 */
    align-items: flex-start;
  }

  .section-image {
    width: 60%; /* 이미지 너비 줄임 */
    margin-bottom: 0; /* 이미지와 텍스트 사이 간격 제거 */
  }

  .section-content {
    position: relative; /* 겹치기 위해 상대 위치 설정 */
    width: 40%; /* 컨텐츠 너비 설정 */
    margin-top: 10%; /* 이미지 위로 겹치게 이동 */
    margin-left: -10%; /* 이미지 위로 겹치게 이동 */
    background-color: rgba(255, 255, 255, 0.9); /* 배경색 설정 */
    padding: 30px; /* 패딩 조정 */
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 강화 */
  }

  .section-content h2 {
    font-size: 24px; /* 폰트 크기 조정 */
    padding: 15px;
  }

  .section-button {
    font-size: 16px; /* 버튼 폰트 크기 조정 */
    padding: 15px 30px;
  }
}

/* 모바일 스타일 */
@media (max-width: 600px) {
  .slider {
  position: relative;
  width: 100%;
  height: 300px; /* 모바일에 맞게 높이 조정 */
  overflow: hidden;
  }
  .slide-text {
  position: absolute;
  bottom: 10px; /* 모바일에 맞게 간격 조정 */
  left: 10px; /* 모바일에 맞게 간격 조정 */
  color: white;
  font-size: 15px; /* 모바일에 맞게 폰트 크기 조정 */
  background-color: rgba(0, 0, 0, 0.5); /* 텍스트의 배경색과 투명도 설정 */
  padding: 5px; /* 모바일에 맞게 패딩 조정 */
  border-radius: 20px; /* 텍스트 상자에 라운드 모서리를 적용 */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* 그림자 효과 추가 */
  }
}
</style>