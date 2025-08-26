<template>
  <div class="recruit-page">
    <!-- 배경 비디오 -->
    <video autoplay muted loop class="background-video">
      <source src="/images/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- 반투명 오버레이 -->
    <div class="overlay"></div>

    <!-- 콘텐츠 -->
    <div class="page-content">
      <h1 class="page-title">新卒採用情報</h1>

      <div class="info-sections">
        <section
          v-for="(item, index) in recruitData"
          :key="index"
          class="info-section"
        >
          <h2 class="section-title">{{ item.label }}</h2>
          <p class="section-content" v-html="item.value"></p>
        </section>
      </div>

      <router-link to="/RecruitContact" class="nav-link">
        <button class="apply-button">応募方法</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecruitmentPage",
  data() {
    return {
      recruitData: [
        { label: "募集部門", value: "システム開発・ビッグデータ開発" },
        { label: "雇用形態", value: "正社員 / 契約社員" },
        { label: "給与", value: "280,000円 〜（当社規定による）" },
        { label: "勤務地", value: "本社またはお客様先" },
        { label: "勤務時間", value: "案件による<br>営業時間：09:00 ~ 18:00" },
        {
          label: "昇給・賞与",
          value: `
            ・業務未経験者 基本支給額20万円スタート<br>
            ※経験・能力・年齢により決定<br><br>
            <strong>諸手当／昇給・決算賞与 年1回</strong><br>
            通勤手当 / 残業手当 / 資格手当 / 役職手当
          `,
        },
        {
          label: "諸手当",
          value: "時間外手当 / 通勤手当 / 住宅手当 / 家族手当 / 能力手当",
        },
        {
          label: "休日・休暇",
          value:
            "完全週休2日制（土日）・祝日・年末年始・有給休暇",
        },
        {
          label: "社会保険",
          value: "健康保険 / 厚生年金 / 雇用保険 / 労災保険",
        },
        {
          label: "福利厚生",
          value:
            "技術資格取得支援・書籍購入支援・定期健康診断・ベネフィットステーション",
        },
        { label: "選考プロセス", value: "エントリー → 説明会 → 面接 → 内定" },
      ],
    };
  },
};
</script>

<style scoped>
/* 전체 페이지 */
.recruit-page {
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
}

/* 배경 비디오 */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px);
  z-index: -2;
}

/* 오버레이 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  z-index: -1;
}

/* 콘텐츠 중앙 정렬 */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
  text-align: left;
}

/* 제목 */
.page-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 50px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
}

/* 정보 카드 */
.info-sections {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.info-section {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  transition: transform 0.3s ease;
}

.info-section:hover {
  transform: translateY(-5px);
}

.section-title {
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
}

.section-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
}

/* 버튼 */
.apply-button {
  margin: 50px auto 0;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  background: linear-gradient(90deg, #1e3a8a, #3b82f6);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.apply-button:hover {
  transform: scale(1.05);
  background: linear-gradient(90deg, #3b82f6, #1e3a8a);
}

/* 반응형 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }

  .info-section {
    padding: 20px 15px;
  }

  .apply-button {
    width: 100%;
    padding: 14px 0;
  }
}
</style>
