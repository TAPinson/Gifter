using Gifter.Models;
using System;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        void Add(Post post);
        void Delete(int id);
        List<Post> GetAll();
        Post GetById(int id);
        List<Post> GetByUserProfileId(int id);
        List<Post> Hottest(DateTime date);
        List<Post> Search(string criterion, bool sortDescending);
        void Update(Post post);
    }
}