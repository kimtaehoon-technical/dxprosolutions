<template>
  <div class="works-app-container">
    <!-- 헤더 -->
    <header>
      <div class="header-container">
        <div class="logo">
          <router-link to="/">
            <img 
              v-bind:src="isHoveringLogo ? '/images/logo_new.png' : '/images/logo_new_hover.png'" 
              @mouseover="isHoveringLogo = true"
              @mouseleave="isHoveringLogo = false"
              class="logo-img"
            >
          </router-link>
        </div>
        <nav class="main-nav">
          <ul>
            <li class="nav-item has-submenu" @mouseenter="openSubmenu('about')" @mouseleave="closeSubmenu('about')">
              <router-link to="/about/" class="nav-link">
                <span>会社情報</span>
                <svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </router-link>
              <transition name="fade">
                <ul class="submenu" v-show="submenuOpen.about">
                  <li><router-link to="/services/greeting" class="submenu-link">ご挨拶</router-link></li>
                  <li><router-link to="/services/overview" class="submenu-link">会社概要</router-link></li>
                  <li><router-link to="/services/access" class="submenu-link">アクセス</router-link></li>
                </ul>
              </transition>
            </li>
            <li class="nav-item"><router-link to="/about/" class="nav-link">事業紹介</router-link></li>
            <li class="nav-item"><router-link to="/privacy/" class="nav-link">プライバシーポリシー</router-link></li>            
            <li class="nav-item has-submenu" @mouseenter="openSubmenu('recruitment')" @mouseleave="closeSubmenu('recruitment')">
              <router-link to="/recruitment/" class="nav-link">
                <span>採用情報</span>
                <svg class="dropdown-icon" width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </router-link>
              <transition name="fade">
                <ul class="submenu" v-show="submenuOpen.recruitment">
                  <li><router-link to="/Recruitment" class="submenu-link">新卒採用</router-link></li>
                  <li><router-link to="/SubRecruitment" class="submenu-link">中途採用</router-link></li>
                  <li><router-link to="/recruitment/environment" class="submenu-link">働く環境</router-link></li>
                  <li><router-link to="/recruitment/benefits" class="submenu-link">福利厚生</router-link></li>
                </ul>
              </transition>
            </li>            
            <li class="nav-item"><router-link to="/login/" class="nav-link">イントラネット</router-link></li>
            <li><button class="contact-btn">お問い合わせ</button></li>
            <!-- その他のメニュー項目 -->
          </ul>
        </nav>
      </div>
    </header>

  <!-- 수정된 슬라이더 섹션 -->
  <div class="slider-container">
      <div class="slider">
        <div class="arrow left-arrow" @click="prevSlide">
          <span>«</span>
        </div>
        <div class="slides-wrapper">
          <transition-group name="slide-fade" tag="div">
            <div 
              v-for="(slide, index) in slides" 
              :key="index" 
              class="slide" 
              v-show="index === currentIndex"
            >
              <div class="slide-inner">
                <img 
                  :src="slide.image" 
                  :alt="'Slide ' + (index + 1)" 
                  class="slide-image"
                >
                <div class="slide-text" v-html="slide.text"></div>
              </div>
            </div>
          </transition-group>
        </div>
        <div class="arrow right-arrow" @click="nextSlide">
          <span>»</span>
        </div>
      </div>
      <div class="slider-dots">
        <span 
          v-for="(dot, index) in slides" 
          :key="index" 
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>

    <!-- 서비스 섹션 -->
    <section class="services">
      <div class="section-title">
        <h2>サービス・製品</h2>
        <p>お客様の業務革新を支援するソリューションをご提供します</p>
      </div>
      <div class="service-grid">
        <div class="service-item" v-for="(service, index) in services" :key="index">
          <div class="service-img">
            <img :src="service.image" :alt="service.title">
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <router-link to="#" class="read-more">詳細を見る</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 뉴스 섹션 -->
    <section class="news">
      <div class="news-container">
        <div class="section-title">
          <h2>ニュース</h2>
          <p>ディエックスプロソリューションズの最新情報をお届けします</p>
        </div>
        <div class="news-list">
          <div class="news-item" v-for="(item, index) in newsItems" :key="index">
            <div class="news-date">{{ item.date }}</div>
            <div class="news-title">
              <span class="news-category" :class="item.categoryClass">{{ item.category }}</span>
              <router-link to="#">{{ item.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 푸터 -->
    <footer>
      <div class="footer-container">
        <div class="footer-logo">
          <router-link to="/">
            <img src="/images/logo_new_hover.png">
          </router-link>
          <p>人とテクノロジーの未来を創る</p>
        </div>
        <div class="footer-nav">
          <h3>会社情報</h3>
          <ul>
            <li><router-link to="#">企業理念</router-link></li>
            <li><router-link to="#">経営陣</router-link></li>
            <li><router-link to="#">会社概要</router-link></li>
            <li><router-link to="#">アクセス</router-link></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>サービス</h3>
          <ul>
            <li><router-link to="#">人事給与クラウド</router-link></li>
            <li><router-link to="#">HRテックソリューション</router-link></li>
            <li><router-link to="#">業務効率化ツール</router-link></li>
            <li><router-link to="#">導入事例</router-link></li>
          </ul>
        </div>
        <div class="footer-nav">
          <h3>その他</h3>
          <ul>
            <li><router-link to="#">採用情報</router-link></li>
            <li><router-link to="#">ニュース</router-link></li>
            <li><router-link to="#">お問い合わせ</router-link></li>
            <li><router-link to="#">プライバシーポリシー</router-link></li>
          </ul>
        </div>
        <div class="copyright">
          <p>© {{ currentYear }} DXPRO SOLUTIONS Co., Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      submenuOpen: {
      about: false,
      recruitment: false
    },
      isHoveringLogo: false,
      currentIndex: 0,
      currentYear: new Date().getFullYear(),
      slides: [
        { 
          image: '/images/mainimg.jpg', 
          text: 'DXを通じて次世代のビジネスや生活の発展を目指していきます' 
        },
        { 
          image: '/images/mainimg2.jpg', 
          text: 'お客様の様々なニーズに徹底した管理と高度な技術力でお応えします' 
        },
        { 
          image: '/images/mainimg7.png', 
          text: 'DXPRO SOLUTIONSは<br>IT分野の創造と革新をリードする' 
        }
      ],
      services: [
        {
          title: '人事給与クラウド',
          description: '人事・給与業務をクラウドで効率化。あらゆる企業の人事業務をサポートします。',
          image: 'https://img.freepik.com/free-photo/business-people-meeting-modern-office_53876-94868.jpg'
        },
        {
          title: 'HRテックソリューション',
          description: 'AIやデータ分析を活用した先進的な人事ソリューションをご提供します。',
          image: 'https://img.freepik.com/free-photo/digital-transformation-concept-with-icons_23-2148573998.jpg'
        },
        {
          title: '業務効率化ツール',
          description: '企業の様々な業務プロセスを効率化するツールやサービスを提供しています。',
          image: 'https://img.freepik.com/free-photo/teamwork-office-workplace-business-concept_53876-137665.jpg'
        }
      ],
      newsItems: [
        {
          date: '2023.11.15',
          category: 'プレスリリース',
          categoryClass: 'press',
          title: '新サービス「HR Analytics」の提供を開始しました'
        },
        {
          date: '2023.10.30',
          category: 'イベント',
          categoryClass: 'event',
          title: '12月開催「人事業務効率化セミナー」の参加者募集を開始'
        },
        {
          date: '2023.10.15',
          category: '採用情報',
          categoryClass: 'recruit',
          title: '2024年度新卒採用サイトを公開しました'
        },
        {
          date: '2023.09.28',
          category: 'お知らせ',
          categoryClass: 'notice',
          title: 'システムメンテナンスのお知らせ（10/5 2:00-6:00）'
        }
      ],
      slideInterval: null
    }
  },
  methods: {
    openSubmenu(menu) {
      this.submenuOpen[menu] = true;
    },
    closeSubmenu(menu) {
      this.submenuOpen[menu] = false;
    },
    toggleSubmenu(menu) {
      this.submenuOpen[menu] = !this.submenuOpen[menu];
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
    startSlideShow() {
      this.slideInterval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopSlideShow() {
      clearInterval(this.slideInterval);
    }
  },
  mounted() {
    this.startSlideShow();
  },
  beforeUnmount() {
    this.stopSlideShow();
  }
}
</script>

<style scoped>
/* Reset 및 기본 스타일 */
.works-app-container {
  color: #333;
  line-height: 1.6;
  font-family: 'メイリオ', Meiryo, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', Osaka, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* 헤더 스타일 */
header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin: 0 auto;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 60px;
  transition: all 0.3s ease;
}

.logo-img:hover {
  opacity: 0.8;
  transform: scale(1.05);
}

.main-nav ul {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px 16px;
  font-weight: 500;
  color: #333;
  transition: all 0.3s ease;
  border-radius: 6px;
}

.nav-link:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.has-submenu:hover .dropdown-icon {
  transform: rotate(180deg);
}

/* サブメニュー */
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  margin-top: 8px;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.has-submenu:hover .submenu {
  opacity: 1;
  transform: translateY(0);
}

.submenu-link {
  margin-left: 10px;
  padding: 10px 20px;
  color: #444;
  font-size: 15px;
  transition: all 0.2s ease;
}

.submenu-link:hover {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
}

.submenu-link.router-link-exact-active {
  color: #0066cc;
  background-color: rgba(0, 102, 204, 0.05);
  font-weight: 500;
}

/* アニメーション */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.contact-btn {
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
}

.contact-btn:hover {
  background-color: #0055aa;
}

.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 650px; /* 고정 높이 */
}

.slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.slides-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease;
}

.slide-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

.slide-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  width: 80%;
  z-index: 2;
}

/* 새로 추가한 전환 효과 */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.5s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: rgba(255,255,255,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  transition: background-color 0.3s;
}

.arrow:hover {
  background-color: rgba(255,255,255,0.5);
}

.arrow span {
  font-size: 24px;
  color: white;
  font-weight: bold;
}

.left-arrow {
  left: 20px;
}

.right-arrow {
  right: 20px;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 3;
}

.slider-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.slider-dots span.active {
  background-color: white;
}

.slider-dots span:hover {
  background-color: rgba(255,255,255,0.8);
}

/* 슬라이드 전환 애니메이션 */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

/* 서비스 섹션 스타일 */
.services {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 28px;
  color: #0066cc;
  margin-bottom: 15px;
}

.section-title p {
  font-size: 16px;
  color: #666;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.service-item {
  border: 1px solid #eee;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.service-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.service-img {
  height: 180px;
  overflow: hidden;
}

.service-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.service-item:hover .service-img img {
  transform: scale(1.05);
}

.service-content {
  padding: 20px;
}

.service-content h3 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #0066cc;
}

.service-content p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.read-more {
  color: #0066cc;
  font-weight: bold;
  font-size: 14px;
}

