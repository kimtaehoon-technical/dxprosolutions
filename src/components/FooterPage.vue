<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-columns">
          <div class="footer-column">
            <h3 class="footer-title">会社案内</h3>
            <ul class="footer-links">
              <li><router-link to="/services/greeting" class="footer-link" @click="scrollToTop">ご挨拶</router-link></li>
              <li><router-link to="/services/overview" class="footer-link" @click="scrollToTop">会社概要</router-link></li>
              <li><router-link to="/services/access" class="footer-link" @click="scrollToTop">アクセス</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">事業紹介</h3>
            <ul class="footer-links">
              <li><router-link to="/about" class="footer-link" @click="scrollToTop">事業内容</router-link></li>
              <li><router-link to="/about" class="footer-link" @click="scrollToTop">サービス</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">採用情報</h3>
            <ul class="footer-links">
              <li><router-link to="/Recruitment" class="footer-link" @click="scrollToTop">新卒採用</router-link></li>
              <li><router-link to="/SubRecruitment" class="footer-link" @click="scrollToTop">中途採用</router-link></li>
              <li><router-link to="/RecruitContact" class="footer-link" @click="scrollToTop">応募</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">その他</h3>
            <ul class="footer-links">
              <li><router-link to="/privacy" class="footer-link" @click="scrollToTop">プライバシーポリシー</router-link></li>
              <li><router-link to="/contact" class="footer-link" @click="scrollToTop">お問い合わせ</router-link></li>
              <li><router-link to="/Intranet" class="footer-link" @click="scrollToTop">イントラネット</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-cta">
          <h3 class="cta-title">お問い合わせ</h3>
          <p class="cta-text">ご質問やご相談がございましたら、お気軽にお問い合わせください。</p>
          <router-link to="/contact" class="cta-button" @click="scrollToTop">お問い合わせフォーム</router-link>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-logo">
          <router-link to="/" @click="scrollToTop">
            <img src="/images/logo_new_removebg_preview.png" alt="DXPRO SOLUTIONS" class="footer-logo-img">
          </router-link>
        </div>
        
        <div class="footer-info">
          <p class="copyright">&copy; 2024 DXPRO SOLUTIONS. All Rights Reserved.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Twitter">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="LinkedIn">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    }
  }
};
</script>

<style scoped>
/* 기존 스타일은 동일하게 유지 */
.main-footer {
  background-color: #333333;
  color: #ffffff;
  padding: 60px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-columns {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
  padding-right: 20px;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #0067c0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-cta {
  width: 35%;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 8px;
}

.cta-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #ffffff;
}

.cta-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 14px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0067c0;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #004b8a;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.footer-logo-img:hover {
  opacity: 1;
}

.copyright {
  font-size: 15px;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.5);
}

.social-links {
  display: flex;
  margin-left: 90px;
  gap: 15px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: #0067c0;
  transform: translateY(-3px);
}

.social-icon {
  width: 18px;
  height: 18px;
  fill: #ffffff;
}

@media (max-width: 992px) {
  .footer-columns {
    width: 100%;
  }
  
  .footer-cta {
    width: 100%;
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .footer-column {
    min-width: 50%;
  }
}
</style>