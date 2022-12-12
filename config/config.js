module.exports = {
    data: {
        cpu: {
            active: true,
        },
        cpuCurrentspeed: {
            active: true,
        },
        mem: {
            active: true,
        },
    },
    server: {
        port: 3030 || process.env.PORT ,
        refreshRate: 10
    },
};
