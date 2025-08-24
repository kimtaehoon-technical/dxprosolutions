<template>
  <div class="recruit-page">
    <!-- 배경 비디오 -->
    <video autoplay muted loop class="background-video">
      <source src="/images/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- 콘텐츠 -->
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

      <router-link to="/RecruitContact" class="nav-link">
        <button class="apply-button">応募方法</button>
      </router-link>
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
            "プロジェクトマネージャー（PM）<br>システム開発者（SE/PL）<br>コンサルタント",
        },
        { label: "雇用形態", value: "正社員 / 契約社員" },
        { label: "給与", value: "履歴・経歴による（応相談）" },
        { label: "勤務地", value: "本社またはお客様先" },
        { label: "勤務時間", value: "案件による<br>営業時間：09:00 ~ 18:00" },
        {
          label: "昇給・賞与",
          value: `
            ・業務経験者：基本給23万〜45万円スタート<br>
            ・PM/PL希望者：マネジメント経験の詳細が分かるスキルシート提出必須<br>
            ・年1回昇給査定、業績により賞与支給あり<br><br>
            <strong>諸手当／昇給・賞与</strong><br>
            通勤手当 / 残業手当 / 資格手当 / 役職手当
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
          label: "福利厚生",
          value:
            "書籍購入支援制度 / 技術セミナー参加補助 / 定期健康診断 / 福利厚生サービス（ベネフィットステーション）",
        },
        {
          label: "選考プロセス",
          value:
            "書類選考 → 一次面接 → 技術ヒアリング → 最終面接→ 内定<br>※スキル・ご経験により一部選考ステップを省略する場合がございます",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* 배경 비디오 */
.background-video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(6px) brightness(0.5);
  z-index: -1;
}

/* 전체 페이지 */
.recruit-page {
  font-family: "Noto Sans JP", sans-serif;
  color: #f5f5f5;
  min-height: 100vh;
  padding: 60px 20px;
}

/* 콘텐츠 중앙 정렬 */
.page-content {
  max-width: 900px;
  margin: 0 auto;
}

/* 제목 */
.page-title {
  text-align: center;
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 50px;
  color: #ffffff;
  border-bottom: 2px solid #475569;
  display: inline-block;
  padding-bottom: 10px;
}

/* 정보 카드 */
.info-sections {
  display: grid;
  gap: 25px;
}

.info-section {
  background: rgba(30, 41, 59, 0.85);
  padding: 25px 20px;
  border-radius: 12px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-section:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.6);
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
  color: #f8fafc;
}

.section-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #d1d5db;
}

/* 버튼 */
.apply-button {
  margin: 50px auto 0;
  padding: 16px 36px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 30px;
  background-color: #0f172a;
  color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease;
  display: block;
}

.apply-button:hover {
  background-color: #475569;
  transform: scale(1.05);
}

/* 반응형 */
@media (max-width: 768px) {
  .page-title {
    font-size: 2.2rem;
  }

  .section-title {
    font-size: 1.3rem;
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
