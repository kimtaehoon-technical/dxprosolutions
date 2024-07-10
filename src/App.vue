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
          <li class="li-border">
            <router-link to="/services/greeting" class="nav-link">会社案内</router-link>
            <ul>
              <li><router-link to="/services/greeting" class="nav-link2">ご挨拶</router-link></li>
              <li><router-link to="/services/overview" class="nav-link2">会社概要</router-link></li>
              <li><router-link to="/services/access" class="nav-link2">アクセス</router-link></li>
            </ul>
          </li>
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li class="li-border">
            <router-link to="/about" class="nav-link">事業紹介</router-link>
          </li>
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li class="li-border">
            <router-link to="/privacy" class="nav-link">プライバシーポリシー</router-link>
          </li>  
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li class="li-border">
            <router-link to="/Recruitment" class="nav-link">採用情報</router-link>
            <ul>
              <li><router-link to="/Recruitment" class="nav-link2">新卒採用</router-link></li>
              <li><router-link to="/SubRecruitment" class="nav-link2">中途採用</router-link></li>
            </ul>
          </li>
          <li class="divider"></li> <!-- 메뉴 사이에 수직선 -->
          <li class="li-border">
            <router-link to="/contact" class="nav-link">お問い合わせ</router-link>
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
/* 기본 스타일 */
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
  justify-content: space-between; /* 메뉴를 오른쪽 정렬 */
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%; /* 헤더의 너비를 100%로 설정 */
  top: 0; /* 상단에 고정 */
  z-index: 10; /* 다른 요소들보다 앞에 위치 */
}

.logo {
  list-style-type: none;
  width: 150px; /* 로고 이미지의 너비를 조정 */
  height: auto;
}

nav {
  padding-right: 50px; /* nav 요소에 오른쪽 패딩 추가 */
}

nav ul {
  list-style-type: none;
  padding: 0;
  display: flex; /* 메뉴를 가로로 정렬 */
  flex-wrap: wrap; /* 모바일에서 메뉴를 여러 줄로 정렬 */
}

nav ul li {
  position: relative;
  white-space: nowrap; /* 한 줄로 표시되도록 설정 */
  font-size: 16px; /* 메뉴 글자 크기 설정 */
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
  padding: 10px; /* 모바일 패딩 */
  position: relative;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1); /* 홈화면과의 경계에 그림자 효과 추가 */
}

.divider {
  border-left: 1px solid #ddd;
  margin: 0 10px; /* 메뉴 간격을 조정할 수 있습니다. */
}

.nav-link {
  text-decoration: none;
  color: #555; /* 진한 회색 */
  margin: 0 5px; /* 메뉴 간격 설정 */
}

.nav-link2 {
  text-decoration: none;
  color: #555; /* 진한 회색 */
  display: flex;
  width: 80px;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  padding: 5px 0; /* 위아래 패딩을 5px로 설정 */
  background-color: #fbf9f9; /* 배경색 설정 */
  border-bottom: 1px solid #ccc; /* 아래쪽 선 추가 */
  transition: color 0.3s ease, background-color 0.3s ease; /* 색상 및 배경색 변화에 대한 트랜지션 추가 */
}

.nav-link2:hover {
  color: #fff; /* 호버 시 텍스트 색상 변경 */
  background-color: #f6f6f6; /* 호버 시 배경색 변경 */
}

/* 모바일 스타일 */
@media (max-width: 600px) {
  header {
    flex-direction: column; /* 모바일에서 헤더를 열 방향으로 정렬 */
    align-items: center; /* 가운데 정렬 */
  }

  .logo {
    width: 120px; /* 모바일에서 로고 크기 조정 */
  }

  nav {
    padding-right: 0; /* 모바일에서 nav 패딩 제거 */
    width: 100%;
  }

  nav ul {
    flex-direction: column; /* 모바일에서 메뉴를 열 방향으로 정렬 */
    align-items: center; /* 메뉴를 가운데 정렬 */
    background-color: #efeeee;
  }

  nav ul li {
    font-size: 14px; /* 모바일에서 메뉴 글자 크기 조정 */
    margin: 5px 0; /* 메뉴 간 간격 조정 */
  }

  .divider {
    display: none; /* 모바일에서 수직선 제거 */
  }
}
</style>