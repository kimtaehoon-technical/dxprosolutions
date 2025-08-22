<template>
  <div class="recruit-page">
    <h1 class="page-title">新卒採用情報</h1><br><br>
    <div class="info-sections">
      <section v-for="(item, index) in recruitData" :key="index" class="info-section">
        <h2 class="section-title">{{ item.label }}</h2>
        <p class="section-content" v-html="item.value"></p>
      </section>
    </div>
    <router-link to="/RecruitContact" class="nav-link">
      <button class="apply-button">応募方法</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentPage',
  data() {
    return {
      recruitData: [
        { label: '募集部門', value: 'システム開発・ビッグデータ開発' },
        { label: '雇用形態', value: '正社員 / 契約社員' },
        { label: '給与', value: '280,000円 〜（当社規定による）' },
        { label: '勤務地', value: '本社またはお客様先' },
        { label: '勤務時間', value: '案件による<br>営業時間：09:00 ~ 18:00' },
        {
          label: '昇給・賞与',
          value: `
            ・業務未経験者 基本支給額20万円スタート<br>
            ※経験・能力・年齢により決定<br><br>
            <strong>諸手当／昇給・決算賞与 年1回</strong><br>
            通勤手当 / 残業手当 / 資格手当 / 役職手当
          `,
        },
        { label: '諸手当', value: '時間外手当 / 通勤手当 / 住宅手当 / 家族手当 / 能力手当' },
        { label: '休日・休暇', value: '完全週休2日制（土日）・祝日・年末年始・有給休暇' },
        { label: '社会保険', value: '健康保険 / 厚生年金 / 雇用保険 / 労災保険' },
        { label: '福利厚生', value: '技術資格取得支援・書籍購入支援・定期健康診断・ベネフィットステーション' },
        { label: '選考プロセス', value: 'エントリー → 説明会 → 面接 → 内定' },
      ]
    };
  }
};
</script>

<style scoped>
.recruit-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Noto Sans JP', sans-serif;
  color: #333;
  background-size: cover;
}

.page-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000000ff;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.info-sections {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 8px;
}

.info-section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 10px;
}

.section-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.apply-button {
  display: block;
  margin: 40px auto;
  padding: 14px 30px;
  font-size: 16px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 220px;
}

.apply-button:hover {
  background-color: #1e40af;
}
</style>
