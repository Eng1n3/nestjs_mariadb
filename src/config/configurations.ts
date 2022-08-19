export default () => ({
    saltOrRounds: parseInt(process.env.SALT_OR_ROUNDS, 10) || 10,
    databaaseMysql: {
        host: process.env.MYSQL_HOST || "localhost",
        port: parseInt(process.env.PORT, 10) || 3306,
        user: process.env.MYSQL_USER || "eng1n3",
        password: process.env.MYSQL_PASSWORD || "Tr0j4n_w4r399"
    }
})