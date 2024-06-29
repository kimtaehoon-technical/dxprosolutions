<template>
  <div>
    <h1>事業紹介</h1>

    <div class="business-info-container">
    <div class="business-info">
      <p>ディーエックスプロソリューションは、ITソリューションとサービスを提供する企業です。</p>
      <table>
        <tr>
          <td class="business-img-rec"><img src="/images/DXHOME_1.jpg" alt="Web Development" class="business-img"></td>
          <td class="text-cell" @click="openDialog('consulting')"><b>システムコンサルティング</b></td>
          <td>・当社のコンサルティングはまずお客様の業務を理解することから始めます。<br>
          ・現状業務の分析を行い、問題点を整理いたします。<br>
          ・具体的な改善策をご提案し、それに基づきシステムを企画・立案いたします。</td>
        </tr>
        <tr>
          <td class="business-img-rec"><img src="/images/DXHOME_2.jpg" alt="Mobile App Development" class="business-img"></td>
          <td class="text-cell" @click="openDialog('webMobileDevelopment')"><b>WEB/モバイルアプリケーション開発</b></td>
          <td>当社では業務効率化システムはもちろん、画像解析システム、研究開発システム、<br>
              セキュリティシステムの開発など特殊分野のシステム開発を手がけております。<br>
              経験豊かな技術者が、質の高いシステムを構築いたします。</td>
        </tr>
        <tr>
          <td class="business-img-rec"><img src="/images/DXHOME_4.jpg" alt="Cloud Solutions" class="business-img"></td>
          <td class="text-cell" @click="openDialog('maintenance')"><b>保守/管理</b></td>
          <td>システムへの不正アクセス、情報漏洩、ウイルス被害への対策を考慮した信頼性の<br>
              高いネットワークの構築はシステムの安定稼動には欠かせません。<br>
              ネットワーク工事からトータルにサポートさせていただきます。</td>
        </tr>
      </table>
    </div>
    </div>

    <!-- ダイアログ -->
    <div v-if="showDialog.consulting" class="dialog">
      <div class="dialog-content">
        <h2>システムコンサルティング</h2>
          <p>
          システムコンサルティングの提供内容:
          <br><br>
          <b>業務理解と現状分析</b><br>
          ・企業の業務フローやビジネスプロセスを詳細に理解することから始めます。<br>
          ・現行システムの問題点や課題を特定し、詳細な分析を行います。
          <br><br>
          <b>問題点の整理と課題抽出</b><br>
          ・業務フローやシステムの現状を分析し、効率を妨げる要因やリスクを明確にします。<br>
          ・業務プロセスやシステムのボトルネックを特定し、それに基づいて改善点を抽出します。
          <br><br>
          <b>改善策の提案</b><br>
          ・抽出された課題に対して、具体的かつ実現可能な改善策を提案します。<br>
          ・改善策には、システムの再設計や新しいITソリューションの導入、業務プロセスの最適化などが含まれます。
          <br><br>
          <b>システムの企画・立案</b><br>
          ・提案した改善策を実現するためのシステム企画を立案します。<br>
          ・新しいシステムの設計や既存システムの改修プランを具体化し、プロジェクト計画を作成します。
          <br><br>
          <b>プロジェクトマネジメント</b><br>
          ・システム導入プロジェクトを計画通りに進めるためのプロジェクトマネジメントを行います。<br>
          ・進捗管理やリスク管理、品質管理を徹底し、プロジェクトの成功に導きます。
          <br><br>
          <b>トレーニングとサポート</b><br>
          ・新システム導入後のユーザートレーニングを実施し、システムの定着を支援します。<br>
          ・システム運用中のサポートやメンテナンスを提供し、安定稼働を確保します。
          <br><br>
          <b>システムコンサルティングのメリット</b><br>
          ・業務効率の向上: 業務プロセスの最適化やシステムの改善により、業務効率が向上します。<br>
          ・コスト削減: 効率的なシステム導入により、無駄なコストを削減できます。<br>
          ・リスク管理の強化: システムのリスク分析やセキュリティ対策により、リスク管理が強化されます。
          </p>
          <button @click="closeDialog">閉じる</button>
      </div>
    </div>

    <div v-if="showDialog.webMobileDevelopment" class="dialog">
      <div class="dialog-content">
        <h2>WEB/モバイルアプリケーション開発</h2>
          <p><strong>企画と分析</strong>: プロジェクトの目標と要件を理解し、ユーザーエクスペリエンス（UX）とインターフェースデザイン（UI）の企画を立てます。この段階では機能の仕様とWebまたはアプリの構造を設計します。</p>
          <br>
          <p><strong>開発</strong>: フロントエンドおよびバックエンド技術を使用して、Webアプリケーションまたはモバイルアプリケーションを開発します。このプロセスでは、ユーザーが相互作用できるWebページまたはアプリの機能を実装し、データベースとのやり取りを管理します。</p>
          <br>
          <p><strong>テスト</strong>: 開発されたWebアプリケーションまたはモバイルアプリケーションをテストしてバグを見つけて修正します。このプロセスは、ユーザーのフィードバックを通じてアプリの品質を向上させる重要な段階です。</p>
          <br>
          <p><strong>展開とメンテナンス</strong>: 開発されたWebアプリケーションまたはモバイルアプリケーションをサーバーに展開してユーザーに提供します。また、アプリの持続的なメンテナンスと更新を行い、最新の技術やセキュリティの脆弱性に対応します。</p>
          <br>
          <p><strong>パフォーマンスの最適化</strong>: Webアプリケーションまたはモバイルアプリケーションのパフォーマンスを最適化して高速な読み込み速度とユーザーエクスペリエンスを提供します。コードの最適化、キャッシュ、画像の最適化など、さまざまな技術を活用します。</p>
          <br>
          <p><strong>セキュリティ</strong>: Webアプリケーションまたはモバイルアプリケーションのセキュリティを強化して、ユーザーデータとシステムを保護します。セキュリティの脆弱性を特定し、データ漏洩やハッキングを防ぐための対策を講じます。</p>
          <button @click="closeDialog">閉じる</button>
      </div>
    </div>

    <div v-if="showDialog.maintenance" class="dialog">
      <div class="dialog-content">
        <h2>保守/管理</h2>
          <p>システムの監視とメンテナンス: サーバーやネットワークなどのITインフラストラクチャを監視し、システムの正常な動作を確保します。定期的なメンテナンスとシステムのアップデートを実施し、システムの安定性と信頼性を維持します。</p>
          <br>
          <p>トラブルシューティングと障害対応: システムに問題が発生した場合、迅速に対応して問題を解決します。障害の原因を特定し、効果的な対処法を見つけるために技術的なサポートを提供します。</p>
          <br>
          <p>セキュリティの強化: システムへの不正アクセスやセキュリティ侵害から保護するための対策を講じます。ファイアウォールの設定、セキュリティポリシーの管理、定期的なセキュリティアップデートの適用などが含まれます。</p>
          <br>
          <p>データのバックアップと復旧: 重要なデータやシステムのバックアップを定期的に作成し、災害やデータ損失の際に迅速に復旧するための計画を策定します。データのセキュアな保管と復元を確保します。</p>
          <br>
          <p>ユーザーサポートとトレーニング: ユーザーからの問い合わせやトラブルに対応し、適切な解決策を提供します。また、システムの正しい使用方法やベストプラクティスに関するトレーニングを提供し、ユーザーの能力向上を支援します。</p>
          <button @click="closeDialog">閉じる</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      showDialog: {
        consulting: false,
        webMobileDevelopment: false,
        maintenance: false,
      }
    }
  },
  methods: {
    openDialog(type) {
      this.showDialog[type] = true;
    },
    closeDialog() {
      this.showDialog.consulting = false;
      this.showDialog.webMobileDevelopment = false;
      this.showDialog.maintenance = false;
    }
  }
}
</script>

<style scoped>
.business-info {
  margin-top: 20px;
}

.business-info h2 {
  font-size: 20px;
}

.business-info p {
  font-size: 14px;
}

.business-info table {
  width: 100%;
  border-collapse: collapse;
}

.business-info-container {
  display: flex;
  justify-content: center;
}

.business-info td {
  text-align: center;
  border: 1px solid #ddd;
}

.business-img {
  width: 100%;
  max-width: 400px;
  display: block;
  margin: 0 auto;
}

.text-cell {
  background-color: #f0f0f0; /* 셀 배경색 */
  transition: background-color 0.3s; /* 호버 효과에 애니메이션 적용 */
  cursor: pointer; /* 클릭 가능한 커서 표시 */
}

.text-cell:hover {
  background-color: #ccc; /* 호버 시 배경색 변경 */
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.dialog-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 90%;
  max-height: 80%; /* 다이얼로그의 최대 높이를 설정 */
  overflow-y: auto; /* 스크롤을 가능하게 함 */
  text-align: center;
}

.dialog-content h2 {
  margin-top: 0;
}

.dialog-content{
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .business-img-rec {
    display: none; /* 모바일에서 이미지 숨김 */
  }
}

</style>