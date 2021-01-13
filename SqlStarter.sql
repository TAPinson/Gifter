DELETE FROM Subscription;
DELETE FROM Comment;
DELETE FROM Post;
DELETE FROM  UserProfile;
SET IDENTITY_INSERT [UserProfile] ON
INSERT INTO [UserProfile]
  ([Id], [Name], [Email], [ImageUrl], [Bio], [DateCreated])
VALUES 
  (1, 'Oliver Hardy', 'olie@email.com', null, null, '06-21-2020'),
  (2, 'Stan Laurel', 'stan@email.com', null, null, '04-20-2020'),
  (3, 'Machoman Randy Savage', 'randysavage@email.com', null, null, '03-20-2020'),
  (4, 'Hulk Hogan', 'hulkamania@email.org', null, null, '01-02-2021'),
  (5, 'Starkey', 'JStark@email.net', null, null, '01-01-2021');
SET IDENTITY_INSERT [UserProfile] OFF
SET IDENTITY_INSERT [Post] ON
INSERT INTO [Post]
  ([Id], [Title], [ImageUrl], [Caption], [UserProfileId], [DateCreated])
VALUES
  (1, 'Wait...what?', 'https://media.giphy.com/media/j609LflrIXInkLNMts/giphy.gif', null, 1, '06-22-2020'),
  (2, 'Stop that', 'https://media.giphy.com/media/jroyKTvw89Dh3J1sss/giphy.gif', 'There''s this guy. He''s in a hall. He want''s you to stop', 1, '06-23-2020'),
  (3, 'Paintball', 'https://media.giphy.com/media/l2R09jc6eZIlfXKlW/giphy.gif', 'I believe I will win', 1, '06-29-2020'),
  (4, 'People!', 'https://media.giphy.com/media/u8mNsDNfHCTUQ/giphy.gif', 'animals are better', 1, '06-29-2020'),
  (5, 'Laughter', 'https://media.giphy.com/media/5vGkcQV9AfDPy/giphy.gif', null, 2, '04-20-2020'),
  (6, 'TFW you go back to writing JS after 3 months', 'https://media.giphy.com/media/NJkIw5wfnM3e0/giphy.gif', 'So this is...different', 3, '01-11-2021'),
  (7, 'So now this is a thing again', 'https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif', 'Welcome back. Thanks I hate it', 3, '01-10-2021'),
  (8, '"Your repository methods could be 1 line"', 'https://media.giphy.com/media/dw7lCpFmsyfS0/giphy.gif', null, 4, '01-05-2021'),
  (9, 'MRW Adam says "Interfaces are just a contract for classes!"', 'https://media.giphy.com/media/vRHGFmqvSAPdDH1JWV/giphy.gif', 'Oh! So simple!', 4, '12-25-2020');
SET IDENTITY_INSERT [Post] OFF
SET IDENTITY_INSERT [Comment] ON
INSERT INTO [Comment]
  ([Id], [UserProfileId], [PostId], [Message])
VALUES
  (1, 2, 1, 'A comment is a comment is a comment');
SET IDENTITY_INSERT [Comment] OFF
SET IDENTITY_INSERT [Subscription] ON
INSERT INTO [Subscription]
	([Id], [ProviderId], [SubscriberId])
VALUES
	(1, 3, 4),
	(2, 3, 1),
	(3, 4, 3);
SET IDENTITY_INSERT [Subscription] OFF