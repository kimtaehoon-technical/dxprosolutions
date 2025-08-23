<template>
  <div class="form-wrapper">
    <div class="form-card">
      <h1 class="form-title">応募フォーム</h1>
      <p class="form-subtitle">下記の内容をご入力の上、送信してください。</p>
      <form @submit.prevent="sendEmail('application')" enctype="multipart/form-data">
        <!-- お名前 -->
        <div class="form-group">
          <label for="name" class="required">お名前</label>
          <input type="text" id="name" v-model="name" placeholder="例：山田 太郎" required>
        </div>

        <!-- 電話番号 -->
        <div class="form-group">
          <label for="telephone" class="required">電話番号</label>
          <input type="tel" id="telephone" v-model="telephone" placeholder="例：090-1234-5678" required>
        </div>

        <!-- メールアドレス -->
        <div class="form-group">
          <label for="email" class="required">メールアドレス</label>
          <input type="email" id="email" v-model="email" placeholder="example@domain.com" required>
        </div>

        <!-- 希望ポジション -->
        <div class="form-group">
          <label for="position" class="required">希望ポジション</label>
          <select id="position" v-model="position" required>
            <option value="">選択してください</option>
            <option value="frontend">フロントエンドエンジニア</option>
            <option value="backend">バックエンドエンジニア</option>
            <option value="designer">UIデザイナー</option>
            <option value="pm">プロジェクトマネージャー</option>
            <option value="consultant">コンサルタント</option>
            <option value="qaengineer">QAエンジニア</option>
            <option value="tester">テスター</option>
          </select>
        </div>

        <!-- 希望年収・月給 -->
        <div class="form-group">
          <label for="annual" class="required">希望年収(円)</label>
          <input type="text" id="annual" v-model="annualFormatted" placeholder="例：5,000,000円" required>
        </div>
        <div class="form-group">
          <label for="monthly" class="required">希望月給(円)</label>
          <input type="text" id="monthly" v-model="monthlyFormatted" placeholder="例：300,000円" required>
        </div>

        <!-- 履歴書・職務経歴書 -->
        <div class="form-group">
          <label for="resume" class="required">履歴書</label>
          <input type="file" id="resume" @change="handleFileUpload('resume')" required />
        </div>
        <div class="form-group">
          <label for="career" class="required">職務経歴書</label>
          <input type="file" id="career" @change="handleFileUpload('career')" required />
        </div>
        <div class="form-group">
          <label for="portfolio">GitHub / ポートフォリオURL</label>
          <input type="url" id="portfolio" v-model="portfolio" placeholder="https://github.com/username">
        </div>
        <div class="form-group">
          <label for="certificate">その他（証明書など）</label>
          <input type="file" id="certificate" @change="handleFileUpload('certificate')" />
        </div>

        <!-- 自己PR -->
        <div class="form-group">
          <label for="pr">自己PR・志望動機</label>
          <textarea id="pr" v-model="pr" placeholder="ご自身の強みや志望理由を自由にご記入ください" rows="5"></textarea>
        </div>

        <!-- 使用技術（アコーディオン式） -->
        <div class="form-group bordered-bottom">
          <label class="required">使用技術</label>
          <div v-for="(items, category) in skillsOptions" :key="category" class="accordion-category">
            <details>
              <summary>{{ category }}</summary>
              <div class="checkbox-wrapper">
                <label v-for="item in items" :key="item" class="checkbox-label">
                  <input type="checkbox" :value="item" v-model="skillsSelected">
                  {{ item }}
                </label>
              </div>
            </details>
          </div>
        </div>

        <!-- 個人情報同意 -->
        <div class="form-group consent-wrapper">
          <input data-v-c414302a="" type="checkbox" id="consent" required="" style="height: 20px; width: 30px;">
          <label for="consent" class="consent-label">
            個人情報の取扱規定に同意する
          </label>
        </div>
        <!-- 送信ボタン -->
        <button type="submit" class="submit-btn">送信</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      telephone: '',
      email: '',
      position: '',
      annual: '',
      monthly: '',
      annualFormatted: '',  // 表示用
      monthlyFormatted: '', // 表示用      
      portfolio: '',
      pr: '',
      consent: false,
      files: {
        resume: null,
        career: null,
        certificate: null
      },
      skillsSelected: [],
      skillsOptions: {
        "言語・ランタイム": [
          "Node.js","Deno","Bun","JavaScript/TypeScript","Python","Ruby","PHP","Java","Kotlin","C#/.NET","Go","Rust","Scala","Elixir","Erlang","C","C++"
        ],
        "OS, オペレーティングシステム.": ["Windows10","Windows11","macOSMonterey","macOSVentura","Ubuntu","CentOS","Debian","Fedora", "Android", "iOS"
        ],
        "フレームワーク": [
          "Express","NestJS","Koa","Hapi","Django","Flask","FastAPI","Tornado","Spring","SpringBoot","Micronaut","Quarkus","RubyonRails","Sinatra","Laravel","Symfony","CodeIgniter","CakePHP","ASP.NET","Nancy","Gin","Echo","Fiber","Actix","Rocket","Axum","Phoenix","PlayFramework","AkkaHTTP"
        ],
        "API/通信": ["REST","GraphQL","gRPC","WebSocket","SOAP","JSONRPC","XMLRPC","SSE"],
        "データベース": ["MySQL","PostgreSQL","Oracle","SQLServer","MongoDB","DynamoDB","Redis","Cassandra","CouchDB","Firebase/Firestore","InfluxDB","TimescaleDB","Memcached"],
        "クラウド・サーバー": ["AWSEC2","AWSLambda","AWSECS/EKS","AWSRDS","AWSDynamoDB","GCPComputeEngine","GCPCloudFunctions","GCPCloudRun","GCPFirestore","AzureVM","AzureFunctions","AzureAppService","AzureSQLDatabase","NetlifyFunctions","VercelServerlessFunctions"],
        "ミドルウェア・CI/CD": ["Nginx","Apache","Caddy","Tomcat","Jetty","RabbitMQ","Kafka","ActiveMQ","SQS","Bull","Celery","Jenkins","GitHubActions","GitLabCI/CD","CircleCI"],
        "アーキテクチャ・パターン": ["MicroService","RESTful", "GraphQLAPI", "CQRS", "EventDriven","DDD", "Serverless/FaaS",  "HexagonalArchitecture",  "CleanArchitecture",  "LayeredArchitecture",  "MVC",  "MVVM",  "ClientServer",  "PeertoPeer",  "ServiceOrientedArchitecture(SOA)"
        ]
      }
    };
  },
  watch: {
    annualFormatted(val) {
      const num = val.replace(/[^\d]/g, ''); // 数字だけ抽出
      if (num !== '') {
        this.annual = Number(num); // 実際の数値
        this.annualFormatted = Number(num).toLocaleString() + '円'; // カンマ + 円
      } else {
        this.annual = '';
        this.annualFormatted = '';
      }
    },
    monthlyFormatted(val) {
      const num = val.replace(/[^\d]/g, '');
      if (num !== '') {
        this.monthly = Number(num);
        this.monthlyFormatted = Number(num).toLocaleString() + '円';
      } else {
        this.monthly = '';
        this.monthlyFormatted = '';
      }
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    handleFileUpload(type) {
      return (event) => {
        this.files[type] = event.target.files[0];
      };
    },
    async sendEmail(formType) {
      if(this.skillsSelected.length === 0){
        alert("使用技術を1つ以上選択してください。");
        return;
      }

      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('telephone', this.telephone);
      formData.append('email', this.email);
      formData.append('position', this.position);
      formData.append('annual', this.annual);
      formData.append('monthly', this.monthly);
      formData.append('portfolio', this.portfolio);
      formData.append('pr', this.pr);
      formData.append('consent', this.consent);
      formData.append('skills', this.skillsSelected.join(', '));
      formData.append('resume', this.files.resume);
      formData.append('career', this.files.career);
      formData.append('certificate', this.files.certificate);
      formData.append('formType', formType);

      try {
        const response = await fetch('https://dxpro.onrender.com/send-email', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          alert('送信が完了しました。');
          window.location.reload();
        } else {
          alert('送信に失敗しました。');
        }
      } catch (error) {
        console.error(error);
        alert('送信に失敗しました。');
      }
    }
  }
};
</script>
<style scoped>

