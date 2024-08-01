<template>
  <div class="Recruitment-information">
    <h1>新卒採用情報</h1>
    <table>
      <tr>
        <td class="text-cell"><b>募集部門</b></td>
        <td>システム開発者</td>
      </tr>
      <tr>
        <td class="text-cell"><b>雇用形態</b></td>
        <td>正社員/契約社員</td>
      </tr>
      <tr>
        <td class="text-cell"><b>給与</b></td>
        <td>200,000 〜   当社規定による</td>
      </tr>
      <tr>
        <td class="text-cell"><b>勤務地</b></td>
        <td>本社又はお客様先</td>
      </tr>
      <tr>
        <td class="text-cell"><b>勤務時間</b></td>
        <td>案件による<br>
        営業時間：09:00 ~ 18:00</td>
      </tr>
      <tr>
        <td class="text-cell"><b>昇給・賞与</b></td>
        <td>
        ・業務未経験者の方 月給20万円スタート<br>
        ※前職及び年齢・経験・能力を考慮の上、決定いたします。<br>
        <b>諸手当と昇給・賞与</b><br>
        通勤手当、残業手当、資格手当、役職手当</td>
      </tr>
      <tr>
        <td class="text-cell"><b>諸手当</b></td>
        <td>時間外手当/通勤手当/住宅手当/家族手当/能力手当</td>
      </tr>
      <tr>
        <td class="text-cell"><b>休日・休暇</b></td>
        <td>完全週休2日制（土日）、祝日、会社が定める日（年末年始他）、有給休暇</td>
      </tr>
      <tr>
        <td class="text-cell"><b>社会保険</b></td>
        <td>健康保険/厚生年金/雇用保険/労災保険</td>
      </tr>
      <tr>
        <td class="text-cell"><b>福利厚生</b></td>
        <td>書籍購入支援、定期健康診断、ベネフィットステーション</td>
      </tr>
      <tr>
        <td class="text-cell"><b>選考プロセス</b></td>
        <td>エントリー ⇒ 説明会 ⇒ 面接 ⇒ 内定</td>
      </tr>
    </table>
    <br>
    <router-link to="/RecruitContact" class="nav-link">
      <button class="apply-button" type="submit">応募方法</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentinformationPage'
}
</script>

<style scoped>
.Recruitment-information {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

h1, h2 {
  color: #333;
}

p, ul {
  text-align: left;
}

ul {
  padding-left: 20px;
  list-style-type: disc;
}

.section-heading {
  background-color: #f0f0f0; /* 軽い背景色追加 */
  padding: 10px;
  border-radius: 5px;
}

.Recruitment-information table {
  width: 100%;
  border-collapse: collapse;
}

.Recruitment-information td {
  text-align: center;
  border: 1px solid #ddd;
}

.Recruitment-information td.text-cell {
  background-color: #a8d0e6; /* 青色設定 */
  color: #333; /* テキスト色の設定 */
  font-size: 18px; /* テキストのフォントサイズを大きく */
  padding: 15px; /* パディングを追加してクリックしやすく */
  border-radius: 8px; /* セルの角を丸くする */
  cursor: pointer; /* カーソルをポインタにする */
  transition: background-color 0.3s ease; /* ホバー効果 */
}

.Recruitment-information td.text-cell:hover {
  background-color: #8cc1d9; /* ホバー時の背景色設定 */
}

/* 応募方法ボタンのスタイル */
.apply-button {
  background-color: #007BFF; /* ボタンの青色設定 */
  color: white;
  border: none;
  padding: 15px 30px; /* ボタンのサイズ調整 */
  font-size: 18px; /* ボタン内のテキストサイズ調整 */
  border-radius: 5px; /* ボタンの角を丸くする */
  cursor: pointer;
  transition: background-color 0.3s ease; /* ホバー効果 */
}

.apply-button:hover {
  background-color: #0056b3; /* ホバー時の青色設定 */
}
</style>