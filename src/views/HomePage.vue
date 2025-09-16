<template>
  <div class="homepage">
    <!-- Original Slider Section -->
    <div class="slider">
      <div class="arrow left-arrow" @click="prevSlide">
        <span>«</span>
      </div>
      <transition-group name="slide" tag="div">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :style="{ transform: 'translateX(' + (index - currentIndex) * 100 + '%' }"
        >
          <img :src="slide.image" alt="Slide" class="slide-image" />
          <div class="slide-text" v-html="slide.text"></div>
        </div>
      </transition-group>
      <div class="arrow right-arrow" @click="nextSlide">
        <span>»</span>
      </div>
    </div>

    <!-- Cards Section -->
    <section class="cards">
      <div v-for="(section, idx) in sections" :key="idx" class="card">
        <img :src="section.image" :alt="section.title" class="card-image" />
        <div class="card-body">
          <h2>{{ section.title }}</h2>
          <p v-html="section.text"></p>
          <template v-if="section.external">
            <a :href="section.link" class="card-button" target="_blank" rel="noopener noreferrer">
              {{ section.button }}
            </a>
          </template>
          <template v-else>
            <router-link :to="section.link" class="card-button">{{ section.button }}</router-link>
          </template>      
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      slides: [
        { image: '/images/mainimg8.jpg', text: 'DXPRO SOLUTIONSは、IT分野の創造と革新をリードする' },
        { image: '/images/mainimg2.jpg', text: 'お客様の様々なニーズに徹底した管理と高度な技術力でお応えします' },
        { image: '/images/mainimg7.png', text: 'DXを通じて次世代のビジネスや生活の発展を目指していきます' },
        { image: '/images/mainimg11.jpg', text: '' },        
      ],
      sections: [
        {
          title: 'ようこそ、DXPRO SOLUTIONSへ',
          text: 'DXPRO SOLUTIONSは、<br>お客様のビジネスの成長と成功を支援します。',
          image: '/images/yokoso.jpg',
          link: '/services/greeting',
          button: '会社案内'
        },
        {
          title: 'DXPRO SOLUTIONSの採用情報',
          text: '技術力を高め共に成長しませんか？<br>一緒に社会にの発展に貢献する貴方を求めています。',
          image: '/images/saiyo.webp',
          link: '/Saiyo',
          button: '採用情報'
        },
        {
          title: 'DXPRO SOLUTIONSの仕事',
          text: 'お客様の多様なニーズに応えるため、<br>幅広いサービスを提供しています。',
          image: '/images/jigyo.jpg',
          link: '/about',
          button: '事業紹介'
        },
        {
          title: 'お問い合わせください',
          text: '何かご質問やご要望がございましたら、お気軽にお問い合わせください。',
          image: '/images/otoiawase2.jpg',
          link: 'https://dxpro-recruit-c76b3f4df6d9.herokuapp.com/contact.html',
          button: 'お問い合わせ',
          external: true   // ←ここを追加
        },
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    startSlideshow() {
      this.intervalId = setInterval(this.nextSlide, 6000);
    }
  },
  mounted() {
    this.startSlideshow();
    window.scrollTo(0, 0);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }
}
</script>

<style scoped>
.homepage {
  font-family: 'Segoe UI', sans-serif;
  color: #222;
  background: #f4f7fa;
}

.slider {
  position: relative;
  width: 100%;
  height: 840px;
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
  text-shadow: 4px 4px 15px rgba(0, 0, 0, 0.9);
  font-weight: bold;
  transition: opacity 0.3s ease-in-out;
}

.slide-text:hover {
  opacity: 0.1;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 80px 5%;
  background-color: #f8f8f8;
}

.card {
  width: 290px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  height: 100%;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
  height: 250px;
  position: relative;
}

.card-body h2 {
  font-size: 1.1rem;
  margin-bottom: 12px;
  color: #0067c0;
}

.card-body p {
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

.card-button {
  display: block;
  margin: 15px auto 0;
  padding: 10px 24px;
  background: #0067c0;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: background 0.3s;
  text-align: center;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  box-sizing: border-box;
}

.card-button:hover {
  background: #004b8a;
}

@media (max-width: 768px) {
  .slider {
    height: 400px;
  }
  
  .slide-text {
    font-size: 20px;
    padding: 15px;
  }
  
  .cards {
    padding: 40px 5%;
  }
  
  .card {
    width: 100%;
    max-width: 350px;
  }
}
</style>