<template>
  <div>
    <h1>事業紹介</h1>

    <div class="business-info">
      <p>ディーエックスプロソリューションは、ITソリューションとサービスを提供する企業です。</p>
      <table>
        <tr>
          <td><img src="/images/DXHOME_1.jpg" alt="Web Development" style="width: 400px;"></td>
          <td class="text-cell">システムコンサルティング</td>
          <td>・当社のコンサルティングはまずお客様の業務を理解することから始めます。<br>
          ・現状業務の分析を行い、問題点を整理いたします。<br>
          ・具体的な改善策をご提案し、それに基づきシステムを企画・立案いたします。</td>
        </tr>
        <tr>
          <td><img src="/images/DXHOME_2.jpg" alt="Mobile App Development" style="width: 400px;"></td>
          <td class="text-cell">WEB/モバイルアプリケーションの開発</td>
          <td>当社では業務効率化システムはもちろん、画像解析システム、研究開発システム、<br>
              セキュリティシステムの開発など特殊分野のシステム開発を手がけております。<br>
              経験豊かな技術者が、質の高いシステムを構築いたします。</td>
        </tr>
        <tr>
          <td><img src="/images/DXHOME_4.jpg" alt="Cloud Solutions" style="width: 400px;"></td>
          <td class="text-cell">保守/管理</td>
          <td>システムへの不正アクセス、情報漏洩、ウイルス被害への対策を考慮した信頼性の<br>
              高いネットワークの構築はシステムの安定稼動には欠かせません。<br>
              ネットワー ク工事からトータルにサポートさせていただきます。</td>
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

/* 추가된 스타일 */
.text-cell {
  background-color: #f0f0f0; /* 셀 배경색 */
}
</style>