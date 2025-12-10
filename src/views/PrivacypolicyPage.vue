<template>
  <div class="privacy-container">
    <div class="privacy-header">
      <h1 class="privacy-title">プライバシーポリシー</h1>
      <div class="title-divider"></div>
      <p class="privacy-intro">
        DXPRO SOLUTIONS（以下「当社」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報の保護を推進・実施致します。
      </p>
    </div>

    <div class="privacy-content">
      <section class="policy-section">
        <h2 class="section-title">個人情報の管理</h2>
        <div class="section-content">
          <p>当社はお客さまからお預かりする個人情報について、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、厳重な管理を行ないます</p>
        </div>
      </section>

      <section class="policy-section">
        <h2 class="section-title">個人情報の利用目的</h2>
        <div class="section-content">
          <p>当社がお預かりする個人情報は、当サービスのご利用とご提供に伴う以下の目的のために利用いたします。</p>
          <ul class="policy-list">
            <li>当社からのご案内</li>
            <li>お問合せへの対応</li>
            <li>電子メールや資料の発送</li>
            <li>契約の履行や商談 等</li>
          </ul>
          <p>上記以外の個人情報の利用目的については、お問い合わせ先まで個別にお問い合わせください。</p>
        </div>
      </section>

      <section class="policy-section">
        <h2 class="section-title">個人情報の第三者への開示・提供の禁止</h2>
        <div class="section-content">
          <p>当社は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
          <ul class="policy-list">
            <li>ご利用者さまの同意がある場合</li>
            <li>ご利用者さまが希望されるサービスを行なうために当社が業務を委託する業者に対して開示する場合</li>
            <li>法令に基づき開示することが必要である場合</li>
          </ul>
        </div>
      </section>

      <section class="policy-section">
        <h2 class="section-title">個人情報の安全対策</h2>
        <div class="section-content">
          <p>当社は、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</p>
        </div>
      </section>

      <section class="policy-section">
        <h2 class="section-title">ご本人の照合</h2>
        <div class="section-content">
          <p>当社のお客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</p>
        </div>
      </section>

      <section class="policy-section">
        <h2 class="section-title">法令、規範の遵守と見直し</h2>
        <div class="section-content">
          <p>当社は、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</p>
        </div>
      </section>

      <section class="contact-section">
        <h2 class="section-title">個人情報に関するお問い合わせ先</h2>
        <div class="section-content">
          <div class="contact-info">
            <p>合同会社 ディーエックスソリューションズ</p>
            <p>個人情報保護管理責任者宛</p>
            <div class="contact-method">
              <span class="contact-label">E-mail:</span>
              <a href="mailto:info@dxpro-sol.com" class="contact-link">info@dxpro-sol.com</a>
            </div>
            <div class="contact-method">
              <span class="contact-label">郵送:</span>
              <span>〒114-0014 東京都北区田端4-21-14 シャンボール大和郷 402</span>
            </div>
          </div>
          <div class="policy-footer">
            <p>2024年6月10日制定</p>
            <p>合同会社 ディーエックスソリューションズ</p>
            <p>代表 金 兌訓</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyPolicyPage'
}
</script>

<style scoped>
.privacy-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Noto Sans JP', 'Segoe UI', sans-serif;
  color: #4a5568;
  line-height: 1.8;
}

.privacy-header {
  text-align: center;
  margin-bottom: 40px;
}

.privacy-title {
  font-size: 2.2rem;
  color: #2c3e50;
  font-weight: 700;
  margin-bottom: 15px;
}

.title-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
  margin: 0 auto 25px;
  border-radius: 2px;
}

.privacy-intro {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
}

.policy-section {
  margin-bottom: 40px;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 30px;
}

.contact-section {
  margin-bottom: 20px;
}

.section-title {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;
  padding-left: 15px;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  height: 20px;
  width: 5px;
  background: linear-gradient(to bottom, #3b82f6, #6366f1);
  border-radius: 3px;
}

.section-content {
  padding-left: 20px;
}

.policy-list {
  margin: 15px 0;
  padding-left: 25px;
  list-style-type: none;
}

.policy-list li {
  position: relative;
  margin-bottom: 8px;
  padding-left: 20px;
}

.policy-list li::before {
  content: '•';
  color: #3b82f6;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.contact-info {
  background: #f8fafc;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.contact-method {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.contact-label {
  font-weight: 600;
  min-width: 70px;
  color: #475569;
}

.contact-link {
  color: #3b82f6;
  text-decoration: none;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #2563eb;
  text-decoration: underline;
}

.policy-footer {
  margin-top: 30px;
  text-align: center;
  font-size: 0.95rem;
  color: #64748b;
}

@media (max-width: 768px) {
  .privacy-container {
    padding: 30px 15px;
  }
  
  .privacy-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.3rem;
  }
}

@media (max-width: 480px) {
  .privacy-title {
    font-size: 1.6rem;
  }
  
  .section-content {
    padding-left: 10px;
  }
  
  .policy-list {
    padding-left: 15px;
  }
  
  .contact-method {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .contact-label {
    margin-bottom: 5px;
  }
}
</style>