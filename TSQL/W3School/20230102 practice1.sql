USE practice230101
GO

SELECT * FROM W3School
GO

INSERT INTO Book (BookCode, BookTitle, Author, Edition, BookPrice, Copies)
	VALUES (001, 'Tam ly hoc dam dong', 'Gustave Le Bon', 1, 4, 1)
GO

INSERT INTO Book (BookCode, BookTitle, Author, Edition, BookPrice, Copies) VALUES (002, 'Ban ve tu do', 'John Stuart Mill', 1, 3, 2)
GO
INSERT INTO Book (BookCode, BookTitle, Author, Edition, BookPrice, Copies) VALUES (003, 'The gioi nhu toi thay', 'Albert Einstein' , 1, 3, 2)
GO
INSERT INTO Book (BookCode, BookTitle, Author, Edition, BookPrice, Copies) VALUES (004, 'Su kien tao xa hoi ve thuc tai', 'Peter L. Berger and Thomas Luckmann' , 1, 3, 1)
GO

SELECT * FROM Book WHERE BookPrice = '3' and Copies = '1'
GO

SELECT * FROM Book WHERE BookPrice IS NOT NULL
GO

SELECT * FROM Book WHERE BookPrice = '3' or Copies = '2'
GO

SELECT * FROM Book WHERE NOT Copies = '2'
GO

SELECT * FROM Book WHERE BookPrice = '3' AND NOT Copies = '1'
GO

SELECT * FROM Book ORDER BY BookPrice, Author DESC
GO

INSERT INTO Book (BookCode, BookTitle, Author) VALUES (5, 'Socrate tu bien', 'Plato and Xenophon')
GO

UPDATE Book
	SET BookTitle = 'Vat ly va triet hoc', Author = 'Werner Heisenberg'
	WHERE BookCode ='5'
GO

DELETE FROM Book WHERE BookTitle = 'The gioi nhu toi thay'
GO

DELETE FROM Book
GO

SELECT * FROM Book
GO