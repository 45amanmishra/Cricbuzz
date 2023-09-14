CREATE DATABASE Cricbuzz;
CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    isAdmin bool
)

CREATE TABLE news(
    title VARCHAR(255),
    keywords [VARCHAR(255)],
    link VARCHAR(255),
    creator [VARCHAR(255)],
    video_url VARCHAR(255),
    description VARCHAR(255),
    content VARCHAR(255),
    pubDate VARCHAR(255),
    image_url VARCHAR(255),
    source_id VARCHAR(255),
    country [VARCHAR(255)],
    category [VARCHAR(255)],
    language VARCHAR(255),
)
