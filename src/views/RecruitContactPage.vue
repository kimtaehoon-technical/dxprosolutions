<template>
  <div>
    <h1>応募フォーム</h1>
    <p>以下のフォームを作成してください。</p>
    <form @submit.prevent="sendEmail('application')" enctype="multipart/form-data">
      <div>
        <label for="name" class="required">お名前:</label>
        <input type="name" id="name" v-model="name" required>
      </div>
      <div>
        <label for="telephone" class="required">電話番号:</label>
        <input type="tel" id="telephone" v-model="telephone" required>
      </div>
      <div>
        <label for="email" class="required">メールアドレス:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="saiyoselect" class="required">応募希望：</label>
        <select name="saiyoselect" v-model="saiyoselect" class="large-select" required>
          <option value="">選択してください</option>
          <option value="新卒採用"> 新卒採用 </option>
          <option value="中途採用"> 中途採用 </option>
        </select>
      </div>
      <div>
        <label for="message" class="required">希望年収(円):</label>
        <input type="number" id="message" v-model="message" required min="1000000" max="100000000" step="1000000" placeholder="1,000,000">
      </div>
      <div class="form-group file-upload">
        <label for="file" class="required">履歴書・職務経歴書:</label>
        <input type="file" id="file" @change="handleFileUpload" required/>
      </div>
      <div class="checkbox-group">
        <label for="consent" class="required">個人情報の取扱規定に同意する</label>
        <input type="checkbox" id="consent" name="consent" v-model="consent" value="個人情報の取扱規定に同意する" required>
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AccessPage',
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
       const formData = new FormData();
       formData.append('name', this.name);
       formData.append('telephone', this.telephone);
       formData.append('email', this.email);
       formData.append('saiyoselect', this.saiyoselect);
       formData.append('message', this.message);
       formData.append('consent', this.consent);
       formData.append('file', this.file);
       formData.append('formType', formType);

      try {
        const response = await fetch('https://dxpro.onrender.com/send-email', {
           method: 'POST',
           body: formData
         });

         if (response.ok) {
           alert('お問い合わせありがとうございます。');
           window.location.reload();
           window.scrollTo(0, 0);
         } else {
           alert('送信に失敗しました。');
         }
       } catch (error) {
         console.error('Error:', error);
         alert('送信に失敗しました。');
       }
     }
  }
};
</script>
<style scoped>
form {
  max-width: 600px;
  margin: auto;
}
.form-group {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}
div {
  margin-bottom: 10px;
}
label {
  display: block;
  position: relative;
}

label.required::before {
  content: '*';
  color: red;
  margin-right: 5px;
}

input, textarea, select {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-bottom: 10px;
}
input[type="file"] {
  height: auto;
}
button {
  padding: 10px 100px;
  background-color: #007BFF;
  color: white;
  border: none;
  width: 100%;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}

select.large-select {
  height: 50px;
  width: 100%;
  font-size: 16px;
}
.checkbox-group {
  display: flex;
  align-items: center;
}
.checkbox-group input[type="checkbox"] {
  transform: scale(0.8);
  margin-right: 10px;
}

.checkbox-group label {
  margin-left: 5px;
}

.file-upload label {
  width: 100%;
  margin-right: 10px;
}

.checkbox-group label {
  width: 100%;
  margin-right: 10px; 
}

@media (max-width: 600px) {
  form {
    padding: 15px;
  }

  input, textarea {
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
  }

  select.large-select {
    margin-top: 15px;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 15px;
    font-size: 14px;
    width: 100%;
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