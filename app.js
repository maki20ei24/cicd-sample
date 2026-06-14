const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080; // OpenShiftの標準ポート8080

app.get('/', (req, res) => {
    res.send('<h1>🚀 Webhookによる自動トリガー成功！ V1</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