/* 全体背景 */
.form-wrapper {
  min-height: 100vh;
  background-color: #f4f5f7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  font-family: 'Segoe UI', sans-serif;
}

/* フォームカード */
.form-card {
  background-color: #ffffff;
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  width: 100%;
  box-sizing: border-box;
  text-align: left;
}

/* タイトル */
.form-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #2c3e50;
  text-align: center;
}

.form-subtitle {
  font-size: 16px;
  color: #7f8c8d;
  text-align: center;
  margin-bottom: 30px;
}

/* フォームグループ */
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 6px;
  font-size: 14px;
}

label.required::after {
  content: " *";
  color: #e74c3c;
}

/* 入力欄 */
input,
select,
textarea {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s;
  background-color: #fefefe;
  box-sizing: border-box;
  text-align: left;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #2980b9;
  box-shadow: 0 0 10px rgba(41, 128, 185, 0.2);
  outline: none;
}

/* ファイル入力 */
input[type="file"] {
  padding: 6px 10px;
}

/* チェックボックスラッパー */
.checkbox-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* 最小150pxで自動列分割 */
  gap: 10px; /* 要素間の間隔 */
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 6px; /* チェックとテキストの間隔 */
  font-size: 14px;
}

.accordion-category details .checkbox-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* 150px以上で自動列 */
  gap: 8px 12px; /* 上下8px、左右12px */
  padding: 10px 0; /* カテゴリ内の余白 */
}

