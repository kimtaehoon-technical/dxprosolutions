<template>
  <div>
    <h1>事業紹介</h1>
    <div class="business-info-container">
    <div class="business-info">
      <p>ディーエックスプロソリューションズは、<br>ITソリューションとサービスを提供する企業です。</p>
      <table>
        <tr>
          <td class="business-img-rec"><img src="/images/system.jpg" alt="Web Development" class="business-img"></td>
          <td class="text-cell" @click="openDialog('consulting')"><b>システムコンサルティング</b><br><br>
            <div class="details-link">詳細を見る
              <i class="fas fa-arrow-right"></i>
            </div>
          </td>
          <td>・当社のコンサルティングはまずお客様の業務を理解することから始めます。<br>
          ・現状業務の分析を行い、問題点を整理いたします。<br>
          ・具体的な改善策をご提案し、それに基づきシステムを企画・立案いたします。</td>
        </tr>
        <tr>
          <td class="business-img-rec"><img src="/images/web-mobile.jpg" alt="Mobile App Development" class="business-img"></td>
          <td class="text-cell" @click="openDialog('webMobileDevelopment')"><b>WEB/モバイルアプリケーション開発</b><br><br>
            <div class="details-link">詳細を見る
              <i class="fas fa-arrow-right"></i>
            </div>
          </td>
          <td>・当社では業務効率化システムはもちろん、画像解析システム、研究開発システム、<br>
              セキュリティシステムの開発など特殊分野のシステム開発を手がけております。<br>
              経験豊かな技術者が、質の高いシステムを構築いたします。</td>
        </tr>
        <tr>
          <td class="business-img-rec"><img src="/images/hosyu.jpg" alt="Cloud Solutions" class="business-img"></td>
          <td class="text-cell" @click="openDialog('maintenance')"><b>保守/管理</b><br><br>
            <div class="details-link">詳細を見る
              <i class="fas fa-arrow-right"></i>
            </div>
          </td>
          <td>・システムへの不正アクセス、情報漏洩、ウイルス被害への対策を考慮した信頼性の<br>
              高いネットワークの構築はシステムの安定稼動には欠かせません。<br>
              ・ネットワーク工事からトータルにサポートさせていただきます。</td>
        </tr>
        <tr>
          <td class="business-img-rec"><img src="/images/sapebs.jpg" alt="Cloud Solutions" class="business-img"></td>
          <td class="text-cell" @click="openDialog('sapebs')"><b>SAP/EBS導入資源</b><br><br>
            <div class="details-link">詳細を見る
              <i class="fas fa-arrow-right"></i>
            </div>
          </td>
          <td>・SAP ERPパッケージは、世界中の多くの企業の基幹業務システムとして活用され、<br>
               ERPパッケージのトップシェアを誇る 世界標準のERPともいうべき存在になっています。 <br>
               当社は、SAP パッケージの導入部隊を保有し、要件定義から運用保守まで、お客様のニーズに合わせて、 <br>
               最適なソリューション、及び技術者を提供しています。<br><br>
              ・Oracle E-Business Suiteパッケージは、<br>
            トップシェアクラスに入っているERPパッケージとして、数多くの中小企業が導入されています。 <br>
            当社は、企業基幹業務の業務知識と開発技術、両方とも堪能な技術者を育ちまして、<br>
            要件定義から開発テスト、 本番システムの運用メンテナンスなどを支援します。
          </td>
        </tr>
        <tr>
          <td class="business-img-rec"><img src="/images/dbiko.png" alt="Cloud Solutions" class="business-img"></td>
          <td class="text-cell" @click="openDialog('db')"><b>DB移行開発</b><br><br>
            <div class="details-link">詳細を見る
              <i class="fas fa-arrow-right"></i>
            </div>
          </td>
          <td>最近、次世代システムの導入において、<br>システム統合でデータベースのタイプを変更することは珍しくありません。<br>
             データベース移行は、システム開発に伴い必要となるもので、<br>プロジェクト成功の必要条件の一つだと認識しています。<br><br>
             DXPROSOLUTIONSは自社開発したDB移行ツールのノウハウをいかして、<br>
             コストの低い、そして品質の高い移行作業を行います。<br>
             お客様の予算の1/3のコストで対応させていただいた事例もあります。
          </td>
        </tr>
      </table>
    </div>
    </div>

    <!-- ダイアログ -->
    <div v-if="showDialog.consulting" class="dialog">
      <div class="dialog-content">
        <h2>システムコンサルティング</h2>
          <p>
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
          <button @click="closeDialog" class="close-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
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
          <button @click="closeDialog" class="close-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
      </div>
    </div>

    <div v-if="showDialog.maintenance" class="dialog">
      <div class="dialog-content">
        <h2>保守/管理</h2>
          <p><b>システムの監視とメンテナンス</b>: サーバーやネットワークなどのITインフラストラクチャを監視し、システムの正常な動作を確保します。定期的なメンテナンスとシステムのアップデートを実施し、システムの安定性と信頼性を維持します。</p>
          <br>
          <p><b>トラブルシューティングと障害対応</b>: システムに問題が発生した場合、迅速に対応して問題を解決します。障害の原因を特定し、効果的な対処法を見つけるために技術的なサポートを提供します。</p>
          <br>
          <p><b>セキュリティの強化</b>: システムへの不正アクセスやセキュリティ侵害から保護するための対策を講じます。ファイアウォールの設定、セキュリティポリシーの管理、定期的なセキュリティアップデートの適用などが含まれます。</p>
          <br>
          <p><b>データのバックアップと復旧</b>: 重要なデータやシステムのバックアップを定期的に作成し、災害やデータ損失の際に迅速に復旧するための計画を策定します。データのセキュアな保管と復元を確保します。</p>
          <br>
          <p><b>ユーザーサポートとトレーニング</b>: ユーザーからの問い合わせやトラブルに対応し、適切な解決策を提供します。また、システムの正しい使用方法やベストプラクティスに関するトレーニングを提供し、ユーザーの能力向上を支援します。</p>
          <button @click="closeDialog" class="close-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
    </div>

    <div v-if="showDialog.sapebs" class="dialog">
      <div class="dialog-content">
        <h2>SAP/EBS導入資源事例</h2>
          <p><b>1. 要件定義と分析</b></p>
          <p>ビジネス要件のヒアリング: 顧客の業務プロセスや要求を理解し、システムがどのように役立つかを把握します。</p>
          <p>要件ドキュメントの作成: ユーザーの要求に基づいて、システムの仕様や機能を文書化します。</p>
          <p><b>2. システム設計とカスタマイズ</b></p>
          <p>システム設計: 要件に基づき、SAPやEBSの設定やカスタマイズの設計を行います。これには、データベース設計やプロセスフローの設計も含まれます。</p>
          <p>カスタマイズ: 標準機能を顧客のビジネスニーズに合わせて調整します。これは、画面レイアウトの変更や新しい機能の追加を含むことがあります。</p>
          <p><b>3. データ移行</b></p>
          <p>データマイグレーション: 既存のシステムから新しいシステムへのデータの移行を計画し、実行します。データのクレンジングや変換も含まれます。</p>
          <p>データの検証: 移行後にデータが正確であることを確認します。</p>
          <p><b>4. システムのインテグレーション</b></p>
          <p>インターフェースの設計: 他のシステムとSAP/EBSの連携を設計し、実装します。これには、APIの設定やデータの交換プロトコルの設定が含まれます。</p>
          <p>統合テスト: 他システムとの連携が正しく機能するかどうかをテストします。</p>
          <p><b>5. テストと検証</b></p>
          <p>ユニットテスト: 個々の機能が正しく動作するかを確認します。</p>
          <p>システムテスト: システム全体が要件に沿って動作するかを確認します。</p>
          <p>ユーザー受け入れテスト（UAT）: エンドユーザーが実際にシステムを操作し、要求された機能が満たされているか確認します。</p>
          <p><b>6. トレーニングとサポート</b></p>
          <p>ユーザートレーニング: システムの使い方や新機能のトレーニングを実施します。</p>
          <p>サポート: 導入後のサポートやトラブルシューティングを行い、問題解決をサポートします。</p>
          <p><b>7. システムのデプロイとリリース</b></p>
          <p> 本番環境への移行: 開発環境から本番環境へのシステム移行を計画し、実行します。</p>
          <p>リリース管理: システムが正式に稼働する準備を整え、リリース後のサポートを行います。</p>
          <p><b>8. 改善と最適化</b></p>
          <p>パフォーマンスの監視: システムのパフォーマンスを監視し、改善点を見つけて最適化します。</p>
          <p>フィードバックの収集: ユーザーからのフィードバックを基に、システムの改善や追加機能の提案を行います。</p>
          <button @click="closeDialog" class="close-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
    </div>

    <div v-if="showDialog.db" class="dialog">
      <div class="dialog-content">
        <h2>DB移行開発</h2>
          <p><b>1. 移行計画の策定</b></p>
          移行戦略の立案: どのデータベースからどのデータベースへ移行するのか、移行の方法（オンライン/オフライン、段階的/一括）を決定します。<br>
          スケジュールの作成: 移行の各フェーズとそのスケジュールを計画します。<br>
          <p><b>2. データベースの評価と準備</b></p>
          現行システムの評価: 現在のデータベースの構造、データ量、依存関係を評価し、移行に伴うリスクや課題を洗い出します。<br>
          移行対象データの洗い出し: 移行するデータの範囲や内容を決定し、不要なデータの削除やデータクレンジングを行います。<br>
          <p><b>3. 移行ツールと技術の選定</b></p>
          ツールの選定: データ移行を支援するツールや技術（ETLツール、移行スクリプト、データベース管理システムの標準機能など）を選定します。<br>
          ツールの設定: 移行ツールやスクリプトの設定を行い、テスト環境で動作確認をします。<br>
          <p><b>4. 移行スクリプトの作成とテスト</b></p>
          データ変換スクリプトの作成: データ形式の変換やマッピングに必要なスクリプトやプログラムを作成します。<br>
          移行テスト: テスト環境で移行スクリプトを実行し、データが正しく移行されることを確認します。必要に応じてスクリプトの修正を行います。<br>
          <p><b>5. 本番環境への移行準備</b></p>
          移行手順の確認: 本番環境での移行手順やリカバリープランを最終確認します。<br>
          バックアップ: 現行システムのバックアップを取り、移行作業中のデータ損失に備えます。<br>
          <p><b>6. データの本番移行</b></p>
          データの移行実施: 本番環境でデータベースの移行作業を実施します。移行のタイミングや方法についての注意が必要です。<br>
          移行のモニタリング: 移行中にエラーやパフォーマンス問題が発生しないように監視し、必要な対応を行います。<br>
          <p><b>7. 移行後の検証</b></p>
          データの検証: 移行後にデータの整合性や正確性を確認します。データが正しく移行されたかをチェックします。<br>
          パフォーマンスの確認: 移行後のデータベースのパフォーマンスを確認し、必要なチューニングを行います。<br>
          <p><b>8. ユーザートレーニングとサポート</b></p>
          トレーニング: ユーザーに対して新しいデータベースシステムの使い方や新しい機能についてのトレーニングを実施します。<br>
          サポート: 移行後の問題やトラブルに対応するためのサポートを提供します。<br>
          <p><b>9. 文書化と報告</b></p>
          移行のドキュメント化: 移行手順、設定、問題点、解決策などを文書化し、将来の参考やトラブルシューティングに備えます。<br>
          最終報告: 移行作業の完了報告を作成し、関係者に提出します。<br>
          <button @click="closeDialog" class="close-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
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
        sapebs: false,
        debugger: false,
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
      this.showDialog.sapebs = false;
      this.showDialog.db = false;
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 30px;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

