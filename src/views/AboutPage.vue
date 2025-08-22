<template>
  <div class="business-intro">
    <!-- ヒーローセクション -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">ITソリューションでビジネスを進化させる</h1>
        <p class="hero-subtitle">ディーエックスプロソリューションズは、お客様のビジネス課題を解決する最適なITソリューションを提供します</p>
      </div>
    </div>

    <!-- サービス一覧 -->
    <div class="services-container">
      <div class="service-cards">
        <!-- システムコンサルティング -->
        <div class="service-card" @click="openDialog('consulting')">
          <div class="card-image">
            <img src="/images/system.jpg" alt="システムコンサルティング" />
          </div>
          <div class="card-content">
            <h3>システムコンサルティング</h3>
            <p>業務プロセスの分析から改善策の提案まで、トータルでサポート</p>
            <div class="card-footer">
              <span>詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <!-- WEB/モバイル開発 -->
        <div class="service-card" @click="openDialog('webMobileDevelopment')">
          <div class="card-image">
            <img src="/images/web-mobile.jpg" alt="WEB/モバイルアプリケーション開発" />
          </div>
          <div class="card-content">
            <h3>WEB/モバイルアプリ開発</h3>
            <p>ユーザー中心のデザインで高品質なデジタル体験を提供</p>
            <div class="card-footer">
              <span>詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <!-- 保守/管理 -->
        <div class="service-card" @click="openDialog('maintenance')">
          <div class="card-image">
            <img src="/images/hosyu.jpg" alt="保守/管理" />
          </div>
          <div class="card-content">
            <h3>システム保守/管理</h3>
            <p>安定稼働を支えるトータルサポート体制</p>
            <div class="card-footer">
              <span>詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <!-- SAP/EBS -->
        <div class="service-card" @click="openDialog('sapebs')">
          <div class="card-image">
            <img src="/images/sapebs.jpg" alt="SAP/EBS導入支援" />
          </div>
          <div class="card-content">
            <h3>SAP/EBS導入支援</h3>
            <p>世界標準ERPの導入から運用までワンストップで対応</p>
            <div class="card-footer">
              <span>詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        <!-- DB移行 -->
        <div class="service-card" @click="openDialog('db')">
          <div class="card-image">
            <img src="/images/dbiko.png" alt="DB移行開発" />
          </div>
          <div class="card-content">
            <h3>DB移行開発</h3>
            <p>独自ツールで低コスト・高品質なデータベース移行を実現</p>
            <div class="card-footer">
              <span>詳細を見る</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ダイアログ (元のコードを保持) -->
    <div v-if="activeDialog" class="dialog" @click.self="closeDialog">
      <div class="dialog-content">
        <h2>{{ modalContents[activeDialog].title }}</h2>
        <div v-html="modalContents[activeDialog].content"></div>
        <button @click="closeDialog" class="close-button" aria-label="閉じる">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
    <!-- 他のダイアログも同様に保持 -->
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
return {
  activeDialog: null,
  modalContents: {
    consulting: {
      title: "システムコンサルティング",
      content: `
        <p>
          業務課題の本質を見極め、最適なIT戦略を立案・実行します。現場の声に耳を傾けながら、最新のテクノロジーを活用して、業務効率化・コスト削減・競争力強化を実現します。
        </p>
        <ul>
          <li>業務フロー・システムの現状分析と課題抽出</li>
          <li>業務改善・デジタル化に向けた戦略立案</li>
          <li>クラウド移行やDX推進に伴うロードマップ策定</li>
          <li>経営層・現場を巻き込んだ伴走型支援</li>
        </ul>
      `
    },
    webMobileDevelopment: {
      title: "WEB/モバイルアプリケーション開発",
      content: `
        <p>
          スマートフォンからデスクトップまで、幅広いデバイスに対応したユーザビリティの高いアプリケーションを、企画・設計・開発・運用まで一貫してご提供します。
        </p>
        <ul>
          <li>市場調査・要件定義・ユーザーストーリー設計</li>
          <li>最新フレームワーク（Vue.js, React, Flutter等）によるフロントエンド開発</li>
          <li>堅牢かつ拡張性の高いAPI・バックエンド構築</li>
          <li>UX/UI改善、A/Bテスト、CI/CD導入支援</li>
        </ul>
      `
    },
    maintenance: {
      title: "システム保守/管理",
      content: `
        <p>
          長期的なシステム安定稼働を支える、24時間365日の保守・監視体制を整備。障害対応だけでなく、将来の成長や変化にも対応可能な予防的保守をご提案します。
        </p>
        <ul>
          <li>サーバ・アプリケーションの監視・アラート対応</li>
          <li>脆弱性管理・セキュリティパッチ適用</li>
          <li>ログ分析・リソース最適化によるパフォーマンス改善</li>
          <li>法改正や業務変更に応じたシステム調整・改修</li>
        </ul>
      `
    },
    sapebs: {
      title: "SAP/EBS導入支援",
      content: `
        <p>
          グローバル対応の基幹業務システム（ERP）導入を、コンサルから開発、定着化支援までワンストップでサポート。豊富な業種別テンプレートと実績をもとに、短期間での導入を実現します。
        </p>
        <ul>
          <li>SAP・Oracle EBS導入におけるフィット＆ギャップ分析</li>
          <li>ABAP・PL/SQL等によるカスタマイズ開発</li>
          <li>マスターデータ移行、テスト、ユーザトレーニング</li>
          <li>本番稼働後の運用支援・改善提案</li>
        </ul>
      `
    },
    db: {
      title: "DB移行開発",
      content: `
        <p>
          オンプレミスからクラウドへの移行や、旧式DBからの刷新など、あらゆるデータベース移行ニーズに対応。独自開発ツールにより、精度の高い移行と業務影響の最小化を両立します。
        </p>
        <ul>
          <li>Oracle, SQL Server, MySQL, PostgreSQL等への移行支援</li>
          <li>スキーマ変換・データクレンジング自動化ツールの提供</li>
          <li>ゼロダウンタイムを目指した段階的移行計画</li>
          <li>移行後の性能検証、バックアップ設計、監視体制の構築</li>
        </ul>
      `
    }
  }
};
  },
  methods: {
    openDialog(type) {
      this.activeDialog = type;
    },
    closeDialog() {
      this.activeDialog = null;
    }
  }
}
</script>

