<template>
  <div>
    <h1>事業紹介</h1>

    <div class="business-info">
      <p>ディーエックスプロソリューションは、ITソリューションとサービスを提供する企業です。</p>
      <table>
        <tr>
          <td><img src="/images/DXHOME_1.jpg" alt="Web Development" style="width: 300px;"></td>
          <td>システムコンサルティング</td>
        </tr>
        <tr>
          <td><img src="/images/DXHOME_2.jpg" alt="Mobile App Development" style="width: 300px;"></td>
          <td>モバイルアプリケーションの開発</td>
        </tr>
        <tr>
          <td><img src="/images/DXHOME_3.jpg" alt="Cloud Solutions" style="width: 300px;"></td>
          <td>クラウドソリューション</td>
        </tr>
        <tr>
          <td><img src="/images/DXHOME_4.jpg" alt="Big Data Analysis" style="width: 300px;"></td>
          <td>ビッグデータ分析</td>
        </tr>
        <tr>
          <td><img src="/images/DXHOME_5.jpg" alt="User Experience Design" style="width: 300px;"></td>
          <td>ユーザーエクスペリエンスデザイン</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.business-info {
  margin-top: 20px;
}

.business-info h2 {
  font-size: 24px;
}

.business-info p {
  font-size: 16px;
}

.business-info table {
  width: 100%;
  border-collapse: collapse;
}

.business-info td {
  padding: 10px;
  text-align: center;
  border: 1px solid #ddd;
}

.business-info img {
  display: block;
  margin: 0 auto;
}
</style>