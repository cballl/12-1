const path = require("path")
const addPath = dir => path.join(__dirname,dir);
module.exports = {
    webpack:{
        alias:{
            "@":addPath("src")
        },
        devServer:{
            proxy: {
                "/api": {
                    target: 'http://localhost:3001',
                    pathRewrite: {
                        "^/api": " "
                    }
                },
            }
        }
    },
}   