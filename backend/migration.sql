DROP TABLE IF EXISTS journalentry;

CREATE TABLE journalentry (
    id SERIAL PRIMARY KEY,
    journalentry_name TEXT,
    journalentryDesc TEXT,
    journalentry_url TEXT
); 

INSERT INTO journalentry ( journalentry_name, journalentryDesc, journalentry_url ) VALUES
('Japan',' Mount Fuji is the tallest moutainn in Japan It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth.','https://source.unsplash.com/WLxQvbMyfas'),
('Australia',' The Sydney Opera House is a Multi-Venu Performing arts Center is Sydney.','https://source.unsplash.com/JmuyB_LibRo'),
(' Norway ',' The Geiranger Fjord is a fjord in the Sunnmore region of More og Romsdal county, Norway. ', 'https://source.unsplash.com/3PeSjpLVtLg');