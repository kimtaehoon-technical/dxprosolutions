<template>
  <div class="recruit-page">
    <!-- 背景ビデオ -->
    <video autoplay muted loop class="background-video">
      <source src="/images/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- カラーフィルター -->
    <div class="overlay"></div>

    <!-- コンテンツ -->
    <div class="page-content">
      <h1 class="page-title">中途採用情報</h1>

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

      <!-- 応募ボタン -->
      <div class="button-wrapper">
        <a 
          href="https://dxpro-recruit-c76b3f4df6d9.herokuapp.com/login.html?msg=login_required"
        >
          <button class="apply-button">応募する</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MidRecruitmentPage",
  data() {
    return {
      recruitData: [
        {
          label: "募集部門",
          value:
            "プロジェクトマネージャー（PM）<br>ソフトウェア開発者（SE / PL）<br>コンサルタント",
        },
        { label: "雇用形態", value: "&nbsp;&nbsp;&nbsp;正社員<br>&nbsp;&nbsp;&nbsp;契約社員" },
        { label: "給与", value: "履歴・経歴による（応相談）" },
        { label: "勤務地", value: "本社またはお客様先" },
        { label: "勤務時間", value: "案件による<br>営業時間：09:00 ~ 18:00<br>フレックス勤務制有り" },
        {
          label: "昇給・賞与",
          value: `
            ・経験・能力を正当に評価し、未経験分野もチャレンジ可能<br>
            ・PM/PL希望者はマネジメント経験を反映した査定<br>
            ・年1回の昇給と業績に応じた賞与で頑張りを還元<br><br>
          `,
        },
        {
          label: "諸手当",
          value:
            "時間外手当 / 通勤手当 / 住宅手当 / 家族手当 / 能力手当",
        },
        {
          label: "休日・休暇",
          value: "完全週休2日制（土日）・祝日・年末年始・有給休暇",
        },
        {
          label: "社会保険",
          value: "健康保険 / 厚生年金 / 雇用保険 / 労災保険",
        },
        {
          label: "選考プロセス",
          value:
            "書類選考 → 一次面接 → 技術ヒアリング → 内定<br>※スキル・経験に応じて一部選考ステップを省略する場合あり",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 背景ビデオ */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px) brightness(0.6);
  z-index: -2;
}

/* オーバーレイ */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(30, 58, 138, 0.8),
    rgba(59, 130, 246, 0.6)
  );
  z-index: -1;
}

/* ページ全体 */
.recruit-page {
  font-family: "Noto Sans JP", sans-serif;
  color: #fff;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 60px 20px;
  text-align: center;
}

/* コンテンツ */
.page-content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

/* タイトル */
.page-title {
  font-size: 3.2rem;
  font-weight: 900;
  margin-bottom: 60px;
  letter-spacing: 3px;
  color: #fff;
  text-shadow: 0 4px 14px rgba(0, 0, 0, 0.7);
}

/* 情報カード */
.info-sections {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.info-section {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  padding: 25px 22px;
  border-radius: 16px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
}

.info-section:hover {
  transform: translateY(-6px);
  background: rgba(255, 255, 255, 0.25);
}

.section-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #ffffff;
  border-left: 4px solid #60a5fa;
  padding-left: 12px;
}

.section-content {
  font-size: 1rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* 応募ボタン */
.button-wrapper {
  margin-top: 70px;
}

.apply-button {
  padding: 16px 52px;
  font-size: 20px;
  font-weight: 700;
  border: none;
  border-radius: 50px;
  background: linear-gradient(90deg, #2563eb, #1e40af);
  color: #fff;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.apply-button::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  transition: all 0.5s ease;
}

.apply-button:hover::after {
  left: 100%;
}

.apply-button:hover {
  transform: translateY(-3px) scale(1.05);
  background: linear-gradient(90deg, #1e40af, #2563eb);
}

/* レスポンシブ */
@media (max-width: 900px) {
  .info-sections {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.3rem;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .section-content {
    font-size: 0.95rem;
  }

  .apply-button {
    width: 100%;
    padding: 14px 0;
  }
}
</style>
