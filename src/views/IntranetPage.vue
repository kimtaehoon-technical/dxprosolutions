<template>
  <div class="container">
    <h1 class="title">イントラネット/メール</h1>
    <p class="intro">★本ページは<b>社員専用</b>となります。</p>
    <div class="links-section">
      <div class="link-item">
        <span class="link-label">■接続URL:</span>
        <div class="links">
          <a href="https://drive.google.com/drive/folders/1TI5F-hQyM7cLS1hYvy368Pl8cdKS1dFu?usp=sharing" 
             target="_blank" rel="noopener noreferrer" class="link">イントラネット</a>
          <a href="https://webmail1022.onamae.ne.jp/" 
             target="_blank" rel="noopener noreferrer" class="link">メール</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntranetPage',
  data() {},

}
</script>

<style scoped>
.container {
  max-width: 100%;
  margin: auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #0044cc; /* A deep blue color */
  margin-bottom: 10px;
  border-bottom: 2px solid #0044cc; /* Underline effect */
  padding-bottom: 10px;
}

.intro {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.links-section {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.link-item {
  display: flex;
  align-items: center;
}

.link-label {
  font-weight: bold;
  margin-right: 10px;
  color: #333;
}

.links {
  display: flex;
  gap: 15px;
}

.link {
  text-decoration: none;
  color: #007BFF;
  font-size: 16px;
}

.link:hover {
  text-decoration: underline;
}

@media (max-width: 600px) {
  .container {
    padding: 15px;
  }

  .title {
    font-size: 22px;
  }

  .intro {
    font-size: 16px;
  }

  .link {
    font-size: 14px;
  }
}
</style>