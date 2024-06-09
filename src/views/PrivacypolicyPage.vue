<template>
  <div class="privacy-policy-page">
    <h1>プライバシーポリシー</h1>
    <p>私たちについて</p>
    <p>株式会社DXPROソリューションズ（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報の保護を推進・実施致します。</p>

    <h2 class="section-heading">個人情報の管理</h2>
    <p>当社はお客さまからお預かりする個人情報について、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、厳重な管理を行ないます</p>

    <h2 class="section-heading">個人情報の利用目的</h2>
    <p>当社がお預かりする個人情報は、当サービスのご利用とご提供に伴う以下の目的のために利用いたします。</p>
    <ul>
      <li>当社からのご案内</li>
      <li>お問合せへの対応</li>
      <li>電子メールや資料の発送</li>
      <li>契約の履行や商談 等</li>
    </ul>
    <p>上記以外の個人情報の利用目的については、お問い合わせ先まで個別にお問い合わせください。</p>

    <h2 class="section-heading">個人情報の第三者への開示・提供の禁止</h2>
    <p>当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
    <ul>
      <li>ご利用者さまの同意がある場合</li>
      <li>ご利用者さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
      <li>法令に基づき開示することが必要である場合</li>
    </ul>

    <h2 class="section-heading">個人情報の安全対策</h2>
    <p>当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>

    <h2 class="section-heading">ご本人の照合</h2>
    <p>当社のお客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>

    <h2 class="section-heading">法令、規範の遵守と見直し</h2>
    <p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>

    <h2 class="section-heading">個人情報に関するお問い合わせ先および苦情・相談に関するお申し出先</h2>
    <p>株式会社DXPROソリューションズ 個人情報保護管理責任者宛</p>
    <p>E-mailの場合 info@dxpro-sol.co.jp</p>
    <p>郵送の場合 〒164-0011 東京都中野区中央3-12-12-3F</p>
    <p>2024年6月10日制定</p>
    <p>株式会社DXPROソリューションズ</p>
    <p>代表取締役 金 兌訓</p>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyPage'
}
</script>

<style scoped>
.privacy-policy-page {
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
</style>