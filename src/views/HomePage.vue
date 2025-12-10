<template>
  <div class="homepage">
    <!-- Original Slider Section -->
    <div class="slider">
      <div class="arrow left-arrow" @click="prevSlide" role="button" aria-label="前のスライド">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.28)" />
          <path d="M14 8l-4 4 4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
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
      <div class="arrow right-arrow" @click="nextSlide" role="button" aria-label="次のスライド">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.28)" />
          <path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>

    <!-- Sections (corporate-style) -->
    <section class="cards">
      <div class="cards-header">
  <h3>サービス紹介</h3>
        <p class="cards-sub">DXPRO SOLUTIONS — 信頼と実績で支えるサービスラインナップ</p>
      </div>

      <div class="cards-grid">
    <article v-for="(section, idx) in sections" :key="idx" class="card feature-card" :style="{ '--accent': accentFor(idx) }">
          <div class="card-media">
            <img :src="section.image" :alt="section.title" loading="lazy"/>
      <div class="card-accent"></div>
          </div>

          <div class="card-body">
            <h2>{{ section.title }}</h2>
            <p v-html="section.text"></p>
          </div>

          <div class="card-footer">
            <template v-if="section.external">
              <a :href="section.link" class="card-button" target="_blank" rel="noopener noreferrer">{{ section.button }}</a>
            </template>
            <template v-else>
              <a href="#" @click.prevent="navigate(section)" class="card-button">{{ section.button }}</a>
            </template>
          </div>
        </article>
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
          image: '/images/yokoso.jpeg',
          link: '/services/greeting',
          button: '会社案内'
        },
        {
          title: 'DXPRO SOLUTIONSの採用情報',
          text: '技術力を高め共に成長しませんか？<br>一緒に社会にの発展に貢献する貴方を求めています。',
          image: '/images/saiyo3.jpg',
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
    goToSlide(i) {
      this.currentIndex = i;
    },
    accentFor(i) {
  // neutral / monochrome accents (subtle corporate look)
  const palette = ['#2b2b2b', '#3a3a3a', '#4a4a4a', '#5a5a5a', '#6a6a6a'];
  return palette[i % palette.length];
    },
    startSlideshow() {
      this.intervalId = setInterval(this.nextSlide, 6000);
    }
    ,
    async navigate(section) {
      try {
        await this.$router.push(section.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        // fallback: force location change
        this.$nextTick(() => { window.scrollTo(0,0); });
      }
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
.homepage { font-family: 'Segoe UI', sans-serif; color: #222; background: #f4f7fa; }

/* slider (slight tweaks retained) */
.slider { position: relative; width: 100%; height: 680px; overflow: hidden; }
.slide { position: absolute; width: 100%; height: 100%; transition: transform 0.5s ease; display: flex; align-items: center; justify-content: center; }
.slide-image { width: 100%; height: 100%; object-fit: cover; }
.slide-text { position: absolute; z-index: 4; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 1000px; width: calc(100% - 120px); text-align: center; color: #fff; font-size: 34px; padding: 6px 8px; border-radius: 6px; text-shadow: 0 6px 18px rgba(0,0,0,0.7); font-weight: 700; background: transparent; }
.arrow { position: absolute; top: 50%; transform: translateY(-50%); font-size: 26px; color: #fff; padding: 6px; cursor: pointer; z-index: 20; border-radius: 999px; left: 16px; }
.right-arrow { right: 16px; left: auto; }

.arrow svg { width: 44px; height: 44px; display: block; }
.arrow:hover svg circle { fill: rgba(0,0,0,0.44); }

/* corporate sections */
.cards { padding: 72px 6%; background: #ffffff; }
.cards-header { text-align: center; margin-bottom: 28px; }
.cards-header h3 { font-size: 28px; margin: 0 0 6px; color: #0b66b2; }
.cards-sub { margin: 0; color: #6b7280; font-size: 14px; }

.cards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; align-items: stretch; max-width: 1100px; margin: 24px auto 0; }
.feature-card { display: flex; flex-direction: column; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(15,23,42,0.06); transition: transform 0.2s ease, box-shadow 0.2s ease; }
.feature-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(15,23,42,0.12); }

.card-media { position: relative; height: 300px; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; display: block; }
.card-accent { position: absolute; left: 0; top: 0; bottom: 0; width: 8px; background: var(--accent, #0b66b2); }

.card-body { padding: 22px; flex: 1 1 auto; background: #fff; }
.card-meta { color: #9aa4b2; font-size: 13px; margin-bottom: 6px; }
.feature-card h2 { margin: 4px 0 10px; color: #072b44; font-size: 20px; font-weight: 800; }
.feature-card p { color: #222; line-height: 1.6; font-size: 15px; }

.card-footer { padding: 18px 22px; border-top: 1px solid #f1f5f9; display: flex; justify-content: center; }
.card-button { padding: 12px 20px; background: var(--accent, #0b66b2); color: #fff; border-radius: 10px; text-decoration: none; font-weight: 800; display: inline-block; box-shadow: 0 8px 20px rgba(11,102,178,0.12); width: 100%; max-width: 220px; text-align: center; }
.card-button:hover { transform: translateY(-3px); box-shadow: 0 14px 30px rgba(11,102,178,0.18); }

.card-button:focus { outline: 3px solid rgba(11,102,178,0.14); outline-offset: 2px; }

@media (max-width: 1024px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .cards-grid { grid-template-columns: 1fr; } .slider { height: 420px; } .card-media { height: 200px; } }
@media (max-width: 640px) { .slider { height: 360px; } .slide-text { font-size: 18px; bottom: 8%; width: calc(100% - 40px); } }
</style>