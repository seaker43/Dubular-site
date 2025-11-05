const fs=require('fs');
const routes={
  "version": 1,
  "include": [
    "/*"
  ],
  "exclude": [
    "/_worker.js"
  ]
};
fs.writeFileSync('_routes.json',JSON.stringify(routes,null,2));
const pages={generatedAt:new Date().toISOString()};
fs.writeFileSync('pages.json',JSON.stringify(pages,null,2));
console.log('wrote pages.json and _routes.json');