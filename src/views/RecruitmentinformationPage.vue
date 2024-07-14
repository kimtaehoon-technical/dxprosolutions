<template>
  <div class="Recruitment-information">
    <h1>新卒採用情報</h1>
    <p>新卒採用情報について</p>
     <table>
        <tr>
          <td class="text-cell" @click="openDialog('consulting')"><b>募集部門</b></td>
          <td>システム開発者</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('webMobileDevelopment')"><b>雇用形態</b></td>
          <td>正社員/契約社員</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>給与</b></td>
          <td>250,000 〜   当社規定による</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>勤務地</b></td>
          <td>本社又はお客様先</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>勤務時間</b></td>
          <td>案件による</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>昇給・賞与</b></td>
          <td>昇給：年1回<br>
          賞与：年2回</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>諸手当</b></td>
          <td>時間外手当/通勤手当/住宅手当/家族手当/能力手当</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>休日・休暇</b></td>
          <td>完全週休2日制（土日）、祝日、会社が定める日（年末年始他）、有給休暇</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>社会保険</b></td>
          <td>健康保険/厚生年金/雇用保険/労災保険</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>福利厚生</b></td>
          <td>書籍購入支援、定期健康診断</td>
        </tr>
        <tr>
          <td class="text-cell" @click="openDialog('maintenance')"><b>選考プロセス</b></td>
          <td>エントリー⇒説明会⇒面接⇒内定</td>
        </tr>
      </table>
      <br>
    <button type="submit">応募方法</button>
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
  background-color: #f0f0f0; /* 연한 배경색 추가 */
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
  background-color: #a8d0e6; /* 青色に設定 */
}

</style>