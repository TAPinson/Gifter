using Gifter.Data;
using Gifter.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gifter.Repositories
{
    public class CommentRepository : ICommentRepository
    {
        private readonly ApplicationDbContext _context;

        public CommentRepository(ApplicationDbContext conext)
        {
            _context = conext;
        }

        public List<Comment> GetAll()
        {
            return _context.Comment.ToList();
        }

        public Comment GetById(int id)
        {
            return _context.Comment.FirstOrDefault(comment => comment.Id == id);
        }

        public void Add(Comment comment)
        {
            _context.Add(comment);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var comment = GetById(id);
            _context.Comment.Remove(comment);
            _context.SaveChanges();
        }

        public void Update(Comment comment)
        {
            _context.Entry(comment).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public List<Comment> GetByPostId(int id)
        {
            return _context.Comment.Where(comment => comment.PostId == id).ToList();
        }
    }
}