h1 {
  margin-top: 40px;
  font-size: 40px;
  margin-bottom: -20px;
}

p {
  text-align: center;
  color: #2c3e50;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.business-info {
  margin-top: 20px;
}

.business-info h2 {
  font-size: 20px;
}

.business-info p {
  font-size: 20px;
}

.business-info table {
  width: 100%;
  border-collapse: collapse;
}

.business-info-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.business-info td {
  text-align: center;
  border: 1px solid #ddd;
}

.business-img {
  width: 100%;
  height: 350px;
  display: block;
  margin: 0 auto;
}

.text-cell {
  position: relative;
  padding: 10px;
  width: 410px;
  background-color: #f0f0f0;
  transition: background-color 0.3s;
  cursor: pointer;
}

.text-cell:hover {
  background-color: #ccc;
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
  max-height: 80%;
  overflow-y: auto;
  text-align: center;
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 14px;
  cursor: pointer;
  position: relative;
}

.dialog-content h2 {
  margin-top: 0;
}

.close-button {
  background: none;
  border: none;
  color: #333;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 0.5px;
  transition: color 0.3s, transform 0.3s;
}

.close-button:hover {
  color: #000;
  transform: scale(1.2);
}

.close-button:focus {
  outline: none;
}

.details-link {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 13px;
  color: #333;
}

.details-link i {
  font-size: inherit;
}

.text-cell b {
  font-size: 24px;
  font-weight: bold;
}

@media (max-width: 600px) {
  .business-img-rec {
    display: none;
  }
  
  .business-info h2 {
    font-size: 15px;
  }

  .business-info p {
    font-size: 15px;
  }
  .business-info td {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  
  .business-info td:first-child {
    display: none;
  }

  .business-info td:nth-child(2) {
    font-weight: bold;
    margin-top: 10px;
  }

  .business-info td:last-child {
    font-size: 14px;
  }

  .details-link {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 10px;
    color: #333;
  }

  .details-link i {
    font-size: inherit;
  }
}
</style>