<style scoped>
/* ベーススタイル */
.business-intro {
  font-family: 'Noto Sans JP', 'Segoe UI', sans-serif;
  color: #333;
  line-height: 1.6;
}

/* ヒーローセクション */
.hero-section {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
  color: white;
  padding: 80px 20px;
  text-align: center;
  margin-bottom: 60px;
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.3;
}

.hero-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
}

/* サービスカード */
.services-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.service-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card-image {
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.service-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  padding: 25px;
}

.card-content h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #2c3e50;
}

.card-content p {
  color: #666;
  margin-bottom: 20px;
  font-size: 0.95rem;
}

.card-footer {
  display: flex;
  align-items: center;
  color: #3498db;
  font-weight: 600;
  font-size: 0.9rem;
}

.card-footer svg {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.service-card:hover .card-footer svg {
  transform: translateX(5px);
}

/* ダイアログスタイル (改善版) */
.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px); /* 배경 블러 효과 */
}

.dialog-content {
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 40px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.3s ease-out;
}

.dialog-content h2 {
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 1.8rem;
  padding-bottom: 15px;
  border-bottom: 2px solid #f0f0f0;
}

.dialog-content p {
  text-align: left;
  margin-bottom: 15px;
  font-size: 1rem;
  line-height: 1.8;
}

.dialog-content b {
  color: #2c3e50;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #7f8c8d;
  transition: color 0.3s;
}

.close-button:hover {
  color: #e74c3c;
}

/* アニメーション */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* レスポンシブ対応 */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .service-cards {
    grid-template-columns: 1fr;
  }
  
  .dialog-content {
    width: 95%;
    padding: 25px 20px;
    max-height: 85vh;
  }

  .dialog-content h2 {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }

  .dialog-content p,
  .dialog-content li {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  .close-button {
    top: 15px;
    right: 15px;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 60px 15px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .dialog-content {
    width: 96%;
    padding: 20px 15px;
    max-height: 90vh;
    border-radius: 10px;
  }

  .dialog-content h2 {
    font-size: 1.3rem;
    margin-bottom: 18px;
  }

  .dialog-content p,
  .dialog-content li {
    font-size: 0.9rem;
  }

  .close-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>