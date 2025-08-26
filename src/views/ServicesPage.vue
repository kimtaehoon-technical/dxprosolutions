<template>
  <div class="message-page">
    <!-- 헤더 영역 -->
    <div class="message-header">
      <div class="header-content">
        <h1>代表挨拶</h1>
        <p>Representative Greeting</p>
      </div>
    </div>

    <!-- 본문 영역 -->
    <div class="message-container">
      <div class="message-content">
        <div class="message-image">
          <img src="/images/daihyo1.webp" alt="東京事務所">
          <img src="/images/daihyo2.webp" alt="追加画像">
        </div>
        <div class="message-text">
          <h2>デジタル変革で未来を創造する</h2>
          <div class="message-body">
            <p>DXPRO SOLUTIONSは、デジタルトランスフォーメーションを通じて企業の変革と成長を支援する専門企業として、常に最先端の技術と革新的なソリューションを提供してまいりました。</p>
            
            <p>急速に変化するビジネス環境において、デジタル技術の活用はもはや選択肢ではなく、競争力を維持するための必須要件となっています。私たちはお客様のビジネス課題を深く理解し、最適なDX戦略を共に構築することで、持続可能な成長を実現します。</p>
            
            <p>当社の強みは、豊富な業界知見と技術力を持つ専門家チームです。それぞれの企業が持つ独自の価値を最大限に引き出すカスタマイズされたソリューションを提供し、デジタル時代の新たなビジネスモデル創出を支援します。</p>
            
            <p>今後も、お客様との信頼関係を第一に、デジタル技術の可能性を追求し、社会の発展に貢献してまいります。</p>
          </div>
          <div class="message-signature">
            <p class="company-name">合同会社 DXPRO SOLUTIONS</p>
            <p class="representative">代表 &nbsp;&nbsp;  <span class="name">金 兌訓</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage'
}
</script>

<style scoped>
.message-page {
  font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.8;
}

/* 헤더 스타일 */
.message-header {
  background-color: #0067c0;
  color: white;
  padding: 80px 0;
  text-align: center;
}

.header-content h1 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.header-content p {
  font-size: 1rem;
  letter-spacing: 1px;
  opacity: 0.8;
}

/* 본문 컨테이너 */
.message-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
}

.message-content {
  display: flex;
  gap: 50px;
  align-items: flex-start;
}

/* 이미지 영역 */
.message-image {
  flex: 0 0 400px;
}

.message-image img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* 텍스트 영역 */
.message-text {
  flex: 1;
}

.message-text h2 {
  font-size: 1.8rem;
  color: #0067c0;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #0067c0;
}

.message-body p {
  margin-bottom: 25px;
  font-size: 1.1rem;
  line-height: 2;
}

/* 서명 영역 */
.message-signature {
  margin-top: 50px;
  text-align: right;
}

.company-name {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 5px;
}

.representative {
  font-size: 1.1rem;
}

.representative .name {
  font-size: 1.3rem;
  font-weight: 600;
}

/* 반응형 디자인 */
@media (max-width: 992px) {
  .message-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .message-image {
    flex: 0 0 auto;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .message-header {
    padding: 60px 0;
  }
  
  .header-content h1 {
    font-size: 2rem;
  }
  
  .message-container {
    padding: 40px 20px;
  }
  
  .message-text h2 {
    font-size: 1.5rem;
  }
  
  .message-body p {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .header-content h1 {
    font-size: 1.8rem;
  }
  
  .message-signature {
    margin-top: 30px;
  }
}
</style>