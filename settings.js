module.exports = {
    flowFile: 'flows.json', // Flow JSON bạn đang dùng
    uiPort: process.env.PORT || 1880,

    // Để bảo mật nếu bạn muốn thêm sau
 adminAuth: {
        type: "credentials",
        users: [
            {
                username: "UTE21146282",
                password: "$2y$08$Zi46aTUTpUJwIF0p.HldGeJMAwkT3fwRQiZ6lDONfWNfERwDAczB6",
permissions: "*"
            }
        ]
    },

    functionGlobalContext: {}, // Cho phép dùng biến toàn cục

    editorTheme: {
        projects: {
            enabled: true
        }
    },

    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    }
};
