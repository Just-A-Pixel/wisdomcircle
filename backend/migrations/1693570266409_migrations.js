/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    pgm.createTable("users", {
        id: "id",
        firstName: { type: "varchar(1000)", notNull: true },
        lastName: { type: "varchar(1000)", notNull: true },
        email: { type: "varchar(1000)", unique: true, notNull: true },
        phone: { type: "varchar(10)", unique: true, notNull: true },
        password: { type: "varchar(60)", notNull: true },
        createdAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
        updatedAt: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("current_timestamp"),
        },
    });
};

exports.down = (pgm) => {
    pgm.dropTable("users");
};
