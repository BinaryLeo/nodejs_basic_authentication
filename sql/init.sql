CREATE EXTENSION "uuid-ossp"; -- IF NOT EXISTS
CREATE EXTENSION "pgcrypto"; -- IF NOT EXISTS
create TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4(), -- --generates a hash non sequential
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY (uuid)
)
insert into application_user(
username,password) values('admin', crypt('admin','my_salt'))
 -- type here valid credentials | credentials that you want