<template>
  <div class="recruit-page">
    <h1 class="page-title">新卒採用情報</h1>
    <table class="info-table">
      <tr v-for="(item, index) in recruitData" :key="index">
        <th class="info-header">{{ item.label }}</th>
        <td class="info-content" v-html="item.value"></td>
      </tr>
    </table>

    <router-link to="/RecruitContact" class="nav-link">
      <button class="apply-button">応募方法</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentinformationPage',
  data() {
    return {
      recruitData: [
        { label: '募集部門', value: 'システム開発・ビックデータ開発' },
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
  font-family: 'Noto Sans JP', 'Segoe UI', sans-serif;
  color: #1f2937;
  background-color: #fff;
}

.page-title {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 40px;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #3b82f6;
  border-radius: 3px;
}

.info-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 40px;
}

.info-table th {
  width: 30%;
  text-align: left;
  padding: 14px 18px;
  background-color: #e0f2fe;
  color: #1e3a8a;
  font-weight: 600;
  vertical-align: top;
  border: 1px solid #cbd5e1;
}

.info-table td {
  padding: 14px 18px;
  border: 1px solid #e2e8f0;
  line-height: 1.7;
  background-color: #f9fafb;
}

.info-table td strong {
  display: inline-block;
  margin-top: 10px;
  font-weight: 600;
  color: #1f2937;
}

/* 버튼 스타일 */
.apply-button {
  display: block;
  margin: 0 auto;
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

/* 반응형 */
@media (max-width: 600px) {
  .page-title {
    font-size: 1.6rem;
  }

  .info-table th,
  .info-table td {
    display: block;
    width: 100%;
    padding: 10px 14px;
  }

  .info-table th {
    background-color: transparent;
    color: #0f172a;
    font-size: 1.1rem;
    border: none;
  }

  .info-table td {
    background-color: #f1f5f9;
    border: none;
    margin-bottom: 20px;
  }

  .apply-button {
    width: 100%;
    font-size: 1rem;
    padding: 16px;
  }
}
</style>