/* 뉴스 섹션 스타일 */
.news {
  background-color: #f5f7fa;
  padding: 80px 20px;
}

.news-container {
  max-width: 1200px;
  margin: 0 auto;
}

.news-list {
  margin-top: 30px;
}

.news-item {
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #ddd;
}

.news-date {
  width: 120px;
  color: #666;
  font-size: 14px;
}

.news-category {
  display: inline-block;
  background-color: #0066cc;
  color: white;
  padding: 3px 10px;
  border-radius: 3px;
  font-size: 12px;
  margin-right: 15px;
}

.news-category.press {
  background-color: #0066cc;
}

.news-category.event {
  background-color: #cc6600;
}

.news-category.recruit {
  background-color: #00aa66;
}

.news-category.notice {
  background-color: #666666;
}

.news-title {
  flex: 1;
}

/* 푸터 스타일 */
footer {
  background-color: #333;
  color: white;
  padding: 60px 20px 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.footer-logo img {
  height: 40px;
  margin-bottom: 20px;
}

.footer-nav h3 {
  font-size: 16px;
  margin-bottom: 20px;
  color: #aaa;
}

.footer-nav ul li {
  margin-bottom: 10px;
  font-size: 14px;
}

.footer-nav ul li a:hover {
  color: #0066cc;
}

.copyright {
  grid-column: 1 / -1;
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid #444;
  margin-top: 20px;
  font-size: 12px;
  color: #aaa;
}

/* 반응형 디자인 */
@media (max-width: 992px) {
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .slide-text {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .main-nav ul {
    display: none;
  }

  .has-submenu > a::after {
    display: none;
  }
  
  .submenu {
    position: static;
    opacity: 1;
    visibility: visible;
    box-shadow: none;
    padding-left: 15px;
    display: none;
  }
  
  .has-submenu:hover .submenu,
  .submenu.active {
    display: block;
  }

  .slider {
    height: 400px;
  }
  
  .slide-text {
    font-size: 1.5rem;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
  }
  
  .news-item {
    flex-direction: column;
  }
  
  .news-date {
    width: 100%;
    margin-bottom: 10px;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
  }
  
  .arrow {
    width: 40px;
    height: 40px;
  }
}

/* 반응형 디자인 */
@media (max-width: 992px) {
  .main-nav li {
    margin-left: 15px;
  }
}

@media (max-width: 768px) {
  .main-nav ul {
    display: none; /* 모바일에서는 메뉴 숨김 */
  }
  
  .header-container {
    justify-content: center; /* 모바일에서는 로고 중앙 정렬 */
  }
}

@media (max-width: 480px) {
  .slide-text {
    font-size: 1.2rem;
  }
  
  .slider {
    height: 300px;
  }
}
</style>