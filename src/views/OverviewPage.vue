<template>
  <div class="company-page">
    <!-- 회사 개요 섹션 -->
    <section class="company-section">
      <h1 class="section-title">会社概要</h1>
      
      <table>
        <tbody>
          <tr>
            <th>会社名</th>
            <td>合同会社 ディーエックスプロ ソリューションズ</td>
          </tr>
          <tr>
            <th>会社名 (英語)</th>
            <td>DXPRO SOLUTIONS</td>
          </tr>
          <tr>
            <th>本社所在地</th>
            <td>〒114-0014<br>東京都北区田端4-21-14-402</td>
          </tr>
          <tr>
            <th>設立</th>
            <td>2024年 8月 (日本)</td>
          </tr>
          <tr>
            <th>代表者</th>
            <td>代表取締役社長<br>金 兌訓 (キム・テフン)</td>
          </tr>
          <tr>
          <th>事業内容</th>
          <td>
          <strong>ITコンサルティング</strong><br>
          ・業務課題のヒアリングと改善提案<br>
          ・DX推進に向けたシステム戦略立案支援<br><br>

          <strong>システムインテグレーション（SI）</strong><br>
          ・ECサイトや業務系Webアプリケーションの受託開発<br>
          ・要件定義〜設計・開発・テスト・導入までの一貫対応<br>
          ・通信業界向けの基幹システム構築（パートナー協業）<br><br>

          <strong>システム保守・運用</strong><br>
          ・既存システムの定期メンテナンスおよび障害対応<br>
          ・セキュリティパッチの適用、環境アップデート対応<br><br>

          <strong>研究・開発（R&D）</strong><br>
          ・AI/Chatbotを活用したFAQ自動応答システムの開発<br>
          ・先端IT技術のプロトタイプ開発と社内検証<br><br>

          <strong>ソリューション・パッケージ開発</strong><br>
          ・業務効率化のための独自Webソリューションの設計・提供<br>
          ・社内テンプレートや共通機能を活用したスピード開発<br><br>

          <strong>IT教育</strong><br>
          ・新人向けWeb開発研修のカリキュラム設計・実施<br>
          ・React／Vue／Node.jsなどモダン技術のハンズオン研修
        </td>
          </tr>
        </tbody>
      </table>
    </section>
    
    <!-- 거래처 섹션 -->
    <section class="partners-section">
      <h1 class="section-title">取引先</h1>
      <h3 class="section-subtitle">COOPERATION</h3>
      
      <div class="partners-container">
        <div class="partner-logos">
          <img src="/images/rebatec.webp" alt="Rebatec" class="sub-partner" />
          <img src="/images/annex.png" alt="Annex" class="sub-partner" />
          <img src="/images/CTC.png" alt="CTC" class="sub2-partner" />
          <img src="/images/ecbeing.png" alt="ecbeing" class="partner-logo" />
          <img src="/images/pkutech.png" alt="pkutech" class="main-partner" />
          <img src="/images/hajimari.png" alt="hajimari" class="sub3-partner" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OverviewPage'
}
</script>

<style scoped>
.company-page {
  max-width: 900px;
  margin: 0 auto;
  padding: 50px 20px;
  font-family: 'Noto Sans JP', 'Segoe UI', sans-serif;
  color: #1e293b;
  background-color: #fff;
}

section {
  margin-bottom: 60px;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

th, td {
  padding: 14px 16px;
  border: 1px solid #d1d5db;
  vertical-align: top;
}

th {
  width: 180px;
  text-align: left;
  background-color: #f9fafb;
  font-weight: 600;
  color: #475569;
  white-space: nowrap;
}

td {
  color: #334155;
  word-wrap: break-word;
  line-height: 1.6;
  font-size: 1rem;
}

tr:nth-child(even) td {
  background-color: #f3f4f6;
}

.section-title {
  font-size: 2.3rem;
  font-weight: 700;
  color: #0f172a;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  padding-bottom: 20px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 3px;
  background: #3b82f6;
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 30px;
  letter-spacing: 3px;
  font-weight: 600;
}

/* 파트너 로고 스타일 */
.partners-container {
  text-align: center;
}

.partner-logos {
  display: flex;
  justify-content: center;
  gap: 35px;
}

.partner-logo,
.main-partner,
.sub-partner,
.sub2-partner {
  object-fit: contain;
  max-height: 70px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.partner-logo:hover,
.sub3-partner:hover
.main-partner:hover,
.sub-partner:hover,
.sub2-partner:hover {
  transform: scale(1.1);
}

.sub3-partner{
  object-fit: contain;
  transition: transform 0.3s ease;
  cursor: pointer;
  max-height: 90px;
  width: 200px;
}

.main-partner {
  margin-top: 10px;
  max-height: 60px;
  width: 200px;
}

.partner-logo {
  max-height: 70px;
  width: 160px;
}

.sub-partner {
  max-height: 80px;
  width: 130px;
}

.sub2-partner {
  margin-top: 10px;
  max-height: 50px;
  width: 180px;
}

/* 반응형 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.9rem;
  }

  th {
    width: 140px;
    padding: 12px 14px;
  }

  td {
    padding: 12px 14px;
  }

  .partner-logos {
    gap: 25px;
  }

  .partner-logo {
    max-height: 50px;
  }
}

@media (max-width: 480px) {
  .company-page {
    padding: 30px 15px;
  }

  .section-title {
    font-size: 1.6rem;
    margin-bottom: 30px;
  }

  table,
  tbody,
  tr,
  th,
  td {
    display: block;
    width: 100%;
  }

  tr {
    margin-bottom: 20px;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    padding: 16px 20px;
    background-color: #fff;
  }

  th {
    background-color: transparent;
    color: #334155;
    font-weight: 700;
    border: none;
    padding: 0 0 8px 0;
    font-size: 1.5rem;
  }

  td {
    border: none;
    padding: 0;
    color: #475569;
    margin-bottom: 0;
    font-size: 0.95rem;
    line-height: 1.6;
  }
  td br + strong {
    margin-top: 24px; /* 항목 간 간격 더 넓게 */
  }
  td::before {
    content: '';
    display: none;
  }
  td strong {
    display: block;
    margin-top: 16px;
    font-size: 0.9rem;
    color: #0f172a;
  }

  /* 파트너 로고 세로 정렬 */
  .partner-logos {
    flex-direction: column;
    gap: 25px;
    align-items: center;
  }

  .partner-logo {
    max-height: 55px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .sub2-partner {
    max-height: 60px;
    width: auto;
  }
  tr:nth-child(even) td {
    background-color: transparent !important;
  }
}

</style>
