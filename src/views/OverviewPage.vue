<template>
    <div class="services-page">
    <h1>会社概要</h1>
    <table>
      <tr>
        <td>会社名</td>
        <td>合同会社 ディーエックス ソリューションズ</td>
      </tr>
      <tr>
        <td>会社名 (英語)</td>
        <td>DXPRO SOLUTIONS</td>
      </tr>
      <tr>
        <td>本社所在地</td>
        <td>〒114 - 0014<br>東京都北区田端4 - 21 - 14 - 402</td>
      </tr>
      <tr>
        <td>設立</td>
        <td>2024年 6月 (日本)</td>
      </tr>
      <tr>
        <td>代表者</td>
        <td>代表取締役社長<br>金 兌訓 (キム・テフン)</td>
      </tr>
      <tr>
        <td>事業内容</td>
        <td>IT Consulting<br>System Integration<br>System Maintenance<br>Research & Development<br>Solution & Package Development<br>IT Education</td>
      </tr>
    </table>
  </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage'
  }
  </script>

<style scoped>
.services-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 8px;
  border: 1px solid #ddd;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

</style>