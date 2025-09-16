<template>
  <div class="recruitment-page">
    <!-- Hero セクション -->
    <section class="recruitment-hero">
      <div class="hero-content">
        <h1 class="hero-title">あなたの可能性を<br>DXPRO SOLUTIONSで最大限に活かす</h1>
        <p class="hero-subtitle">
          <br>
          技術と情熱で未来を創る仲間を募集しています
        </p>
        <div class="scroll-indicator" @click="scrollToPositions">
          <span>募集ポジションを見る</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- 募集ポジション一覧 -->
    <section class="positions-section" ref="positionsSection">
      <div class="container">
        <h2 class="section-title">募集ポジション</h2>
        
        <!-- フィルター -->
        <div class="filter-section">
          <h3 class="filter-title">フィルター</h3>
          <div class="filter-controls">
            <select v-model="filters.employmentType" class="filter-select">
              <option value="">雇用形態</option>
              <option value="正社員">正社員</option>
              <option value="契約社員">契約社員</option>
              <option value="パートタイム">パートタイム</option>
            </select>
            
            <select v-model="filters.workLocation" class="filter-select">
              <option value="">勤務地</option>
              <option value="東京">東京</option>
              <option value="大阪">大阪</option>
              <option value="名古屋">名古屋</option>
              <option value="福岡">福岡</option>
            </select>
            
            <select v-model="filters.jobType" class="filter-select">
              <option value="">職種</option>
              <option value="エンジニア">エンジニア</option>
              <option value="デザイナー">デザイナー</option>
              <option value="マネージャー">マネージャー</option>
              <option value="営業">営業</option>
            </select>
            
            <button @click="applyFilters"></button>
            <button @click="resetFilters" class="filter-button reset">リセット</button>
          </div>
        </div>
        
        <!-- ポジション一覧 -->
        <div class="positions-grid">
          <div v-for="position in filteredPositions" :key="position.id" class="position-card">
            <div class="card-header">
              <span :class="['position-badge', position.category === '新卒' ? 'new-graduate' : 'mid-career']">
                {{ position.category }}
              </span>
              <h3 class="position-title">{{ position.title }}</h3>
            </div>
            
            <p class="position-description">{{ position.description }}</p>
            
            <div class="position-details">
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ position.location }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-yen-sign"></i>
                <span>{{ position.salary }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-briefcase"></i>
                <span>{{ position.employmentType }}</span>
              </div>
            </div>
            
            <div class="card-footer">
              <span class="deadline">応募締切: {{ position.deadline }}</span>
              <button @click="openPositionModal(position)" class="detail-button">詳細を見る</button>
            </div>
          </div>
        </div>
        
        <!-- ページネーション -->
        <div class="pagination">
          <button class="page-button" :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
            前へ
          </button>
          <button v-for="page in totalPages" :key="page" 
                  :class="['page-button', currentPage === page ? 'active' : '']"
                  @click="changePage(page)">
            {{ page }}
          </button>
          <button class="page-button" :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">
            次へ
          </button>
        </div>
      </div>
    </section>

    <!-- ポジション詳細モーダル -->
    <transition name="modal">
      <div v-if="activePosition" class="position-modal" @click.self="closeModal">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{ activePosition.title }}</h2>
            <button class="close-button" @click="closeModal">✕</button>
          </div>
          
          <div class="modal-content">
            <div class="position-info">
              <div class="info-item">
                <strong>雇用形態:</strong> {{ activePosition.employmentType }}
              </div>
              <div class="info-item">
                <strong>勤務地:</strong> {{ activePosition.location }}
              </div>
              <div class="info-item">
                <strong>給与:</strong> {{ activePosition.salary }}
              </div>
              <div class="info-item">
                <strong>応募締切:</strong> {{ activePosition.deadline }}
              </div>
            </div>
            
            <div class="position-detail">
              <h3>職務内容</h3>
              <p>{{ activePosition.description }}</p>
              
              <h3>求められる経験・スキル</h3>
              <ul>
                <li v-for="(skill, index) in activePosition.requiredSkills" :key="index">
                  {{ skill }}
                </li>
              </ul>
              
              <h3>歓迎するスキル</h3>
              <ul>
                <li v-for="(skill, index) in activePosition.preferredSkills" :key="index">
                  {{ skill }}
                </li>
              </ul>
              
              <h3>福利厚生</h3>
              <ul>
                <li v-for="(benefit, index) in activePosition.benefits" :key="index">
                  {{ benefit }}
                </li>
              </ul>
            </div>
          </div>
          
          <div class="modal-footer">
            <button class="apply-button" @click="goToApplication">採用ページへ</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SaiyoPage',
  data() {
    return {
      filters: {
        employmentType: '',
        workLocation: '',
        jobType: ''
      },
      currentPage: 1,
      itemsPerPage: 4,
      activePosition: null,
      positions: [
        {
          id: 1,
          category: '新卒',
          title: 'ソフトウェアエンジニア',
          description: 'クラウドベースのソフトウェア開発および保守。最新技術を活用したシステム開発に携わることができます。',
          location: '東京 / リモート可',
          salary: '相談可',
          employmentType: '正社員',
          deadline: '常時',
          requiredSkills: [
            'プログラミング経験（Java/C#/Python/JavaScript/Swiftいずれか）',
            'チームでの開発経験',
            '問題解決能力'
          ],
          preferredSkills: [
            'クラウドサービス（AWS/Azure/GCP）の知識',
            'コンテナ技術（Docker/Kubernetes）の経験',
            'オープンソースプロジェクトへの貢献経験'
          ],
          benefits: [
            'フレックスタイム制',
            'リモートワーク可能',
            '資格取得支援',
            '自己研鑽支援制度'
          ]
        },
        {
          id: 2,
          category: '中途',
          title: 'データサイエンティスト',
          description: 'ビッグデータ分析およびAIモデル開発。機械学習アルゴリズムの研究・開発から実装まで幅広く担当していただきます。',
          location: '東京 / リモート可',
          salary: '年俸 480万～800万',
          employmentType: '正社員',
          deadline: '2025年12月31日',
          requiredSkills: [
            '機械学習・統計解析の実務経験3年以上',
            'Pythonを用いたデータ分析経験',
            'SQLによる大規模データ処理経験'
          ],
          preferredSkills: [
            '深層学習フレームワーク（TensorFlow/PyTorch）の経験',
            'クラウドAIサービスの活用経験',
            'データ可視化ツール（Tableau/Power BI）の使用経験'
          ],
          benefits: [
            '研究発表支援',
            '学会・カンファレンス参加支援',
            'フレックスタイム制',
            'リモートワーク可能'
          ]
        },
        {
          id: 3,
          category: '中途',
          title: 'UI/UXデザイナー',
          description: 'ユーザー体験中心の設計およびプロトタイプ作成。顧客のニーズを理解し、直感的で美しいインターフェースを設計します。',
          location: '東京 / リモート可',
          salary: '年俸 360万～700万',
          employmentType: '正社員',
          deadline: '2025年12月31日',
          requiredSkills: [
            'UI/UXデザイン実務経験3年以上',
            'FigmaやAdobe XDなどのプロトタイピングツールの活用経験',
            'ユーザーリサーチの実施経験'
          ],
          preferredSkills: [
            'フロントエンド開発（HTML/CSS/JavaScript）の知識',
            'デザインシステム構築経験',
            'アクセシビリティに関する知識'
          ],
          benefits: [
            '最新デザインツール購入支援',
            'デザインカンファレンス参加支援',
            'フレックスタイム制',
            'リモートワーク可能'
          ]
        },
        {
          id: 4,
          category: '中途',
          title: 'プロジェクトマネージャー',
          description: 'ITプロジェクトの企画およびスケジュール管理。大規模なデジタル変革プロジェクトをリードしていただきます。',
          location: '東京 / リモート可',
          salary: '年俸 600万～1200万',
          employmentType: '正社員',
          deadline: '2025年12月31日',
          requiredSkills: [
            'ITプロジェクト管理経験5年以上',
            'アジャイル開発手法の実践経験',
            '予算管理・リソース調整経験'
          ],
          preferredSkills: [
            'PMPまたはPRINCE2認定資格',
            '大規模システムインテグレーション経験',
            'グローバルプロジェクト経験'
          ],
          benefits: [
            '資格取得支援',
            'マネジメントトレーニング受講機会',
            'フレキシブルな勤務体系',
            '業績連動ボーナス'
          ]
        }
      ]
    }
  },
  computed: {
    filteredPositions() {
      let filtered = this.positions;
      
      if (this.filters.employmentType) {
        filtered = filtered.filter(p => p.employmentType === this.filters.employmentType);
      }
      
      if (this.filters.workLocation) {
        filtered = filtered.filter(p => p.location.includes(this.filters.workLocation));
      }
      
      if (this.filters.jobType) {
        // ここでは簡易的にタイトルでフィルタリング
        filtered = filtered.filter(p => p.title.includes(this.filters.jobType));
      }
      
      // ページネーション用にスライス
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return filtered.slice(startIndex, startIndex + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.positions.length / this.itemsPerPage);
    }
  },
  methods: {
    scrollToPositions() {
      const section = this.$refs.positionsSection;
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    applyFilters() {
      this.currentPage = 1; // フィルター適用時にページをリセット
    },
    resetFilters() {
      this.filters = {
        employmentType: '',
        workLocation: '',
        jobType: ''
      };
      this.currentPage = 1;
    },
    changePage(page) {
      this.currentPage = page;
    },
    openPositionModal(position) {
      this.activePosition = position;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.activePosition = null;
      document.body.style.overflow = '';
    },
    goToApplication() {
      this.closeModal();
      window.location.href = "https://dxpro-recruit-c76b3f4df6d9.herokuapp.com/login.html";
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.recruitment-page {
  font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.recruitment-hero {
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  color: white;
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.4rem;
  max-width: 700px;
  margin: 0 auto 40px;
  opacity: 0.9;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  opacity: 0.8;
  animation: bounce 2s infinite;
  cursor: pointer;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Positions Section */
.positions-section {
  padding: 80px 20px;
  background-color: #f9fafc;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: #1a2a6c;
}

/* Filter Section */
.filter-section {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

.filter-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #2c3e50;
}

.filter-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
}

.filter-select {
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px 15px;
  background: white;
  font-size: 1rem;
  min-width: 150px;
}

.filter-button {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.filter-button.apply {
  background: #3a7bd5;
  color: white;
}

.filter-button.apply:hover {
  background: #2c66b5;
}

.filter-button.reset {
  background: #f8f9fa;
  color: #495057;
  border: 1px solid #ddd;
}

.filter-button.reset:hover {
  background: #e9ecef;
}

/* Positions Grid */
.positions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
}

.position-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.position-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

.card-header {
  padding: 25px 25px 15px;
}

.position-badge {
  display: inline-block;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
}

.position-badge.new-graduate {
  background: #e3f2fd;
  color: #1565c0;
}

.position-badge.mid-career {
  background: #e8f5e9;
  color: #2e7d32;
}

.position-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 15px;
  color: #1a2a6c;
}

.position-description {
  padding: 0 25px;
  color: #555;
  margin-bottom: 20px;
  flex-grow: 1;
}

.position-details {
  padding: 0 25px;
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #666;
}

.detail-item i {
  color: #9e9e9e;
  width: 16px;
}

.card-footer {
  padding: 20px 25px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.deadline {
  font-size: 0.9rem;
  color: #777;
}

.detail-button {
  background: transparent;
  border: 1px solid #3a7bd5;
  color: #3a7bd5;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.detail-button:hover {
  background: #3a7bd5;
  color: white;
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.page-button {
  padding: 8px 15px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-button:hover:not(:disabled) {
  background: #f0f4f8;
}

.page-button.active {
  background: #3a7bd5;
  color: white;
  border-color: #3a7bd5;
}

.page-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Modal Dialog */
.position-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 16px;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.modal-header {
  padding: 25px 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #1a2a6c, #3a7bd5);
  color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.modal-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: white;
}

.close-button {
  background: rgba(255,255,255,0.2);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255,255,255,0.3);
  transform: rotate(90deg);
}

.modal-content {
  padding: 30px;
}

.position-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
  padding: 20px;
  background: #f9fafc;
  border-radius: 10px;
}

.info-item {
  display: flex;
  gap: 10px;
}

.info-item strong {
  min-width: 80px;
}

.position-detail h3 {
  font-size: 1.3rem;
  color: #1a2a6c;
  margin: 25px 0 15px;
  padding-bottom: 8px;
  border-bottom: 2px solid #f0f4f8;
}

.position-detail ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.position-detail li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 15px;
}

.position-detail li::before {
  content: "•";
  color: #3a7bd5;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.modal-footer {
  padding: 20px 30px;
  border-top: 1px solid #eee;
  text-align: center;
}

.apply-button {
  background: linear-gradient(90deg, #3a7bd5, #00d2ff);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.apply-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(58, 123, 213, 0.4);
}

/* Vue transition classes */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .filter-select, .filter-button {
    width: 100%;
  }
  
  .card-footer {
    flex-direction: column;
    gap: 15px;
    align-items: flex-start;
  }
  
  .position-info {
    grid-template-columns: 1fr;
  }
  
  .modal-header {
    padding: 20px;
  }
  
  .modal-content {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .recruitment-hero {
    padding: 80px 20px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .positions-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-header h2 {
    font-size: 1.5rem;
  }
}
</style>