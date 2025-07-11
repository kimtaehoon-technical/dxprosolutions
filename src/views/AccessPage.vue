<template>
  <div class="access-page">
    <div class="page-header">
      <h1 class="page-title">アクセス</h1>
      <div class="title-divider"></div>
    </div>

    <div class="office-container">
      <!-- 본사 정보 -->
      <div class="office-card">
        <div class="office-info">
          <h2 class="office-name">DXPRO SOLUTIONS 本社</h2>
          <div class="info-item">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p class="address">〒114-0014 東京都北区田端4-21-14 シャンボール大和郷 4階 2号</p>
          </div>
          <div class="info-item">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <a href="mailto:info@dxpro-sol.com" class="email">info@dxpro-sol.com</a>
          </div>
        </div>
        <div class="office-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6476.93680533215!2d139.75243087484!3d35.73929032678414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188deba9dc10b9%3A0x959dc904c9c6444b!2z44CSMTE0LTAwMTQg5p2x5Lqs6YO95YyX5Yy655Sw56uv77yU5LiB55uu77yS77yR4oiS77yR77yUIOaIuOaenee3j-alreOCt-ODo-ODs-ODnOODvOODq-Wkp-WSjOmDtw!5e0!3m2!1sja!2sjp!4v1722505564939!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="DXPRO SOLUTIONS 本社 地図"
          ></iframe>
          <div class="map-marker"></div>
        </div>
      </div>

      <!-- 도쿄사무소 정보 -->
      <div class="office-card">
        <div class="office-info">
          <h2 class="office-name">DXPRO SOLUTIONS 東京事務所</h2>
          <div class="info-item">
            <svg class="icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <p class="address">〒114-0001 東京都北区西ヶ原3丁目54-8 ウィンベルソロ駒込201</p>
          </div>
        </div>
        <div class="office-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.156525798795!2d139.75140621508643!3d35.74092453668826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f9a18a4959d%3A0x690d3f6cc03e1b18!2z5p2x5Y2X5biC6Lqr44OX44O844Kr44O844OI44OR44Ot44Oq44K_44OX44O844OI44K-44Oz44OJ44O844OI44K_44OX44O844OI44K_44O844OJ44K_!5e0!3m2!1sja!2sjp!4v1722612345678!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="DXPRO SOLUTIONS 東京事務所 地図"
          ></iframe>
          <div class="map-marker"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AccessPage'
}
</script>

<style scoped>
.access-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
}

.page-header {
  text-align: center;
  margin-bottom: 60px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 20px;
  letter-spacing: 0.05em;
}

.title-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3a7bd5, #00d2ff);
  margin: 0 auto;
  border-radius: 2px;
}

.office-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.office-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.office-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
}

.office-info {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.office-name {
  font-size: 1.6rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 30px;
  position: relative;
  padding-bottom: 15px;
}

.office-name::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #3a7bd5, #00d2ff);
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.icon {
  width: 24px;
  height: 24px;
  min-width: 24px;
  margin-right: 15px;
  color: #3a7bd5;
}

.address {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin: 0;
}

.email {
  font-size: 1.1rem;
  color: #3a7bd5;
  text-decoration: none;
  transition: color 0.3s ease;
}

.email:hover {
  color: #265a9e;
  text-decoration: underline;
}

.office-map {
  position: relative;
  height: 100%;
  min-height: 350px;
}

.office-map iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.map-marker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  width: 30px;
  height: 30px;
  background-color: #3a7bd5;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg) translate(-50%, -100%);
}

.map-marker::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  top: 8px;
  left: 8px;
}

@media (max-width: 900px) {
  .office-card {
    grid-template-columns: 1fr;
  }
  
  .office-info {
    padding: 30px;
  }
  
  .office-map {
    min-height: 300px;
  }
}

@media (max-width: 600px) {
  .access-page {
    padding: 40px 15px;
  }
  
  .page-title {
    font-size: 2rem;
  }
  
  .office-name {
    font-size: 1.4rem;
  }
  
  .address, .email {
    font-size: 1rem;
  }
  
  .info-item {
    flex-direction: column;
  }
  
  .icon {
    margin-bottom: 10px;
  }
}
</style>