.checkbox-label input[type="checkbox"] {
  margin-right: 6px;
  transform: scale(1.2);
}
.bordered-bottom {
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px; /* 線と次の項目の間の余白 */
  margin-bottom: 20px;  /* 線の下の余白 */
}
/* ボタン */
.submit-btn {
  width: 100%;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(90deg, #2980b9, #6dd5fa);
  transition: all 0.3s;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(41, 128, 185, 0.3);
}

.submit-btn:active {
  transform: translateY(1px);
}
/* アコーディオン内のチェックボックスを縦並びに */
.accordion-category details .checkbox-wrapper {
  display: flex !important;
  flex-direction: column;
  align-items: flex-start; /* 左寄せ */
  gap: 6px;
  padding: 10px 0;
}

.accordion-category details .checkbox-label {
  width: auto; /* 100% から auto に変更 */
  display: flex;
  align-items: center;
  gap: 6px;
}
.consent-wrapper {
  display: flex;
  align-items: center;
  gap: 8px; /* チェックボックスとテキストの間隔 */
}

.consent-label {
  font-size: 14px;
  color: #34495e;
}
/* モバイル対応 */
@media (max-width: 700px) {
  .form-wrapper {
    padding: 20px 10px;
  }

  .form-card {
    padding: 25px 15px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }

  .form-title {
    font-size: 24px;
  }

  .form-subtitle {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea,
  input[type="file"] {
    width: 100%;
    padding: 12px 14px;
    font-size: 14px;
  }

  .checkbox-wrapper {
    flex-direction: column;
    align-items: flex-start;
  }

  .checkbox-label {
    margin-bottom: 8px;
  }

  .submit-btn {
    font-size: 15px;
    padding: 14px;
    border-radius: 12px;
  }
  .accordion-category details .checkbox-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 6px 10px;
  }
  .consent-wrapper {
    flex-direction: row; /* 横並びを維持 */
    align-items: center;
  }
  .consent-label {
    font-size: 13px; /* 少し小さく調整 */
  }
  /* その他のチェックボックスは縦並び */
  .form-group.checkbox-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }  
}

</style>