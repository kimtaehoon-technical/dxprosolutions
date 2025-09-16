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
              <li><router-link to="/Saiyo" class="footer-link" @click="scrollToTop">採用ポジション</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">その他</h3>
            <ul class="footer-links">
              <li><router-link to="/privacy" class="footer-link" @click="scrollToTop">プライバシーポリシー</router-link></li>
              <li>
                <a 
                  href="https://dxpro-recruit-c76b3f4df6d9.herokuapp.com/contact.html" 
                  class="footer-link"
                >
                  お問い合わせ
                </a>
              </li>
              <li><router-link to="/Intranet" class="footer-link" @click="scrollToTop">イントラネット</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-cta">
          <h3 class="cta-title">お問い合わせ</h3>
          <p class="cta-text">ご質問やご相談がございましたら、お気軽にお問い合わせください。</p>
                <a 
                  href="https://dxpro-recruit-c76b3f4df6d9.herokuapp.com/contact.html" 
                  class="cta-button"
                >
                  お問い合わせフォーム
                </a>
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
            <!-- 인스타그램 아이콘 -->
            <a href="https://www.instagram.com/?hl=ja" class="social-link" aria-label="Instagram">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            
            <!-- DXPRO Solutions 아이콘 (로고 사용) -->
            <a href="https://dxpro-attendance.onrender.com/dashboard" class="social-link" aria-label="DxproSolutions">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm-1.06 13.54L7.4 12l1.41-1.41 2.12 2.12 4.24-4.24 1.41 1.41-5.64 5.66z"/>
              </svg>
            </a>
            
            <!-- X (트위터) 아이콘 -->
            <a href="https://x.com/i/flow/login" class="social-link" aria-label="X">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://ja-jp.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzUyMDc3MzE1LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&next" class="social-link" aria-label="Facebook">
              <svg class="social-icon" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/login/ja?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin" class="social-link" aria-label="LinkedIn">
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
  height: 230px;
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
  margin-left: 45px;
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