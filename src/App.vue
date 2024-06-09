<template>
  <div id="app">
    <header>
      <router-link to="/">
        <img 
          v-bind:src="isHoveringLogo ? '/images/DXPRO_LOGO_HOVER_FRONT2.png' : '/images/DXPRO_LOGO_FRONT.png'" 
          class="logo" 
          @mouseover="isHoveringLogo = true"
          @mouseleave="isHoveringLogo = false"
        >
      </router-link>
      <nav>
        <ul>
          <li>
            <router-link to="/services/greeting">会社案内</router-link>
            <ul>
              <li><router-link to="/services/greeting">ご挨拶</router-link></li>
              <li><router-link to="/services/overview">会社概要</router-link></li>
              <li><router-link to="/services/access">アクセス</router-link></li>
            </ul>
          </li>
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li>
            <router-link to="/about">事業紹介</router-link>
          </li>
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li>
            <router-link to="/privacy">プライバシーポリシー</router-link>
          </li>
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li>
            <router-link to="/contact">お問い合わせ</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      <p>&copy; Copyright © 2024 DXPRO. All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showSubMenu: false,
      isHoveringLogo: false
    }
  }
}
</script>


<style>
/* 基本スタイル */
body {
  margin: 0;
  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: rgba(255, 255, 255, 0.8); /* 반투명한 흰색 배경 */
  color: #2c3e50;
  display: flex;
  justify-content: space-between; /* メニューを右寄せ */
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%; /* 헤더의 너비를 100%로 설정 */
  top: 0; /* 상단에 고정 */
  z-index: 10; /* 다른 요소들보다 앞에 위치 */
}

.logo {
  list-style-type: none;
  padding: 10px;
  width: 200px; /* ロゴ画像の幅を調整 */
  height: auto;
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex; /* メニューを横並びにする */
}

nav ul li {
  margin: 0 15px;
  position: relative;
  white-space: nowrap; /* 한 줄로 표시되도록 설정 */
  font-size: 18px; /* 메뉴 글자 크기 설정 */
}

nav ul li ul {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: transparent;
  text-align: left; /* 왼쪽 정렬 추가 */
  border: none; /* 선을 제거하는 속성 */
  display: none;
  z-index: 2; /* 세부 메뉴가 사진 위에 나타나도록 z-index를 높게 설정 */
}

nav ul li:hover ul {
  display: block;
}

footer {
  background-color: rgba(255, 255, 255, 0.8); /* 푸터 배경색을 반투명 흰색으로 설정 */
  color: #2c3e50; /* 푸터 글씨 색상을 검은색으로 설정 */
  padding: 1px;
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1); /* 홈화면과의 경계에 그림자 효과 추가 */
}

.divider {
  border-left: 1px solid #ddd;
  margin: 0 15px; /* 메뉴 간격을 조정할 수 있습니다. */
}

/* モバイルスタイル */
@media (max-width: 600px) {
  nav ul li {
    display: block;
    margin: 10px 0;
  }
}

</style>
